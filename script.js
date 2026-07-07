function play() {
    var buttons = document.querySelectorAll("#btn button");
    for (let i=0;i<buttons.length;i++) {
        buttons[i].style.display = "none";
    }
}
