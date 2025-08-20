<!-- README.md -->
# NaDaSie Mobile (Expo / React Native)

## Build przez GitHub Actions → APK
1. W repo GitHub dodaj *Secrets* (Settings → Secrets and variables → Actions):
   - `EAS_TOKEN` – z `eas token:create`
   - `WC_API_URL` – `https://nadasie.pl/wp-json/wc/v3`
   - `WC_CONSUMER_KEY` – `ck_...`
   - `WC_CONSUMER_SECRET` – `cs_...`
2. Push na `master` uruchomi workflow.  
3. Po zakończeniu pobierz `app.apk` z **Artifacts**.

## Lokalnie (opcjonalnie)
```bash
npm install
npm start
