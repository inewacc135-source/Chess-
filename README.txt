CHESS STUDY COACH — STOCKFISH 19 UPDATE

This version uses Stockfish.js 19.0.1, lite single-threaded browser build.
It loads the engine in a Web Worker and fetches the matching WebAssembly file
from the version-pinned jsDelivr package. The single-threaded build does not
need special cross-origin isolation headers, so it is suitable for GitHub Pages.

To publish:
1. Open your GitHub repository: inewacc135-source/Chess-
2. Upload and replace ALL FIVE files in this ZIP:
   - index.html
   - engine-worker.js
   - manifest.webmanifest
   - sw.js
   - README.txt
3. Commit the changes to the main branch.
4. Wait for GitHub Pages to update, then close and reopen the website.
   The service-worker cache version has been updated to refresh the page.

Move handling:
- The app checks engine suggestions against the board's legal moves.
- It asks Stockfish for up to three ranked principal variations.
- If the top move is unavailable, it uses the next available legal engine line.
- If no engine line is usable but legal moves exist, it shows a legal fallback
  and clearly labels it as not necessarily the strongest.
- Checkmate and stalemate are reported as positions with no legal moves.

The engine and its matching WebAssembly file are loaded from the pinned
stockfish@19.0.1 CDN package, so an internet connection is required.
Stockfish.js is distributed under GPL-3.0. See:
https://github.com/nmrugg/stockfish.js

This tool is for studying positions and reviewing completed games, not for
assistance during live games against other people.
