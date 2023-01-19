chrome.action.onClicked.addListener((tab) => {
  // 点击扩展按钮图标。配置了manifest.json "default_popup": "src/views/popup/main.html", 将无法触发 click
  console.log("action click", tab);
  if (tab.id) {
    // chrome.tabs.sendMessage(tab.id, { toggleVisible: true });
  }
});

console.log("background.js");
