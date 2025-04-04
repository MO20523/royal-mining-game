let balance = 0;

function mine() {
    balance += 1;
    document.getElementById("balance").innerText = "رصيدك: " + balance + " $RAP";
}
