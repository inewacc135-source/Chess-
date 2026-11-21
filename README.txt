CHESS STUDY COACH — UPDATED STOCKFISH LOADER

This ZIP contains the website files with the Stockfish worker loader changed to
use the matching Stockfish.js 19 Lite single-threaded JavaScript and WASM files
from the same GitHub source through jsDelivr's GitHub CDN.

INSTALL ON GITHUB
1. Open https://github.com/inewacc135-source/Chess-
2. Open each file listed below and replace its complete contents with the
   matching file from this ZIP:
   - index.html
   - engine-worker.js
   - sw.js
3. Keep manifest.webmanifest as included (or leave your existing copy unchanged).
4. Commit the changes to the main branch.
5. Wait for GitHub Pages to publish, then close and reopen the website.
   The service worker cache is version 4 to clear the previous cached version.

NOTES
- The Best move field no longer displays an analysing placeholder.
- The move appears when Stockfish reports it.
- Internet access is required to load the engine.
- Stockfish.js is GPL-3.0 software. Upstream project: https://github.com/nmrugg/stockfish.js
- Engine asset source: https://github.com/eple12/ClaudyWeb/tree/main/stockfish
- This site is intended for studying positions and reviewing completed games.
