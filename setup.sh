mkdir -p artifacts

gsutil -m cp \
  "gs://headless_shell_staging/chromium-4fe4891-locales-linux_x64.md5" \
  "gs://headless_shell_staging/chromium-4fe4891-locales-linux_x64.zip" \
  ./artifacts

unzip -f artifacts/chromium-4fe4891-locales-linux_x64.zip

PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=1 \
  yarn

echo 'setup complete'
