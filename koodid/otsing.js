var tahendused={};//sõnaraamat tahendused on üksühene vastavud veeru nimetuse ja tema positsiooni vahel
nimed=nimetused.split(',');
for(let i=0;i<nimed.length;i++){
    tahendused[nimed[i]]=i;
    tahendused[i]=nimed[i];
}

function Alusta(){
    
    document.getElementById("mininimesiarv").innerHTML=document.getElementById("mininimesislider").value;
    document.getElementById("maxinimesiarv").innerHTML=document.getElementById("maxinimesislider").value;
    //lisame mahutavuse slideritele juurde arvulise väärtuse, mida kasutaja näeb
    document.getElementById("mininimesislider").oninput=function(){
        document.getElementById("mininimesiarv").innerHTML=this.value;
    }
    document.getElementById("maxinimesislider").oninput=function(){
        document.getElementById("maxinimesiarv").innerHTML=this.value;
    }
}
function EemaldaTühikud(sõne){//eemaldame sõnest tühikud ja muudame kõik tähed väikeseks, sest htmlis ei või id olla mitmesõnaline;
    return sõne.toLowerCase().split(" ").join("");
}
function Kontrolli(veerud){//Vastavalt kasutaja sisendile kontrollime kas, vaadeldav rida on selline, mida peab lehel näitama
    
    let vald=EemaldaTühikud(veerud[tahendused["omavalitsus"]]);//leiame vaadeldava rea omavalitsuse id
    if(vald=="")return 1;
    if(document.getElementById(vald).checked==0){//kui kasutaja ei taha seda valda, siis seda ei väljastata
        return 0;
    }

    let tüüp=EemaldaTühikud(veerud[tahendused["asutuse_tüüp"]]);//leiame vaadeldava rea asutusetüübi id
    if(tüüp=="")return 1;
    if(document.getElementById(tüüp).checked==0){//kui kasutaja ei taha seda tüüpi asutust, siis seda ei väljastata
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