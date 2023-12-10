function display() {
    let x = document.getElementById("crazyFact");
    if(x.style.display === "none") {
        x.style.display = "block";
    }
    else {
        x.style.display = "none";
    }
}