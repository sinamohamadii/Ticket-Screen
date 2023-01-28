$(document).ready(function () {
    $(".select-tag").select2({
    });
});
let chatBox = document.querySelector(".chat-background");
function auto_height(elem) {
    elem.style.height = "48px";
    elem.style.height = (elem.scrollHeight) + "px";
}