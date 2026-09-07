#!/usr/bin/env python3
"""Crop Dr. Jan Duffy headshot, drop the black square, and emit favicon/OG sizes."""

from __future__ import annotations

from pathlib import Path

import numpy as np
from PIL import Image, ImageDraw, ImageFont

ROOT = Path("/workspace")
SOURCE = Path(
    "/home/ubuntu/.cursor/projects/workspace/assets/"
    "d8905b8a-f005-4467-9702-6372be10703c.png"
)
GOLD = (212, 160, 23)
NAVY = (15, 23, 42)
WHITE = (255, 255, 255)
BLUE = (37, 99, 235)


def load_circle() -> Image.Image:
    img = Image.open(SOURCE).convert("RGBA")
    arr = np.array(img)
    rgb = arr[:, :, :3].astype(np.int16)
    alpha = arr[:, :, 3]
    is_black = (rgb[:, :, 0] < 22) & (rgb[:, :, 1] < 22) & (rgb[:, :, 2] < 22)
    arr[:, :, 3] = np.where(is_black, 0, alpha)

    ys, xs = np.where(arr[:, :, 3] > 12)
    pad = 12
    y0 = max(0, int(ys.min()) - pad)
    y1 = min(arr.shape[0], int(ys.max()) + 1 + pad)
    x0 = max(0, int(xs.min()) - pad)
    x1 = min(arr.shape[1], int(xs.max()) + 1 + pad)
    cropped = Image.fromarray(arr).crop((x0, y0, x1, y1))

    width, height = cropped.size
    side = max(width, height)
    square = Image.new("RGBA", (side, side), (0, 0, 0, 0))
    square.paste(cropped, ((side - width) // 2, (side - height) // 2), cropped)
    return square


def fit(img: Image.Image, size: int) -> Image.Image:
    return img.resize((size, size), Image.Resampling.LANCZOS)


def on_background(img: Image.Image, color: tuple[int, int, int]) -> Image.Image:
    bg = Image.new("RGB", img.size, color)
    bg.paste(img, mask=img.split()[-1])
    return bg


def save_ico(img: Image.Image, dest: Path) -> None:
    sizes = [(16, 16), (32, 32), (48, 48)]
    frames = [fit(img, s[0]) for s in sizes]
    frames[0].save(
        dest,
        format="ICO",
        sizes=[(16, 16), (32, 32), (48, 48)],
    )


def try_font(size: int) -> ImageFont.FreeTypeFont | ImageFont.ImageFont:
    for path in (
        "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",
        "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
    ):
        if Path(path).exists():
            return ImageFont.truetype(path, size)
    return ImageFont.load_default()


def make_og(circle: Image.Image) -> Image.Image:
    canvas = Image.new("RGB", (1200, 630), NAVY)
    draw = ImageDraw.Draw(canvas)
    draw.rectangle((0, 0, 16, 630), fill=BLUE)

    photo = fit(circle, 420)
    photo_rgb = on_background(photo, NAVY)
    canvas.paste(photo_rgb, (72, 105), photo)

    title = try_font(54)
    sub = try_font(28)
    small = try_font(22)
    draw.text((560, 150), "Dr. Jan Duffy", font=title, fill=WHITE)
    draw.text((560, 220), "REALTOR®  ·  S.0197614.LLC", font=small, fill=GOLD)
    draw.text(
        (560, 280),
        "Centennial Hills Homes for Sale",
        font=sub,
        fill=WHITE,
    )
    draw.text(
        (560, 330),
        "Berkshire Hathaway HomeServices",
        font=sub,
        fill=(191, 219, 254),
    )
    draw.text((560, 380), "Nevada Properties", font=sub, fill=(191, 219, 254))
    draw.text((560, 470), "(702) 222-1964", font=title, fill=GOLD)
    return canvas


def main() -> None:
    circle = load_circle()
    (ROOT / "public/images/agent").mkdir(parents=True, exist_ok=True)
    (ROOT / "public/images/logos").mkdir(parents=True, exist_ok=True)

    profile = fit(circle, 800)
    profile.save(ROOT / "public/images/agent/dr-jan-duffy.png", optimize=True)
    try:
        profile.save(
            ROOT / "public/images/agent/dr-jan-duffy.webp",
            format="WEBP",
            quality=88,
            method=6,
        )
    except OSError:
        print("webp skipped")

    on_background(profile, WHITE).save(
        ROOT / "public/images/agent/dr-jan-duffy.jpg",
        quality=90,
        optimize=True,
    )
    on_background(profile, WHITE).save(
        ROOT / "public/images/dr-jan-duffy.jpg",
        quality=90,
        optimize=True,
    )

    icon_512 = fit(circle, 512)
    icon_192 = fit(circle, 192)
    icon_180 = fit(circle, 180)
    icon_32 = fit(circle, 32)

    icon_512.save(ROOT / "app/icon.png", optimize=True)
    icon_512.save(ROOT / "public/images/logos/icon-512.png", optimize=True)
    icon_192.save(ROOT / "public/images/logos/icon-192.png", optimize=True)
    on_background(icon_180, NAVY).save(ROOT / "app/apple-icon.png", optimize=True)
    icon_32.save(ROOT / "public/favicon-32x32.png", optimize=True)

    # public/favicon.ico only — app/favicon.ico conflicts with the public file.
    save_ico(circle, ROOT / "public/favicon.ico")

    og = make_og(circle)
    # app/opengraph-image.png only — a public copy conflicts with the App Router file.
    og.save(ROOT / "app/opengraph-image.png", optimize=True)

    print("wrote brand images from", SOURCE.name, "circle", circle.size)


if __name__ == "__main__":
    main()
