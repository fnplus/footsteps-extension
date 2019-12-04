window.onload = () => {
  var title = document.title;
  const metas = document.getElementsByTagName("meta");
  var data = "";
  for (let i = 0; i < metas.length; i++) {
    if (
      metas[i].getAttribute("name") === "description" ||
      metas[i].getAttribute("name") === "summary"
    ) {
      console.log(metas[i].getAttribute("content"));
      data += metas[i].getAttribute("content");
    }
  }
  chrome.runtime.sendMessage({
    action: "getTitle",
    source: {
      title: title,
      description: data
    }
  });
};
