function LaeTabel(){
    //alert("SIIN");
    //alert(andmed.length);
    var read=andmed.split('\n');
    
    for(let i=0;i<10/*read.length*/;i++){
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
        //alert(v2);
       vaartused=v2;
        //vaartused=vaartused[0].split(',')+vaartused[1]+vaartused[2].split(',');
        var lisarida="<tr>";
        for(let j=0;j<vaartused.length;j++){
            lisarida+="<td>";
            lisarida+=vaartused[j];
            lisarida+="</td>";
        }
        lisarida+="</tr>";
        document.getElementById("p6hitabel").innerHTML+=lisarida;
        //alert(vaartused[0]);
    }
}