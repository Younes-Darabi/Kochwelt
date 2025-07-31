function Calculator() {
    let sum = document.getElementById("text-box").value;
    document.getElementById('td1').innerHTML = sum * 60 + "g Mascarpone";
    if (sum>1){
        document.getElementById('td2').innerHTML = sum + " frische Eier";
    }else{
        document.getElementById('td2').innerHTML = sum + " frische Ei";
    }
    document.getElementById('td3').innerHTML = sum * 25 + "g Zucker";
    document.getElementById('td4').innerHTML = sum * 50 + "g Löffelbiskuits (Savoiardi)";
    document.getElementById('td5').innerHTML = sum + 50 + " ml starker Espresso (abgekühlt)";
    document.getElementById('td6').innerHTML = sum  + " EL Amaretto oder Marsala (optional)";
    document.getElementById('td7').innerHTML = sum * 1/2 + " Päckchen Vanillezucker";
}

function menu() {
    document.getElementById('res_menu').classList.toggle('hidden');
}