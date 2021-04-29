let n1, n2;
function input() {  // Input is just name but can be called anything. //
    n1 = Number.parseFloat(document.getElementById("op1").value);
    n2 = Number.parseFloat(document.getElementById("op1").value);
}

 function add() {
    input(); 
    document.getElementById("res").value = n1 + n2; 
}

function sub() {
    input(); 
    document.getElementById("res").value = n1 - n2; 
}

function mul() {
    input(); 
    document.getElementById("res").value = n1 * n2; 
}

// parseInt >>>>>>> Converts the text into numbers //