function display() {
    let x = document.getElementById("crazyFact");
    if(x.style.display === "block") {
        x.style.display = "none";
    }
    else {
        x.style.display = "block";
    }
}