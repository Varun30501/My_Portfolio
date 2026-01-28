// src/utils/analytics.js
export const trackEvent = (name, params = {}) => {
  if (window.gtag) {
    window.gtag("event", name, params);
  } else {
    // Fallback (dev / no analytics)
    console.log("[Analytics]", name, params);
  }
};
