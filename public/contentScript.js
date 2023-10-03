// 获取鼠标拖动选中的文本,并且高亮显示
document.addEventListener('mouseup', (event) => {
  var selection = window.getSelection().toString();
  console.log(selection);
  // send message to background script
  chrome.runtime.sendMessage({ message: "clicked_browser_action",selection });
  // 高亮显示
  var span = document.createElement('span');
  span.style.backgroundColor = "yellow";
  span.innerText = selection;
  var range = window.getSelection().getRangeAt(0);
  range.deleteContents();
  range.insertNode(span);
});