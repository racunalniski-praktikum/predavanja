import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs';

// Initialize Mermaid but don't render diagrams on start
mermaid.initialize({
    startOnLoad: false,
    cloneCssStyles: false,
    gitGraph: {
        showBranches: false
    }
});

function initMermaid(s) {
    const elements = document.querySelectorAll(".remark-slide")[s.getSlideIndex()]
        ?.querySelectorAll('.mermaid-diagram p:not([data-processed="true"])');
    if (elements) mermaid.init(undefined, elements);
}

var jQuerySrc = document.createElement('script');
jQuerySrc.src = 'https://code.jquery.com/jquery-1.12.4.min.js';
jQuerySrc.type = 'text/javascript';
jQuerySrc.onload = function() {
    var $ = window.jQuery;
    $(document).ready(function() { 

      $('span.spoiler').hide();

      $('<a class="reveal">???</a>').insertBefore('.spoiler');

      $('a.reveal').click(function(){
        $(this).next().fadeIn(100);
        $(this).hide();
      });
    }); 
};
document.head.appendChild(jQuerySrc);

var remarkSrc = document.createElement('script');
remarkSrc.src = 'https://remarkjs.com/downloads/remark-latest.min.js';
remarkSrc.type = 'text/javascript';
remarkSrc.onload = function () {
  var slideshow = remark.create({
    highlightLines: true,
    highlightLanguage: 'ocaml',
    highlightStyle: 'github',
    countIncrementalSlides: false,
    ratio: '16:9'
  });          
  // Render diagrams immediately on the current slide
  initMermaid(slideshow.getSlides()[slideshow.getCurrentSlideIndex()]);

  // Render diagrams when there is a navigation to another slide
  slideshow.on("afterShowSlide", initMermaid);
};
document.head.appendChild(remarkSrc);

var mathJaxSrc = document.createElement('script');
mathJaxSrc.src = 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.1/MathJax.js?config=TeX-AMS-MML_HTMLorMML';
mathJaxSrc.type = 'text/javascript';
document.head.appendChild(mathJaxSrc);
