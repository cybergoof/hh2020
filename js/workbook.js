// pulled from https://github.com/squidfunk/mkdocs-material/issues/791#issuecomment-396563541
// modified by Phil Hagen

// Offset top helper
function offsetY(elem) {
    if(!elem) elem = this;
    var y = elem.offsetTop;
    while (elem = elem.offsetParent) {
        y += elem.offsetTop;
    }
    return y;
}

var links = document.getElementsByTagName('a');
for(var i = 0; i < links.length; i++) {
    links[i].onclick = function (event) {
        var o = document.getElementById(this.hash.substr(1));
        if(this.origin + this.pathname == window.location.origin + window.location.pathname) {
            event.preventDefault();
            var sT = offsetY(o) - document.getElementsByClassName('md-header')[0].clientHeight;
            window.location.hash = this.hash;
            window.scrollTo(0, sT);
        }
    }
}

// attach fancybox to all class="zoom" elements
$(document).ready(function() {
    $(".zoom").fancybox();
});
