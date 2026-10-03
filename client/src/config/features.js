// Developer Feature Flags Config
// Change flags here to turn features ON (true) or OFF (false) anytime.

const envFlag = import.meta.env.VITE_SHOW_INVITATION_CARD;

export const FEATURE_FLAGS = {
  // Respect VITE_SHOW_INVITATION_CARD env var if set ('true'/'false'), or default to true
  SHOW_PHYSICAL_INVITATION_CARD: envFlag !== undefined ? envFlag === 'true' : true,
};
