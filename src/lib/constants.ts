export const INSTAGRAM_URL = "https://www.instagram.com/somosluzvela/";
export const INSTAGRAM_HANDLE = "@somosluzvela";
export const WHATSAPP_NUMBER = "5511984336900";

export const buildWhatsAppLink = (message: string) => {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};
