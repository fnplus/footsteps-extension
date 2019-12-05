window.onload = () => {
  var title=document.querySelector('title').text;
  const metas = document.getElementsByTagName("meta");
  var data = "";
  for (let i = 0; i < metas.length; i++) {
    if (
      metas[i].getAttribute("name") === "description" ||
      metas[i].getAttribute("name") === "summary"
    ) {
      
      data += metas[i].getAttribute("content");
    }
    // Debug message
    console.log(title +'' + data);

  }
  chrome.runtime.sendMessage({
    action: "getTitle",
    source: {
      title: title,
      description: data
    }
  });
};
