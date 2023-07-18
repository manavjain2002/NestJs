import CryptoJS from 'crypto-js';

export function encrypt(text): string {
  const passphrase = process.env.KEY;
  return CryptoJS.AES.encrypt(text, passphrase).toString();
}

export function decrypt(ciphertext): string {
  const passphrase = process.env.KEY;
  const bytes = CryptoJS.AES.decrypt(ciphertext, passphrase);
  const originalText = bytes.toString(CryptoJS.enc.Utf8);
  return originalText;
}
