var fare;
var busClass;
var count=0;
var total=0;
var ind;
let c=1;
let seatArr=[];



fareManege=(e)=>{
    let busName=e.target.offsetParent.parentElement.firstElementChild.firstElementChild.innerHTML;
    localStorage.setItem("busname",busName);
    if(c==1){
        c++;
    }
    else {
        location.reload();
        c=1;
    }
    count=0;
    console.log(e);
    fare=e.target.previousElementSibling.childNodes[0].textContent;
    busClass=e.target.parentNode.parentNode.firstElementChild.childNodes[3].innerHTML;
    //fare="5";

    ind=Number(e.target.attributes[1].nodeValue);
    
    bookedHandle();
}
//console.log(fare);
function bookedHandle(e){
    
    var h4ForSeat;
    var h4ForClass;
    var h4ForFare;
    //console.log(e.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode);
    if(e.target.style.color=="red"){
        
        e.target.style.color="lightskyblue";
        //console.log(e.target.parentElement.title);
        //var amni=e.target.parentElement.title;
        var removeElement= document.getElementsByClassName(e.target.parentElement.title);
        
        // console.log(amni2[0]);
        // console.log(amni2[1]);
        // console.log(amni2[2]);

        removeElement[2].remove();
        removeElement[1].remove();
        removeElement[0].remove();

        count--;

        total=Number(fare)*count;
        //let opps=localStorage.setItem("total",total);
        document.getElementsByClassName("totalPrice")[ind].value=total;      
        // document.getElementsByClassName(e.target.parentElement.title)[2].remove();
        //console.log(e);
        //console.log(e);
        // console.log(e.target.parentElement.parentElement.parentElement.nextElementSibling.firstElementChild.firstElementChild.children[3]);
        //document.getElementsByClassName("removable").remove();
    }
    else {
        e.target.style.color="red";
        

        count++;

        console.log(ind);

        h4ForSeat=document.createElement("h4");
        h4ForSeat.setAttribute("class",e.target.parentElement.title);
        h4ForSeat.innerHTML=e.target.parentElement.title;
        document.getElementsByClassName("seatNumber")[ind].appendChild(h4ForSeat);
    //console.log(e.target.parentElement.title);

        h4ForClass=document.createElement("h4");
        h4ForClass.setAttribute("class",e.target.parentElement.title);
        h4ForClass.innerHTML=busClass;
        document.getElementsByClassName("seatClass")[ind].appendChild(h4ForClass);

        console.log(fare);
        console.log(busClass);


        h4ForFare=document.createElement("h4");
        h4ForFare.setAttribute("class",e.target.parentElement.title);
        h4ForFare.innerHTML=fare;
        document.getElementsByClassName("seatFare")[ind].appendChild(h4ForFare);


        total=Number(fare)*count;
        //let opps=localStorage.setItem("total",total);
        document.getElementsByClassName("totalPrice")[ind].value=total;

        seatArr=[...seatArr,e.target.parentElement.title];

    }
    console.log(seatArr[0]);
    
    localStorage.setItem("allseat",seatArr);
    localStorage.setItem("total",total);
    //console.log(total);
    //console.log(e.target.parentElement.title);
    // console.log(busClass);
    //document.getElementById("demo").style.color="red";
}

function passTotalFare(){
    //location.reload();
}

if(performance.navigation.type==2){
    location.reload(true);
}
//console.log(performance.navigation.type);

