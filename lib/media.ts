/**
 * Media URL Helper
 * 
 * Cloudflare R2 (assets.phishy.io) için medya dosyalarını yönetir.
 * Büyük dosyalar (video, görsel, ses) R2'de saklanır.
 * 
 * Kullanım:
 * - getMediaUrl('website/test.png') → https://assets.phishy.io/website/test.png
 * - getImageUrl('blog/hero.jpg') → https://assets.phishy.io/blog/hero.jpg
 */

// R2 Public Bucket URL
const R2_BASE_URL = 'https://assets.phishy.io';

/**
 * R2'deki medya dosyasının URL'ini döndürür
 * 
 * @param path - R2'deki dosya yolu (örn: 'website/test.png')
 * @returns Tam URL
 */
export function getMediaUrl(path: string): string {
  // Path'teki başlangıç slash'ini temizle
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  return `${R2_BASE_URL}/${cleanPath}`;
}

/**
 * Görsel URL'i (R2)
 * 
 * @param path - Görsel yolu (örn: 'blog/hero.jpg')
 * @returns Tam URL
 */
export function getImageUrl(path: string): string {
  return getMediaUrl(path);
}

/**
 * Video URL'i (R2)
 * 
 * @param path - Video yolu (örn: 'website/demo.mp4')
 * @returns Tam URL
 */
export function getVideoUrl(path: string): string {
  return getMediaUrl(path);
}

/**
 * Ses dosyası URL'i (R2)
 * 
 * @param path - Ses dosyası yolu (örn: 'podcasts/episode1.mp3')
 * @returns Tam URL
 */
export function getAudioUrl(path: string): string {
  return getMediaUrl(path);
}

