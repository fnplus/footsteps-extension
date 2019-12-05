window.onload = () => {
  var title=document.querySelector('title').text;
  const metas = document.getElementsByTagName("meta");
  var metaData = "";
  for (let i = 0; i < metas.length; i++) {
    if (
      metas[i].getAttribute("name") === "description" ||
      metas[i].getAttribute("name") === "summary"
    ) {
      
      metaData += metas[i].getAttribute("content");
    }


  }
  // Debug message to make sure it Works
  console.log(title+ metaData);

  chrome.runtime.sendMessage({
    action: "getTitle",
    source: {
      title: title,
      description: data
    }
  });
};
