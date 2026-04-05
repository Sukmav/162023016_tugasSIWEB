function shout() {
    alert("Hai, Selamat datang di sistem sederhana");
}

function showMenu() {
    alert("Input jumlah pesanan agar di hitung otomatis oleh sistem");

    document.getElementById("homeSection").classList.add("hidden");
    document.getElementById("calcSection").classList.add("hidden");
    document.getElementById("menuSection").classList.remove("hidden");
}

function showCalculator() {
    document.getElementById("homeSection").classList.add("hidden");
    document.getElementById("menuSection").classList.add("hidden");
    document.getElementById("calcSection").classList.remove("hidden");
}

function home() {
    document.getElementById("homeSection").classList.remove("hidden");
    document.getElementById("menuSection").classList.add("hidden");
    document.getElementById("calcSection").classList.add("hidden");
}

function hitungTotal() {
    let bakso = parseInt(document.getElementById("bakso").value) || 0;
    let soto = parseInt(document.getElementById("soto").value) || 0;
    let mie = parseInt(document.getElementById("mie").value) || 0;

    let total = (bakso * 12000) + (soto * 10000) + (mie * 15000);

    let diskon = 0;
    if (total > 50000) {
        diskon = total * 0.10;
    }

    let bayar = total - diskon;

    document.getElementById("total").value = total;
    document.getElementById("diskon").value = diskon;
    document.getElementById("bayar").value = bayar;
}

function resetMenu() {
    document.getElementById("bakso").value = 0;
    document.getElementById("soto").value = 0;
    document.getElementById("mie").value = 0;

    document.getElementById("total").value = 0;
    document.getElementById("diskon").value = 0;
    document.getElementById("bayar").value = 0;
}

function hitungCalc() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let op = document.getElementById("operator").value;

    if (num1 === "" || num2 === "") {
        alert("Input tidak boleh kosong!");
        return;
    }

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    let hasil;

    switch(op) {
        case '+': hasil = num1 + num2; break;
        case '-': hasil = num1 - num2; break;
        case '*': hasil = num1 * num2; break;
        case '/': hasil = num1 / num2; break;
        case '%': hasil = num1 % num2; break;
        case '^': hasil = Math.pow(num1, num2); break;
    }

    document.getElementById("hasil").value = hasil;
}

function resetCalc() {
    document.getElementById("num1").value = 0;
    document.getElementById("num2").value = 0;
    document.getElementById("hasil").value = 0;
    document.getElementById("operator").value = "+";
}