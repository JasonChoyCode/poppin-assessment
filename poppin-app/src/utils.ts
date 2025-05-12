function getRandomName() {
  const names = [
    "Midnight Masquerade",
    "Neon Jungle Bash",
    "Summer Nights Gala",
    "Enchanted Garden",
    "Retro Disco Fever",
    "Moonlight Serenade",
    "Funky Fiesta",
    "Tropical Twilight",
    "Electric Carnival",
    "Velvet Underground",
    "Glow Up Party",
    "Dreamscape Dance",
    "Boogie Wonderland",
    "Sunset Soirée",
    "Mystic Mirage",
    "Cosmic Crush",
    "Silent Beats Party",
    "Frost & Flame",
    "Champagne Storm",
    "Radiant Rewind",
  ];
  return names[Math.floor(Math.random() * names.length)];
}

function getRandomImage() {
  const images = [
    "https://t4.ftcdn.net/jpg/01/20/28/25/360_F_120282530_gMCruc8XX2mwf5YtODLV2O1TGHzu4CAb.jpg",
    "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?cs=srgb&dl=pexels-wendywei-1190298.jpg&fm=jpg",
    "https://media.istockphoto.com/id/1298329918/photo/birthday-celebratory-toast-with-string-lights-and-champagne-silhouettes.jpg?s=612x612&w=0&k=20&c=PaDeMR5-r0NdlxghuVF9tRqR5XkCdNdTzxrkofv0Syk=",
    "https://media.istockphoto.com/id/1933378885/photo/bride-and-groom-using-sparklers-with-their-wedding-guests-on-the-beach-wedding-party.jpg?s=612x612&w=0&k=20&c=AW9AFDi5-mjCvv4W49jOlc4LtvF6XTGd5dLMSdJAnpI=",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyhvLuOfp2WQZnk5sbfskNeFVpejflCEreDA&s",
    "https://images.theconversation.com/files/338414/original/file-20200528-51509-1fm69mw.jpg?ixlib=rb-4.1.0&rect=26%2C422%2C3000%2C1500&q=45&auto=format&w=1356&h=668&fit=crop",
    "https://www.indystar.com/gcdn/authoring/images/smg/2024/11/30/SMGW/76678405007-54-90147.jpeg?crop=4296,2417,x0,y223&width=660&height=371&format=pjpg&auto=webp",
    "https://cdn.pixabay.com/photo/2022/06/02/15/01/music-7238254_1280.jpg",
    "https://res.cloudinary.com/sagacity/image/upload/c_crop,h_3333,w_5000,x_0,y_0/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1200/086A6699_bdmxdi.jpg",
    "https://cdn.pixabay.com/photo/2021/12/27/16/40/sylvester-6897648_640.jpg",
  ];
  return new URL(images[Math.floor(Math.random() * images.length)]);
}

function getRandomEmoji() {
  const emojis = [
    "https://images.emojiterra.com/google/android-11/512px/1f4af.png",
    "https://em-content.zobj.net/source/apple/114/fire_1f525.png",
    "https://emojiisland.com/cdn/shop/products/Money_Bag_Emoji_grande.png?v=1571606064",
    "https://png.pngtree.com/png-clipart/20220707/ourmid/pngtree-clink-glasses-to-celebrate-beer-toast-champagne-cheers-beer-festival-png-image_5768205.png",
    "https://static-00.iconduck.com/assets.00/party-popper-emoji-2012x2048-lhq1rf8v.png",
  ];
  return new URL(emojis[Math.floor(Math.random() * emojis.length)]);
}

export function getNewParty(id: number) {
  return {
    id,
    name: getRandomName(),
    date: getRandomDate(),
    image: getRandomImage(),
    emoji: getRandomEmoji(),
  };
}

function getRandomDate() {
  const start = new Date();
  const end = new Date(start);
  end.setFullYear(end.getFullYear() + 1);
  const date = new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
  return date;
}

export function formatDate(date: Date): string {
  const weekday = date.toLocaleString("en-US", { weekday: "short" });
  const month = date.toLocaleString("en-US", { month: "short" });
  const day = date.toLocaleString("en-US", { day: "numeric" });
  const time = date.toLocaleString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  return `${weekday}, ${month} ${day}, ${time}`;
}
