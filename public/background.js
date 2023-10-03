// get message
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log(request);
  if (request.message === "decrement_count") {
    console.log("not added");
  }
}
);