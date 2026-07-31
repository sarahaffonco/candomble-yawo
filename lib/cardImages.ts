const cardImageMap: Record<string, string> = {
  esu: "Esu.jpg",
  ogum: "OGUN.jpg",
  oxossi: "Oxossi.jpg",
  logun: "Logun.jpg",
  ossaim: "Ossain.jpg",
  omulu: "Omulu.jpg",
  oxumare: "Oxumare.jpg",
  iroko: "Iroko.png",
  xango: "Xango.jpg",
  oya: "Oya.png",
  oba: "Oba.jpg",
  oxum: "Oxum.jpg",
  ewa: "Ewa.png",
  nana: "Nana.jpg",
  yemanja: "Yemanja.jpg",
  oxala: "Oxala.jpg",
  ibeji: "Ibeji.jpg",
  ori: "ori.png",
  yami: "Iyami.png",
  iyami: "Iyami.png",
};

export function getCardImagePath(slug: string): string {
  const normalized = slug
    .toLowerCase()
    .replace(/^adura-/, "")
    .replace(/\d+$/, "");

  const mappedFileName = cardImageMap[normalized];

  if (mappedFileName) {
    return `/images/cards/${mappedFileName}`;
  }

  return `/images/cards/${normalized}.jpg`;
}
