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
}
function TäiendanVeel(){//kasutaja täiendab veel sisestatavaid andmeid.
    document.getElementById("pealesisestamist").style.display="none";
}
function SaadaLõplikult(){//kasutaja saadab andmed lõplikult ära;
    document.getElementById("pealesisestamist").style.display="none";
    window.open("mailto:test@example.com?subject=&body=");

    /*tühjenda andmeväljad*/
    let väljad=["nimi","telefon","email","kirjeldus"];
    for(let i=0;i<väljad.length;i++){
        document.getElementById(väljad[i]).value="";
    }
}