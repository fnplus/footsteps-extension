window.onload = () => {
  var title = document.querySelector("title").text;
  console.log(title.text);
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
    source: `<h1> ${title} - ${data} </h1>`
  });
};
