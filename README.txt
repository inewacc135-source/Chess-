CHESS STUDY COACH — STOCKFISH 19 FIX

This version loads the Stockfish.js 19 Lite single-threaded browser build from
direct GitHub raw file URLs, avoiding jsDelivr's npm package-size restriction.
The matching JavaScript and WebAssembly files are pinned to the same repository
version path. An internet connection is required the first time the engine loads.

PUBLISHING
1. Open https://github.com/inewacc135-source/Chess-
2. Upload and replace these files from this ZIP: index.html, engine-worker.js,
   sw.js, and README.txt. Keep manifest.webmanifest as it is.
3. Commit the changes to the main branch.
4. Wait for GitHub Pages to publish, then close and reopen the website.

CHANGES
- Removed the “analysing…” placeholder from the Best move display.
- The best move appears as soon as Stockfish reports a legal principal variation.
- Improved the engine loading error to show the browser's error message.
- Updated the service-worker cache version.
- Keeps the legal-move validation and fallback handling from the previous update.

Stockfish.js is GPL-3.0 software. Upstream source and licence: https://github.com/nmrugg/stockfish.js
Engine file source: https://github.com/eple12/ClaudyWeb/tree/main/stockfish
This is for studying positions and reviewing completed games, not live-game assistance.
