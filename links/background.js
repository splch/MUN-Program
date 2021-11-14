chrome.action.onClicked.addListener((tab) => {
  chrome.tabs.create({
    url: "index.html",
  });
});

chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason == "install") {
    localStorage.setItem("grad1", "#0066cc");
    localStorage.setItem("grad2", "#cccccc");
    localStorage.setItem("deg", "135deg");
    localStorage.setItem("text", "#ffffff");
    localStorage.setItem("logourl", "images/logos/logo.svg");
    localStorage.setItem("flagurl", "images/flags/united%20nations.svg");
    localStorage.setItem("countval", "Model United Nations");
    localStorage.setItem("gavel", "x");
    localStorage.setItem("flagchange", "x");
  } else {
    return;
  }
});
