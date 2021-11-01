/*
    Selles failis on Otsingu vahelehe kood.
*/
function EemaldaTühikud(sõne){//eemaldame sõnest tühikud ja muudame kõik tähed väikeseks, sest htmlis ei või id olla mitmesõnaline;
    return sõne.toLowerCase().split(" ").join("");
}

function SõnestArv(sõne){//funktsioon, mis teeb etteantud sõnest arvu, 
    //lähte andmetes pole arvud eriti puhtal kujul
    if(sõne.length==0)return 0;
    let vastus=0;
    for(let i=0;i<sõne.length;i++){
        if("0123456789".includes(sõne[i])){
            vastus=10*vastus+parseInt(sõne[i]);
        }
        else{
            break;
        }
    }
    return vastus;
}

function MuudaMärkeruudud(klass){//muudame kõigi vaadeldava klassi märkeruutude olekut
    let objektid=document.getElementsByClassName(klass);//selle klassi kõik objektid
    let märkeruudud=[];//selle klassi kõik märkeruudud
    let mõnisees=0;
    for(let i=0;i<objektid.length;i++){
        if(objektid[i].tagName=="INPUT"){
            mõnisees+=objektid[i].checked;
            märkeruudud.push(objektid[i]);
        }
    }
    for(let i=0;i<märkeruudud.length;i++){
        märkeruudud[i].checked=!mõnisees;
    }
}
function Kontrolli(veerud){//Vastavalt kasutaja sisendile kontrollime kas, vaadeldav rida on selline, mida peab lehel näitama
    let sellenimi=EemaldaTühikud(veerud[tahendused["nimi"]]);//vaadeldava asutuse nimi
    let otsitavnimi=EemaldaTühikud(document.getElementById("nimeosa").value);//kasutaja poolt sisestatud nimeosa
    if(!sellenimi.includes(otsitavnimi)){
        return 0;
    }

    let saalimahutavus=SõnestArv(veerud[tahendused["mahutavus"]]);//vaadeldava saali mahutavus
    let min=document.getElementById("mininimesislider").value;//kasutaja poolt lubatud miinimum
    let max=document.getElementById("maxinimesislider").value;//kasutaja poolt lubatud maksimum
    let lubatundmata=document.getElementById("teadmatamahutavus").checked;//kas tabeli read, kus väärtust pole on lubatud
    if(saalimahutavus==0 && lubatundmata==0){
        return 0;
    }
    else if(saalimahutavus!=0 && (min>saalimahutavus || max<saalimahutavus)){
        return 0;
    }
    let vald=EemaldaTühikud(veerud[tahendused["omavalitsus"]]);//leiame vaadeldava rea omavalitsuse id
    if(vald=="")return 1;
    if(document.getElementById(vald).checked==0){//kui kasutaja ei taha seda valda, siis seda ei väljastata
        return 0;
    }

    let tüüp=EemaldaTühikud(veerud[tahendused["asutusetüüp"]]);//leiame vaadeldava rea asutusetüübi id
    if(tüüp=="")return 1;
    if(document.getElementById(tüüp).checked==0){//kui kasutaja ei taha seda tüüpi asutust, siis seda ei väljastata
        return 0;
    }
    let saalivajalikkus=document.getElementById("saaliolemasolu").checked;//kas kasutaja tahab saali
    let sellesaaliolemasolu=EemaldaTühikud(veerud[tahendused["saaliolemasolu"]]);//kas selles asutuses on saal
    if(saalivajalikkus==1&&sellesaaliolemasolu!="jah"){
        return 0;
    }

    let helitehnikavajalikkus=document.getElementById("helitehnilisedvõimalused").checked;//kas kasutaja tahab helitehilisi võimalusi
    let helitehnikaolemasolu=EemaldaTühikud(veerud[tahendused["helitehnilisedvõimalused"]]);//kas selles asutuses on helitehnilised võimalused
    if(helitehnikavajalikkus==1&&(helitehnikaolemasolu.includes("puudu") || helitehnikaolemasolu.length<5)){
        return 0;
    }

    let valgustehnikavajalikkus=document.getElementById("valgustehnilisedvõimalused").checked;//kas kasutaja tahab valgustehnilisi võimalusi
    let valgustehnikaaolemasolu=EemaldaTühikud(veerud[tahendused["valgustehnilisedvõimalused"]]);//kas selles asutuses on valgustehnilised võimalused
    if(valgustehnikavajalikkus==1&&(valgustehnikaaolemasolu.includes("puudu") || valgustehnikaaolemasolu.length<5)){
        return 0;
    }

    let esitlustehnikavajalikkus=document.getElementById("esitlustehnikavõimalused").checked;//kas kasutaja tahab esitlustehnilisi võimalusi
    let esitlustehnikaolemasolu=EemaldaTühikud(veerud[tahendused["esitlustehnikavõimalused"]]);//kas selles asutuses on esitlustehnika võimalused
    if(esitlustehnikavajalikkus==1&&(esitlustehnikaolemasolu.includes("puudu") || esitlustehnikaolemasolu.length<5)){
        return 0;
    }

    return 1;
}

function LaeTabel(){//funktsioon, mis genereerib html-i, mida kasutajale näidatakse
    var uusHtml="";//genereerime uue html-koodi
    var read=andmed.split('\n');//jagab failis andmed.js antud string tüüpi muutuja ridadeks
    for(let i=0;i<read.length;i++){
        var vaartused=read[i].split("'");//jaotame iga rea veergudeks, seda raskenavad erinevat tüüpi positaadressid
        var v2=[];
        for(let j=0;j<vaartused.length;j++){
            if(j%2==0){
                var veerud=vaartused[j].split(',');
                for(let k=(j==0?0:1);k<veerud.length-1;k++){
                    v2.push(veerud[k]);
                }
            }
            else{
                v2.push(vaartused[j]);
            }
        }
        vaartused=v2;//kõik veerud on nüüd eraldi elemendid järjendis
        if(vaartused.length<20){
            alert(vaartused);
        }
        if(Kontrolli(vaartused)==0){//Kontrollime, kas vaadeldav rida on selline, mida peab kasutajale näitama
            continue;
        }

        var uusRida="<tr>";//loome uue rea tabelisse
        for(let j=0;j<vaartused.length;j++){
            uusRida+="<td class='"+tahendused[j]+"'>";//iga elemendi klassiks saab tema kohal päises olev sõna
            if(tahendused[j]=="koduleht" && vaartused[j].length>5){//kodulehtedele on klikitavad lingid
                uusRida+="<a href='"+vaartused[j]+"'>";
                uusRida+=vaartused[j];
                uusRida+="</a>"
            }
            else if(tahendused[j]=="email" && vaartused[j].includes("@")){//emaili aadressitele loome samuti lingid
                uusRida+="<a href='mailto:"+vaartused[j]+"'>";
                uusRida+=vaartused[j];
                uusRida+="</a>"
            }
            else if(tahendused[j]=="postiaadress"){//asutuse aadressile lisame lingi, mis viib google mapsi
                uusRida+="<a href='https://maps.google.com/?q="+vaartused[j]+"'>";
                uusRida+=vaartused[j];
                uusRida+="</a>"
            }
            else{
                uusRida+=vaartused[j];
            }
            uusRida+="</td>";
        }
        uusRida+="</tr>";
        uusHtml+=uusRida;
    }
    /*uuendame lehe html-koodi*/
    document.getElementById("p6hitabel").getElementsByTagName('tbody')[0].innerHTML=uusHtml;
}