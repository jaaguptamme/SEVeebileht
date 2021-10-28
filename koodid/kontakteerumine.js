function SaadaKontrolli(){//kutsutakse välja kui kasutaja üritab andmeid edastada
    /*if(document.getElementById("nimi").value.length<5){//kasutaja pole nime sisetanud
        alert("Sisesta palun oma nimi");
        return;
    }
    if(document.getElementById("telefon").value.length<5&&
    (document.getElementById("email").value.length<5 || document.getElementById("email").value.includes("@")==0)){
        //kasutaja peab sisestama telefoni või oma e-postiaadressi
        alert("Siseta palun oma telefoninumber või e-posti aadress");
        return;
    }
    if(document.getElementById("kirjeldus").value.length<20){//kasutaja ei kirjutanud koha kohta peaaegu midagi
        alert("Siesta palun koha kirjeldus");
        return;
    }*/

    document.getElementById("pealesisestamist").style.display="block";
    document.getElementById("saatmisnupp").style.display="none";
}
function TäiendanVeel(){//kasutaja täiendab veel sisestatavaid andmeid.
    document.getElementById("pealesisestamist").style.display="none";
    document.getElementById("saatmisnupp").style.display="block";
}
function SaadaLõplikult(){//kasutaja saadab andmed lõplikult ära;

    document.getElementById("pealesisestamist").style.display="none";

    /*ekirja koostamine, need imelikud sümbolid on reavahetuse tähistamiseks*/
    let sõnum="Hei, olen "+document.getElementById("nimi").value +" ja haldan ühte lahedat kohta. Soovin, et see oleks leitav sinu veebilehel. %0d%0a";
    sõnum+="Koha lühikirjeldus: "+document.getElementById("kirjeldus").value +"%0d%0a";
    sõnum+="Minu kontakt andmed: %0d%0a";
    sõnum+="Telefoninumber: "+document.getElementById("telefon").value+"%0d%0a";
    sõnum+="E-posti aadress: "+document.getElementById("email").value+"%0d%0a";
    sõnum+="%0d%0a Heade soovidega, %0d%0a "+document.getElementById("nimi").value;

    /*ekirja saatmine*/
    window.open("mailto:test@example.com?subject=Haldan ägedat kohta ja soovin selle sinu veebilehe üles panna!&body="+sõnum);

    let väljad=["nimi","telefon","email","kirjeldus"];//andmeväljad
    /*tühjenda andmeväljad*/
    for(let i=0;i<väljad.length;i++){
        document.getElementById(väljad[i]).value="";
    }
    /*Avame kasutajale tänusõnad*/
    document.getElementById("tänusõnad").style.display="block";
}