interface Folders {
  folder: string;
  total: number;
}

interface Photos {
  src: string;
}

// Generate photos
function generatePhotos(folders: Folders[]) {
  const photos: Photos[] = [];

  folders.forEach(({ folder, total }) => {
    for (let i = 1; i <= total; i++) {
      photos.push({
        src: `images/${folder}/${i}.jpg`,
      });
    }
  });

  return photos;
}

const folders: Folders[] = [
  { folder: "bath-robes-towels", total: 7 },
  { folder: "bed-linen", total: 9 },
  { folder: "curtains", total: 3 },
  { folder: "hospital-line", total: 5 },
  { folder: "jacquard-kitchen-tea-towel", total: 7 },
  { folder: "kitchen-tea-towels", total: 8 },
  { folder: "summer-beach-dress", total: 6 },
  { folder: "table-cover-napkins", total: 6 },
  { folder: "terry-kitchen-towel", total: 5 },
];

// export const photos = generatePhotos(folders);
export const photos: Photos[] = Array.from({ length: 12 }, (_, i) => ({
  src: `https://picsum.photos/800/600?random=${i + 1}`,
}));
