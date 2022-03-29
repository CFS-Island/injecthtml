(function() {
    var cssMain = document.createElement('link');
    cssMain.href = '/fetchsrc/included.css';
    cssMain.rel = 'stylesheet';
    cssMain.type = 'text/css';
    document.getElementsByTagName('head')[0].appendChild(cssMain);


    fetch("/fetchsrc/included.html")
    .then((result) => {
        if (result.status != 200) { throw new Error("Bad Server Response"); }
        return result.text();
    })
    .then((content) => {
        document.getElementById("demoShow").innerHTML = content;
    })
    .catch((error) => { console.log(error); });
})();
