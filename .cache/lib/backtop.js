window.onload = function() {
  var body = document.getElementsByTagName('body')[0];
  var dom = document.createElement('div');
  dom.style = 'position: fixed;bottom: 100px;right: 20px;border-width: 0px 12px 40px;border-color: transparent transparent green;border-style: solid;cursor: pointer;';
  dom.onclick = function() {
    window.scrollTo(0, 0);
  }
  body.appendChild(dom);
}