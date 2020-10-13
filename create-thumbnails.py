from PIL import Image
import sys
import os

directory = sys.argv[1]
remove_old = len(sys.argv) > 2 and sys.argv[2] == "--remove"
thumbnails = os.path.join(directory, "thumbnails")
scaled = os.path.join(directory, "scaled")
# make directories
try:
    os.mkdir(thumbnails)
except IOError:
    print(f"Directory {thumbnails} already made")
try:
    os.mkdir(scaled)
except IOError:
    print(f"Directory {scaled} already made")

thumbnails_files = os.listdir(thumbnails)
scaled_files = os.listdir(scaled)

# make scaled versions
for filename in os.listdir(directory):
    if not filename.endswith(("jpg", "png")):
        continue
    # remove old versions if specified
    if remove_old:
        try:
            os.remove(os.path.join(thumbnails, filename))
        except IOError:
            pass
        try:
            os.remove(os.path.join(scaled, filename))
        except IOError:
            pass
    elif filename in scaled_files and filename in thumbnails_files:
        print(f"Skipping {filename}")
        continue
    # thumbnail
    img = Image.open(os.path.join(directory, filename), mode="r")
    img = img.resize(tuple(int(0.05 * dim) for dim in img.size), Image.LANCZOS)
    img.save(os.path.join(thumbnails, filename))
    # scaled
    img2 = Image.open(os.path.join(directory, filename), mode="r")
    scale_factor = 1
    if min(img2.size) > 4000:
        scale_factor = 2 / 3
    elif min(img2.size) > 1000:
        scale_factor = 1
    img2 = img2.resize(
        tuple(int(scale_factor * dim) for dim in img2.size), Image.LANCZOS
    )
    img2.save(os.path.join(scaled, filename))
    print(f"Resized {filename}")
