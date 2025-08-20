// src/config.js
// W CI (GitHub Actions) wartości wchodzą z Secrets → process.env
const get = (k, fb = "") => (typeof process !== "undefined" && process.env?.[k]) || fb;

module.exports = {
  WC_API_URL: get("WC_API_URL", "https://nadasie.pl/wp-json/wc/v3"),
  WC_CONSUMER_KEY: get("WC_CONSUMER_KEY", ""),
  WC_CONSUMER_SECRET: get("WC_CONSUMER_SECRET", "")
};
