window.addEventListener("keydown", function(event) {
  let str = "key='" + event.key +
            "' | code='" + event.code + "' " +
            "' | location='" + event.location + "' " +
            "' | ctrlKey='" + event.ctrlKey + "' " +
            "' | shiftKey='" + event.shiftKey + "' " +
            "' | altKey='" + event.altKey + "' " +
            "' | metaKey='" + event.metaKey + "' " +
            "' | repeat='" + event.repeat + "' " +
            "' | isComposing='" + event.isComposing + "' ";
  let el = document.createElement("span");
  el.innerHTML = str + "<br/>";

  document.getElementById("output-down").appendChild(el);
}, true);
window.addEventListener("keyup", function(event) {
  let str = "key='" + event.key +
            "' | code='" + event.code + "' " +
            "' | location='" + event.location + "' " +
            "' | ctrlKey='" + event.ctrlKey + "' " +
            "' | shiftKey='" + event.shiftKey + "' " +
            "' | altKey='" + event.altKey + "' " +
            "' | metaKey='" + event.metaKey + "' " +
            "' | repeat='" + event.repeat + "' " +
            "' | isComposing='" + event.isComposing + "' ";
  let el = document.createElement("span");
  el.innerHTML = str + "<br/>";

  document.getElementById("output-up").appendChild(el);
}, true);
window.addEventListener("keypress", function(event) {
  let str = "key='" + event.key +
            "' | code='" + event.code + "' " +
            "' | location='" + event.location + "' " +
            "' | ctrlKey='" + event.ctrlKey + "' " +
            "' | shiftKey='" + event.shiftKey + "' " +
            "' | altKey='" + event.altKey + "' " +
            "' | metaKey='" + event.metaKey + "' " +
            "' | repeat='" + event.repeat + "' " +
            "' | isComposing='" + event.isComposing + "' ";
  let el = document.createElement("span");
  el.innerHTML = str + "<br/>";

  document.getElementById("output-press").appendChild(el);
}, true);
