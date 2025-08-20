// src/config.js
// W CI (GitHub Actions) wartości wchodzą z Secrets → process.env
const get = (k, fb = "") => (typeof process !== "undefined" && process.env?.[k]) || fb;

module.exports = {
  WC_API_URL: get("WC_API_URL", "https://nadasie.pl/wp-json/wc/v3"),
  WC_CONSUMER_KEY: get("WC_CONSUMER_KEY", "ck_0bc5107b993e1a68d20da166ec06726c22d47399"),
  WC_CONSUMER_SECRET: get("WC_CONSUMER_SECRET", "cs_ec00a0acf4da9993243cfd30b0f2d3eb344dbdc8")
};
