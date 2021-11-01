/*
    Selles failis on kood, mis käivitatakse kõigis vahelehtedes.
*/
//loome lehe algusesse nupud erinevatele vahelehtedele
let nuppudehtml="";
nuppudehtml+=`<button class="algusnupp" id="avalehele" type="button" onclick="location.href='Index.html'" >Avalehele</button>`
nuppudehtml+=`<button class="algusnupp" id="otsingule" type="button" onclick="location.href='Otsing.html'">Otsingumootor</button>`
nuppudehtml+=`<button class="algusnupp" id="kontakt" type="button" onclick="location.href='Kontakt.html'">Kontakteeru meiega</button>`
document.getElementById("päis").innerHTML+=nuppudehtml;
