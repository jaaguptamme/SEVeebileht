//See kood käivitatakse kõigil vahelehtedel
//loome lehe algusesse nupud erinevatele vahelehtedele
let nuppudehtml="";
nuppudehtml+=`<input class="algusnupp" id="avalehele" type="button" onclick="location.href='Index.html'" value="Avalehele"/>`
nuppudehtml+=`<input class="algusnupp" id="otsingule" type="button" onclick="location.href='Otsing.html'" value="Otsingumootor"/>`
nuppudehtml+=`<input class="algusnupp" id="kontakt" type="button" onclick="location.href='Kontakt.html'" value="Kontakteeru meiega"/>`
document.getElementById("päis").innerHTML+=nuppudehtml;
