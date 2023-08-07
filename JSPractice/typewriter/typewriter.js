// https://cdn.jsdelivr.net/npm/@nicesapien0/typewriter.js/typewriter.js
// Get HTML head element
var head = document.getElementsByTagName('HEAD')[0];

// Create new link Element
var link = document.createElement('link');

// set the attributes for link element
link.rel = 'stylesheet';

// omit the type attribute is ok!
link.type = 'text/css';

// link.href = 'https://cdn.jsdelivr.net/npm/@nicesapien0/typewriter.js/typewriter.css';
link.href = 'typewriter.css';

// 在head头中子节点末端添加<link rel="stylesheet" type="text/css" href="typewriter.css">
head.appendChild(link);

var typewriterConfig = ["Your Text", true];
const tYpewriter = document.getElementsByClassName('typewriter-effect');
function typewriter() {
  const typeWriter = document.getElementById('typewriter-text');
  if (typewriterConfig[1] == true) {
    // 将最后一个水平居中.
    tYpewriter[tYpewriter.length - 1].style.setProperty('justify-content', 'center');
  }
  typeWriter.innerHTML = typewriterConfig[0];
  // 给#typewriter-text设置自定义属性--characters，为字体字符长度.
  typeWriter.style.setProperty('--characters', typewriterConfig[0].length);
}