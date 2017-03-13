(function f() {
    var s = window.getSelection();
    var q = s.anchorNode.textContent.slice(s.anchorOffset, s.focusOffset);
    var sq = prompt(`Look up word: ${q}`, q);
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState === 4) {
            try {
                var iframe = document.createElement('iframe');
                iframe.src = `data:text/html;charset=utf-8,${encodeURI(this.responseText)}`;
                document.body.appendChild(iframe);
            } catch (err) {
                alert(err);
            }
            setTimeout(function() {
                var doc = iframe.contentWindow.document;
                var nodes = doc.querySelectorAll('#translations td a');
                var text = Array.from(nodes).map(x => x.textContent).filter(x => x).join(", ");
                console.log(doc, nodes, text);
                alert(text || 'Didn\'t find it :(');
            }, 100);
        }
    };
    xhr.open('GET', `http://www.sanakirja.org/search.php?q=${sq}&l=17&l2=3`);
    xhr.send();
})();
