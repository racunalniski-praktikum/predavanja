import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs';

mermaid.initialize();

// reveal-init.js
function loadScript(src) {
  return new Promise((resolve, reject) => {
    const s = document.createElement('script');
    s.src = src;
    s.onload = resolve;
    s.onerror = reject;
    document.head.appendChild(s);
  });
}

Promise.all([
  loadScript('https://cdn.jsdelivr.net/npm/reveal.js@5/dist/reveal.js'),
  loadScript('https://cdn.jsdelivr.net/npm/reveal.js@5/plugin/markdown/markdown.js'),
  loadScript('https://cdn.jsdelivr.net/npm/reveal.js@5/plugin/math/math.js'),
  loadScript('https://cdn.jsdelivr.net/npm/reveal.js@5/plugin/highlight/highlight.js'),
]).then(() => {
  Reveal.initialize({
    controls: "speaker-only",
    center: false,
    progress: false,
    slideNumber: "c/t",
    hash: true,
    plugins: [RevealMarkdown, RevealMath.KaTeX, RevealHighlight],
    transition: 'none',
    viewDistance: 99,
  });
});
