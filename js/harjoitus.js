function tulostaluvut(luku1,luku2) {
    var div = document.getElementById("results");
    div.innerHTML = "<h3>" + "Luvut ovat " + luku1 + " sekä " +luku2+ "<h3>";
}
function laskeluvut(){
    var div = document.getElementById("sum");
    luku1 = Number(document.getElementById("luku1").value);
    luku2 = Number(document.getElementById("luku2").value);

    let sum = luku1 + luku2;
    document.getElementById("luku1").innerHTML = luku1;
    document.getElementById("luku2").innerHTML = luku2;
    document.getElementById("sum").innerHTML = sum;

    div.innerHTML = "<h3>Lukujen summa on " +sum+ "</h3>";
}