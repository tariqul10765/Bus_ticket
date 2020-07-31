let getFrom=localStorage.getItem("getFrom");
let getTo=localStorage.getItem("getTo");


let dha_chitta=[
    {
        bus:"GREEN LINE ",
        bus_class:"DECK AC",
        coach:"AG6",
        route:"Dhaka- Chittagong",
        start:"Dhaka",
        end:"Chittagong",
        fare:1600,
    },
    {
        bus:"RELAX TRANSPORT ",
        bus_class:"AC",
        coach:"R06",
        route:"Dhaka- Chittagong",
        start:"Dhaka",
        end:"Chittagong",
        fare:1500,
    },
    {
        bus:"SHYAMOLI NR TRAVELS ",
        bus_class:"non AC",
        coach:"S2",
        route:"Dhaka- Chittagong",
        start:"Dhaka",
        end:"Chittagong",
        fare:750,
    },
    {
        bus:"Hanif Enterprise ",
        bus_class:"Hino 1J , Non AC",
        coach:"H23",
        route:"Dhaka- Chittagong",
        start:"Dhaka",
        end:"Chittagong",
        fare:750,
    },
    {
        bus:"SAINTMARTIN TRAVELS ",
        bus_class:"non AC",
        coach:"ST01",
        route:"Dhaka- Chittagong",
        start:"Dhaka",
        end:"Chittagong",
        fare:1800,
    },
];

let dha_khag=[
    {
        bus:"Hanif Enterprise ",
        bus_class:"Hino 1J , Non AC",
        coach:"A6",
        route:"Dhaka- Khagrachari",
        start:"Dhaka",
        end:"Khagrachari",
        fare:520,
    },
    {
        bus:"S.ALAM SERVICE ",
        bus_class:" Non AC",
        coach:"34",
        route:"Dhaka- Khagrachari",
        start:"Dhaka",
        end:"Khagrachari",
        fare:520,
    },
    {
        bus:"SHYAMOLI PARIBAHAN ",
        bus_class:"Non AC",
        coach:"A2",
        route:"Dhaka- Khagrachari",
        start:"Dhaka",
        end:"Khagrachari",
        fare:520,
    },
    {
        bus:"ECHONO SERVICE ",
        bus_class:"Non AC",
        coach:"22",
        route:"Dhaka- Khagrachari",
        start:"Dhaka",
        end:"Khagrachari",
        fare:520,
    },
    {
        bus:"HANIF ENTERPRISE ",
        bus_class:"VOLVO, AC",
        coach:"B2",
        route:"Dhaka- Khagrachari",
        start:"Dhaka",
        end:"Khagrachari",
        fare:1000,
    },
];

let dha_cox=[
    {
        bus:"Hanif Enterprise ",
        bus_class:"Non AC",
        coach:"01",
        route:"Dhaka- Cox's Bazar",
        start:"Dhaka",
        end:"Cox's Bazar",
        fare:800,
    },
    {
        bus:"S Alam ",
        bus_class:"Non AC",
        coach:"41",
        route:"Dhaka- Cox's Bazar",
        start:"Dhaka",
        end:"Cox's Bazar",
        fare:800,
    },
    {
        bus:"Syamoli Paribahan ",
        bus_class:"Non AC",
        coach:"S1",
        route:"Dhaka- Cox's Bazar",
        start:"Dhaka",
        end:"Cox's Bazar",
        fare:800,
    },
    {
        bus:"GREEN LINE PARIBAHAN ",
        bus_class:"AC",
        coach:"G5",
        route:"Dhaka- Cox's Bazar",
        start:"Dhaka",
        end:"Cox's Bazar",
        fare:1800,
    },
    {
        bus:"ENA TRANSPORT ",
        bus_class:"HYUNDAI AC",
        coach:"E1",
        route:"Dhaka- Cox's Bazar",
        start:"Dhaka",
        end:"Cox's Bazar",
        fare:1500,
    },
];

let dha_ranga=[
    {
        bus:"Unique Service ",
        bus_class:"Non AC",
        coach:"A26",
        route:"Dhaka- Rangamati",
        start:"Dhaka",
        end:"Rangamati",
        fare:620,
    },
    {
        bus:"Unique Service ",
        bus_class:"Non AC",
        coach:"A26",
        route:"Dhaka- Rangamati",
        start:"Dhaka",
        end:"Rangamati",
        fare:620,
    },
    {
        bus:"Hanif Enterprise ",
        bus_class:"Non AC",
        coach:"12",
        route:"Dhaka- Rangamati",
        start:"Dhaka",
        end:"Rangamati",
        fare:620,
    },
    {
        bus:"S Alam ",
        bus_class:"Non AC",
        coach:"22",
        route:"Dhaka- Rangamati",
        start:"Dhaka",
        end:"Rangamati",
        fare:620,
    },
    {
        bus:"SaintMartin Paribahan ",
        bus_class:"AC",
        coach:"Aj26",
        route:"Dhaka- Rangamati",
        start:"Dhaka",
        end:"Rangamati",
        fare:900,
    },

];

let dha_bandar=[
    {
        bus:"Hanif Enterprise ",
        bus_class:"volvo AC",
        coach:"H4",
        route:"Dhaka- Bandarban",
        start:"Dhaka",
        end:"Bandarban",
        fare:1000,
    },
    {
        bus:"Shyamoli Paribahan ",
        bus_class:"volvo AC",
        coach:"S45",
        route:"Dhaka- Bandarban",
        start:"Dhaka",
        end:"Bandarban",
        fare:1200,
    },
    {
        bus:"Soudia paribahan ",
        bus_class:"non AC",
        coach:"SO5",
        route:"Dhaka- Bandarban",
        start:"Dhaka",
        end:"Bandarban",
        fare:550,
    },
    {
        bus:"S Alam ",
        bus_class:"non AC",
        coach:"A42",
        route:"Dhaka- Bandarban",
        start:"Dhaka",
        end:"Bandarban",
        fare:550,
    },
    {
        bus:"Hanif Enterprise ",
        bus_class:"non AC",
        coach:"44",
        route:"Dhaka- Bandarban",
        start:"Dhaka",
        end:"Bandarban",
        fare:550,
    },
    
];

let dha_kol=[
    {
        bus:"GREEN LINE PARIBAHAN ",
        bus_class:"AC",
        coach:"G4",
        route:"Dhaka- Kolkata",
        start:"Dhaka",
        end:"Kolkata",
        fare:1900,
    },
    {
        bus:"DESH TRAVELS ",
        bus_class:"AC",
        coach:"D42",
        route:"Dhaka- Kolkata",
        start:"Dhaka",
        end:"Kolkata",
        fare:1550,
    },
    {
        bus:"SHYAMOLI PARIBAHAN ",
        bus_class:"AC",
        coach:"S14",
        route:"Dhaka- Kolkata",
        start:"Dhaka",
        end:"Kolkata",
        fare:1900,
    },
    {
        bus:"ROYEL COACH ",
        bus_class:"non AC",
        coach:"RA4",
        route:"Dhaka- Kolkata",
        start:"Dhaka",
        end:"Kolkata",
        fare:900,
    },
    
];

let dha_raj=[
    {
        bus:"DESH TRAVELS ",
        bus_class:"HYUNDAI AC",
        coach:"DA4",
        route:"Dhaka- Rajshahi",
        start:"Dhaka",
        end:"Rajshahi",
        fare:1000,
    },
    {
        bus:"ENA TRANSPORT ",
        bus_class:"HYUNDAI AC",
        coach:"EE4",
        route:"Dhaka- Rajshahi",
        start:"Dhaka",
        end:"Rajshahi",
        fare:1000,
    },
    {
        bus:"NATIONAL TRAVELS ",
        bus_class:"non AC",
        coach:"N21",
        route:"Dhaka- Rajshahi",
        start:"Dhaka",
        end:"Rajshahi",
        fare:450,
    },
    {
        bus:"Hanif Enterprise ",
        bus_class:"non AC",
        coach:"1H4",
        route:"Dhaka- Rajshahi",
        start:"Dhaka",
        end:"Rajshahi",
        fare:450,
    },
    {
        bus:"Sakura paribahan ",
        bus_class:"non AC",
        coach:"S12",
        route:"Dhaka- Rajshahi",
        start:"Dhaka",
        end:"Rajshahi",
        fare:450,
    },
];


//  conditional
let route_All_Details=[];

if(getFrom==="Dhaka" && getTo==="Chittagong")route_All_Details=[...dha_chitta];
if(getFrom==="Dhaka" && getTo==="Khagrachari")route_All_Details=[...dha_khag];
if(getFrom==="Dhaka" && getTo==="Rangamati")route_All_Details=[...dha_ranga];
if(getFrom==="Dhaka" && getTo==="Cox's Bazar")route_All_Details=[...dha_cox];
if(getFrom==="Dhaka" && getTo==="Bandarban")route_All_Details=[...dha_bandar];
if(getFrom==="Dhaka" && getTo==="Kolkata")route_All_Details=[...dha_kol];
if(getFrom==="Dhaka" && getTo==="Rajshahi")route_All_Details=[...dha_raj];


// console.log(getFrom);
// console.log(getTo);
console.log(dha_ranga.length);

for(let i=0;i<route_All_Details.length;i++){
    document.getElementsByClassName("bus_name")[i].innerHTML=route_All_Details[i].bus;
    document.getElementsByClassName("bus_class")[i].innerHTML=route_All_Details[i].bus_class;
    document.getElementsByClassName("coach")[i].innerHTML=route_All_Details[i].coach;
    document.getElementsByClassName("route")[i].innerHTML=route_All_Details[i].route;
    document.getElementsByClassName("start")[i].innerHTML=route_All_Details[i].start;
    document.getElementsByClassName("end")[i].innerHTML=route_All_Details[i].end;
    document.getElementsByClassName("bus_fare")[i].innerHTML=route_All_Details[i].fare;
}


// document.getElementById("start").innerHTML=getFrom;
// document.getElementById("end").innerHTML=getTo;

// document.getElementsByClassName("bus_name")[0].innerHTML="Hanif";

// localStorage.setItem("getFrom","");
// localStorage.setItem("getTo","");