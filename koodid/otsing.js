var tahendused={};//sõnaraamat tahendused on üksühene vastavud veeru nimetuse ja tema positsiooni vahel
nimed=nimetused.split(',');
for(let i=0;i<nimed.length;i++){
    tahendused[nimed[i]]=i;
    tahendused[i]=nimed[i];
}

function LaeTabel(){//funktsioon, mis genereerib html-i, mida kasutajale näidatakse
    
    var read=andmed.split('\n');//jagab failis andmed.js antud string tüüpi muutuja ridadeks
    for(let i=0;i<read.length;i++){
        var vaartused=read[i].split("'");
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
        vaartused=v2;

        var uusRida="<tr>";
        for(let j=0;j<vaartused.length;j++){
            uusRida+="<td class='"+tahendused[j]+"'>";
            if(tahendused[j]=="koduleht" && vaartused[j].includes("http")){
                uusRida+="<a href='"+vaartused[j]+"'>";
                uusRida+=vaartused[j];
                uusRida+="</a>"
            }
            else if(tahendused[j]=="email" && vaartused[j].includes("@")){
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
        document.getElementById("p6hitabel").getElementsByTagName('tbody')[0].innerHTML+=uusRida;
    }
}