let c=0,d=0,f=0;

let getTotal=localStorage.getItem("total");
let seatArr=localStorage.getItem("allseat");
let busName=localStorage.getItem("busname");

let getFrom=localStorage.getItem("getFrom");
let getTo=localStorage.getItem("getTo");


// console.log(seatArr);
localStorage.setItem("total","");
localStorage.setItem("allseat",[]);
localStorage.setItem("busname","");

// localStorage.setItem("getFrom","");
// localStorage.setItem("getTo","");


document.getElementById("seat_no").innerHTML=seatArr;
document.getElementById("bus_name").innerHTML=busName;
document.getElementById("destination").innerHTML=getFrom+" - "+getTo;











var finalPrice=Number(getTotal)+50+10;

document.getElementById("ticket_price").innerHTML=getTotal;
document.getElementById("total_price").innerHTML=finalPrice;


function insurance(e){
    console.log(e.target.attributes[2].nodeValue);

    if(e.target.attributes[2].nodeValue=="have" && f>0){
        d=0;
        c++;
        if(c==1)
        {
            document.getElementById("insurance").innerHTML=10;
            finalPrice=finalPrice+10;
        }
    }
    if(e.target.attributes[2].nodeValue=="no"){
        c=0;
        d++;
        if(d==1)
        {
            document.getElementById("insurance").innerHTML=0;
            finalPrice=finalPrice-10;
        }
    }

    //a=10;
    document.getElementById("total_price").innerHTML=finalPrice;
    // console.log(a);


    f++;
}

// if(performance.navigation.type == 2){
//     location.reload(true);
//  }
