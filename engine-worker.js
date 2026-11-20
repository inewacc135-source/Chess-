// Stockfish.js 19 lite, single-threaded browser build.
// Single-threaded mode works on GitHub Pages without special isolation headers.
var Module = {
  locateFile: function (path) {
    if (path.endsWith('.wasm')) {
      return 'https://cdn.jsdelivr.net/npm/stockfish@19.0.1/bin/stockfish-19-lite-single.wasm';
    }
    return path;
  }
};
importScripts('https://cdn.jsdelivr.net/npm/stockfish@19.0.1/bin/stockfish-19-lite-single.js');
