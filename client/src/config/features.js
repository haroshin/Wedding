// Developer Feature Flags Config
// Change flags here to turn features ON (true) or OFF (false) anytime.

const envPhysicalCardFlag = import.meta.env.VITE_SHOW_INVITATION_CARD;
const envWeddingPhotosFlag = import.meta.env.VITE_SHOW_WEDDING_PHOTOS_ALBUM;
const envPreWeddingGalleryFlag = import.meta.env.VITE_SHOW_PRE_WEDDING_GALLERY;

export const FEATURE_FLAGS = {
  // Respect VITE_SHOW_INVITATION_CARD env var if set ('true'/'false'), or default to true
  SHOW_PHYSICAL_INVITATION_CARD: envPhysicalCardFlag !== undefined ? envPhysicalCardFlag === 'true' : true,

  // Feature Flag: Pre-Wedding Moments Gallery (Set to false for OFF, or true for ON)
  SHOW_PRE_WEDDING_GALLERY: envPreWeddingGalleryFlag !== undefined ? envPreWeddingGalleryFlag === 'true' : false,

  // Feature Flag: Wedding Photos / Google Drive Album Section
  // Set to true to show the section in Gallery, or false to hide it
  SHOW_WEDDING_PHOTOS_ALBUM: envWeddingPhotosFlag !== undefined ? envWeddingPhotosFlag === 'true' : true,

  // Google Drive Album Link (Set your Google Drive link here or via VITE_GOOGLE_DRIVE_ALBUM_URL)
  // When empty or null, it shows the "Coming Soon" state automatically.
  GOOGLE_DRIVE_ALBUM_URL: import.meta.env.VITE_GOOGLE_DRIVE_ALBUM_URL || "",
};
