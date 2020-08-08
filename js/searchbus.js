let getFrom=localStorage.getItem("getFrom");
let getTo=localStorage.getItem("getTo");
let getDate=localStorage.getItem("getDate");




//console.log("hei "+getFrom);

// for checking perpuse

let pabna_raj=[
    {
        _id: '1',
        bus:"GREEN LINE ",
        bus_class:"DECK AC",
        coach:"AG6",
        route:"Dhaka- Chittagong",
        start:"Dhaka",
        end:"Chittagong",
        fare:1600,
        avTickit: 40,
        avSit: ['A', 'B', 'C', 'D', 'E'],
        bookedSit: []
    },
    {
        _id: '2',
        bus:"RELAX TRANSPORT ",
        bus_class:"AC",
        coach:"R06",
        route:"Dhaka- Chittagong",
        start:"Dhaka",
        end:"Chittagong",
        fare:1500,
        avTickit: 40,
        avSit: ['A', 'B', 'C', 'D', 'E'],
        bookedSit: ['B']
    },
];

// function getSingleData(id) {
//     return 
// }

// function updateTic() {

// }













// end check












let dha_chitta=[
    {
        bus:"GREEN LINE ",
        bus_class:"DECK AC",
        coach:"AG6",
        route:"Dhaka- Chittagong",
        start:"Dhaka",
        end:"Chittagong",
        fare:1600,
        sAvailable:32,
    },
    {
        bus:"RELAX TRANSPORT ",
        bus_class:"AC",
        coach:"R06",
        route:"Dhaka- Chittagong",
        start:"Dhaka",
        end:"Chittagong",
        fare:1500,
        sAvailable:32,
    },
    {
        bus:"SHYAMOLI NR TRAVELS ",
        bus_class:"non AC",
        coach:"S2",
        route:"Dhaka- Chittagong",
        start:"Dhaka",
        end:"Chittagong",
        fare:750,
        sAvailable:32,
    },
    {
        bus:"Hanif Enterprise ",
        bus_class:"Hino 1J , Non AC",
        coach:"H23",
        route:"Dhaka- Chittagong",
        start:"Dhaka",
        end:"Chittagong",
        fare:750,
        sAvailable:32,
    },
    {
        bus:"SAINTMARTIN TRAVELS ",
        bus_class:"non AC",
        coach:"ST01",
        route:"Dhaka- Chittagong",
        start:"Dhaka",
        end:"Chittagong",
        fare:1800,
        sAvailable:32,
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
        sAvailable:32,
    },
    {
        bus:"S.ALAM SERVICE ",
        bus_class:" Non AC",
        coach:"34",
        route:"Dhaka- Khagrachari",
        start:"Dhaka",
        end:"Khagrachari",
        fare:520,
        sAvailable:32,
    },
    {
        bus:"SHYAMOLI PARIBAHAN ",
        bus_class:"Non AC",
        coach:"A2",
        route:"Dhaka- Khagrachari",
        start:"Dhaka",
        end:"Khagrachari",
        fare:520,
        sAvailable:32,
    },
    {
        bus:"ECHONO SERVICE ",
        bus_class:"Non AC",
        coach:"22",
        route:"Dhaka- Khagrachari",
        start:"Dhaka",
        end:"Khagrachari",
        fare:520,
        sAvailable:32,
    },
    {
        bus:"HANIF ENTERPRISE ",
        bus_class:"VOLVO, AC",
        coach:"B2",
        route:"Dhaka- Khagrachari",
        start:"Dhaka",
        end:"Khagrachari",
        fare:1000,
        sAvailable:32,
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
        sAvailable:32,
    },
    {
        bus:"S Alam ",
        bus_class:"Non AC",
        coach:"41",
        route:"Dhaka- Cox's Bazar",
        start:"Dhaka",
        end:"Cox's Bazar",
        fare:800,
        sAvailable:32,
    },
    {
        bus:"Syamoli Paribahan ",
        bus_class:"Non AC",
        coach:"S1",
        route:"Dhaka- Cox's Bazar",
        start:"Dhaka",
        end:"Cox's Bazar",
        fare:800,
        sAvailable:32,
    },
    {
        bus:"GREEN LINE PARIBAHAN ",
        bus_class:"AC",
        coach:"G5",
        route:"Dhaka- Cox's Bazar",
        start:"Dhaka",
        end:"Cox's Bazar",
        fare:1800,
        sAvailable:32,
    },
    {
        bus:"ENA TRANSPORT ",
        bus_class:"HYUNDAI AC",
        coach:"E1",
        route:"Dhaka- Cox's Bazar",
        start:"Dhaka",
        end:"Cox's Bazar",
        fare:1500,
        sAvailable:32,
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
        sAvailable:32,
    },
    {
        bus:"Unique Service ",
        bus_class:"Non AC",
        coach:"A26",
        route:"Dhaka- Rangamati",
        start:"Dhaka",
        end:"Rangamati",
        fare:620,
        sAvailable:32,
    },
    {
        bus:"Hanif Enterprise ",
        bus_class:"Non AC",
        coach:"12",
        route:"Dhaka- Rangamati",
        start:"Dhaka",
        end:"Rangamati",
        fare:620,
        sAvailable:32,
    },
    {
        bus:"S Alam ",
        bus_class:"Non AC",
        coach:"22",
        route:"Dhaka- Rangamati",
        start:"Dhaka",
        end:"Rangamati",
        fare:620,
        sAvailable:32,
    },
    {
        bus:"SaintMartin Paribahan ",
        bus_class:"AC",
        coach:"Aj26",
        route:"Dhaka- Rangamati",
        start:"Dhaka",
        end:"Rangamati",
        fare:900,
        sAvailable:32,
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
        sAvailable:32,
    },
    {
        bus:"Shyamoli Paribahan ",
        bus_class:"volvo AC",
        coach:"S45",
        route:"Dhaka- Bandarban",
        start:"Dhaka",
        end:"Bandarban",
        fare:1200,
        sAvailable:32,
    },
    {
        bus:"Soudia paribahan ",
        bus_class:"non AC",
        coach:"SO5",
        route:"Dhaka- Bandarban",
        start:"Dhaka",
        end:"Bandarban",
        fare:550,
        sAvailable:32,
    },
    {
        bus:"S Alam ",
        bus_class:"non AC",
        coach:"A42",
        route:"Dhaka- Bandarban",
        start:"Dhaka",
        end:"Bandarban",
        fare:550,
        sAvailable:32,
    },
    {
        bus:"Hanif Enterprise ",
        bus_class:"non AC",
        coach:"44",
        route:"Dhaka- Bandarban",
        start:"Dhaka",
        end:"Bandarban",
        fare:550,
        sAvailable:32,
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
        sAvailable:32,
    },
    {
        bus:"DESH TRAVELS ",
        bus_class:"AC",
        coach:"D42",
        route:"Dhaka- Kolkata",
        start:"Dhaka",
        end:"Kolkata",
        fare:1550,
        sAvailable:32,
    },
    {
        bus:"SHYAMOLI PARIBAHAN ",
        bus_class:"AC",
        coach:"S14",
        route:"Dhaka- Kolkata",
        start:"Dhaka",
        end:"Kolkata",
        fare:1900,
        sAvailable:32,
    },
    {
        bus:"ROYEL COACH ",
        bus_class:"non AC",
        coach:"RA4",
        route:"Dhaka- Kolkata",
        start:"Dhaka",
        end:"Kolkata",
        fare:900,
        sAvailable:32,
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
        sAvailable:32,
    },
    {
        bus:"ENA TRANSPORT ",
        bus_class:"HYUNDAI AC",
        coach:"EE4",
        route:"Dhaka- Rajshahi",
        start:"Dhaka",
        end:"Rajshahi",
        fare:1000,
        sAvailable:32,
    },
    {
        bus:"NATIONAL TRAVELS ",
        bus_class:"non AC",
        coach:"N21",
        route:"Dhaka- Rajshahi",
        start:"Dhaka",
        end:"Rajshahi",
        fare:450,
        sAvailable:32,
    },
    {
        bus:"Hanif Enterprise ",
        bus_class:"non AC",
        coach:"1H4",
        route:"Dhaka- Rajshahi",
        start:"Dhaka",
        end:"Rajshahi",
        fare:450,
        sAvailable:32,
    },
    {
        bus:"Sakura paribahan ",
        bus_class:"non AC",
        coach:"S12",
        route:"Dhaka- Rajshahi",
        start:"Dhaka",
        end:"Rajshahi",
        fare:450,
        sAvailable:32,
    },
];

// for asfaqur's row

let dha_bari=[
    {
        bus:"Sakura paribahan ",
        bus_class:"non AC",
        coach:"S12",
        route:"Dhaka- Barisal",
        start:"Dhaka",
        end:"Barisal",
        fare:820,
        sAvailable:32,
    },
    {
        bus:"Sonartori  Paribahan ",
        bus_class:"non AC",
        coach:"SP2",
        route:"Dhaka- Barisal",
        start:"Dhaka",
        end:"Barisal",
        fare:820,
        sAvailable:32,
    },
    {
        bus:"Hemi Enterprise ",
        bus_class:"non AC",
        coach:"H12",
        route:"Dhaka- Barisal",
        start:"Dhaka",
        end:"Barisal",
        fare:820,
        sAvailable:32,
    },
    {
        bus:"Sakura Paribahan ",
        bus_class:"AC",
        coach:"SA",
        route:"Dhaka- Barisal",
        start:"Dhaka",
        end:"Barisal",
        fare:1300,
        sAvailable:32,
    },
    {
        bus:"Sonartori  Paribahan ",
        bus_class:"AC",
        coach:"S23",
        route:"Dhaka- Barisal",
        start:"Dhaka",
        end:"Barisal",
        fare:1300,
        sAvailable:32,
    },
];

let dha_kua=[
    {
        bus:"Sakura Paribahan ",
        bus_class:"non AC",
        coach:"SA23",
        route:"Dhaka- Kuakata",
        start:"Dhaka",
        end:"Kuakata",
        fare:1190,
        sAvailable:32,
    },
    {
        bus:"Hemi Enterprise ",
        bus_class:"non AC",
        coach:"HE2",
        route:"Dhaka- Kuakata",
        start:"Dhaka",
        end:"Kuakata",
        fare:890,
        sAvailable:32,
    },
    {
        bus:"Sakura Paribahan ",
        bus_class:"AC",
        coach:"SA3",
        route:"Dhaka- Kuakata",
        start:"Dhaka",
        end:"Kuakata",
        fare:1700,
        sAvailable:32,
    },
];

let dha_khul=[
    {
        bus:"Emad Poribhan ",
        bus_class:"non AC",
        coach:"EA3",
        route:"Dhaka- Khulna",
        start:"Dhaka",
        end:"Kuakata",
        fare:800,
        sAvailable:32,
    },
    {
        bus:"Tungipara express ",
        bus_class:"non AC",
        coach:"T5",
        route:"Dhaka- Khulna",
        start:"Dhaka",
        end:"Khulna",
        fare:800,
        sAvailable:32,
    },
    {
        bus:"Shohagh ",
        bus_class:"AC",
        coach:"SO5",
        route:"Dhaka- Khulna",
        start:"Dhaka",
        end:"Khulna",
        fare:1800,
        sAvailable:32,
    },
    {
        bus:"Saintmartin Hyundai ",
        bus_class:"AC",
        coach:"SH15",
        route:"Dhaka- Khulna",
        start:"Dhaka",
        end:"Khulna",
        fare:1800,
        sAvailable:32,
    },
    {
        bus:"Emad Poribhan ",
        bus_class:"AC",
        coach:"EM2",
        route:"Dhaka- Khulna",
        start:"Dhaka",
        end:"Khulna",
        fare:1000,
        sAvailable:32,
    },
    
];

let dha_cou=[
    {
        bus:"Tisha Exclusive ",
        bus_class:"AC",
        coach:"T32",
        route:"Dhaka- Cumilla",
        start:"Dhaka",
        end:"Cumilla",
        fare:200,
        sAvailable:32,
    },
    {
        bus:"Asia Line ",
        bus_class:"AC",
        coach:"AL12",
        route:"Dhaka- Cumilla",
        start:"Dhaka",
        end:"Cumilla",
        fare:200,
        sAvailable:32,
    },
    {
        bus:"Asia Transport ",
        bus_class:"Non AC",
        coach:"AT33",
        route:"Dhaka- Cumilla",
        start:"Dhaka",
        end:"Cumilla",
        fare:180,
        sAvailable:32,
    },
    {
        bus:"Tisha Plus ",
        bus_class:"Non AC",
        coach:"TP23",
        route:"Dhaka- Cumilla",
        start:"Dhaka",
        end:"Cumilla",
        fare:150,
        sAvailable:32,
    },
    {
        bus:"Royal Coach ",
        bus_class:"AC",
        coach:"RC02",
        route:"Dhaka- Cumilla",
        start:"Dhaka",
        end:"Cumilla",
        fare:300,
        sAvailable:32,
    },
];

let dha_sylh=[
    {
        bus:"Hanif Enterpise ",
        bus_class:"Non AC",
        coach:"HE02",
        route:"Dhaka- Sylhet",
        start:"Dhaka",
        end:"Sylhet",
        fare:750,
        sAvailable:32,
    },
    {
        bus:"Ena ",
        bus_class:"Non AC",
        coach:"E001",
        route:"Dhaka- Sylhet",
        start:"Dhaka",
        end:"Sylhet",
        fare:750,
        sAvailable:32,
    },
    {
        bus:"Shyamoli Nr Travels ",
        bus_class:"Non AC",
        coach:"SNT7",
        route:"Dhaka- Sylhet",
        start:"Dhaka",
        end:"Sylhet",
        fare:750,
        sAvailable:32,
    },
    {
        bus:"London Express ",
        bus_class:"AC",
        coach:"LE10",
        route:"Dhaka- Sylhet",
        start:"Dhaka",
        end:"Sylhet",
        fare:1450,
        sAvailable:32,
    },
    {
        bus:"Green Line ",
        bus_class:"AC",
        coach:"GL14",
        route:"Dhaka- Sylhet",
        start:"Dhaka",
        end:"Sylhet",
        fare:1600,
        sAvailable:32,
    },
];

let dha_pab=[
    {
        bus:"Alhamra Paribhan ",
        bus_class:"Non AC",
        coach:"AP6",
        route:"Dhaka- Pabna",
        start:"Dhaka",
        end:"Pabna",
        fare:340,
        sAvailable:32,
    },
    {
        bus:"Sarkar Travels ",
        bus_class:"Non AC",
        coach:"ST11",
        route:"Dhaka- Pabna",
        start:"Dhaka",
        end:"Pabna",
        fare:340,
        sAvailable:32,
    },
    {
        bus:"Pabna Express ",
        bus_class:"Non AC",
        coach:"PE12",
        route:"Dhaka- Pabna",
        start:"Dhaka",
        end:"Pabna",
        fare:340,
        sAvailable:32,
    },
    {
        bus:"Shyamoli Paribhan ",
        bus_class:"Non AC",
        coach:"SP06",
        route:"Dhaka- Pabna",
        start:"Dhaka",
        end:"Pabna",
        fare:400,
        sAvailable:32,
    },
];

//   for shimanto's row


let dha_mou=[
    {
        bus:"Hanif Enterprise ",
        bus_class:"non AC",
        coach:"A54",
        route:"Dhaka- Moulvibazar",
        start:"Dhaka",
        end:"Moulvibazar",
        fare:380,
        sAvailable:32,
    },
    {
        bus:"Shyamoli paribahan ",
        bus_class:"non AC",
        coach:"S4",
        route:"Dhaka- Moulvibazar",
        start:"Dhaka",
        end:"Moulvibazar",
        fare:380,
        sAvailable:32,
    },
    {
        bus:"Ruposhi bangla ",
        bus_class:"non AC",
        coach:"R5",
        route:"Dhaka- Moulvibazar",
        start:"Dhaka",
        end:"Moulvibazar",
        fare:350,
        sAvailable:32,
    },
    {
        bus:"TR Travels ",
        bus_class:"AC",
        coach:"T14",
        route:"Dhaka- Moulvibazar",
        start:"Dhaka",
        end:"Moulvibazar",
        fare:450,
        sAvailable:32,
    },
];

let dha_sunam=[
    {
        bus:"AL MOBARAK PARIBAHAN ",
        bus_class:"non AC",
        coach:"A14",
        route:"Dhaka- Sunamganj",
        start:"Dhaka",
        end:"Sunamganj",
        fare:400,
        sAvailable:32,
    },
    {
        bus:"MAMUN ENTERPRISE ",
        bus_class:"non AC",
        coach:"M4",
        route:"Dhaka- Sunamganj",
        start:"Dhaka",
        end:"Sunamganj",
        fare:500,
        sAvailable:32,
    },
    {
        bus:"NAZIM PARIBAHAN ",
        bus_class:"non AC",
        coach:"N1",
        route:"Dhaka- Sunamganj",
        start:"Dhaka",
        end:"Sunamganj",
        fare:400,
        sAvailable:32,
    },
];

let dha_dinaj=[
    {
        bus:"Hanif Enterprise ",
        bus_class:"non AC",
        coach:"H1",
        route:"Dhaka- DINAJPUR",
        start:"Dhaka",
        end:"DINAJPUR",
        fare:600,
        sAvailable:32,
    },
    {
        bus:"Shyamoli Paribahan ",
        bus_class:"non AC",
        coach:"S1",
        route:"Dhaka- DINAJPUR",
        start:"Dhaka",
        end:"DINAJPUR",
        fare:600,
        sAvailable:32,
    },
    {
        bus:"Nabil Paribahan ",
        bus_class:"non AC",
        coach:"N1",
        route:"Dhaka- DINAJPUR",
        start:"Dhaka",
        end:"DINAJPUR",
        fare:600,
        sAvailable:32,
    },
];

let dha_rang=[
    {
        bus:"Hanif Enterprise ",
        bus_class:"non AC",
        coach:"H11",
        route:"Dhaka- Rangpur",
        start:"Dhaka",
        end:"Rangpur",
        fare:500,
        sAvailable:32,
    },
    {
        bus:"Shyamoli Paribahan ",
        bus_class:"non AC",
        coach:"S11",
        route:"Dhaka- Rangpur",
        start:"Dhaka",
        end:"Rangpur",
        fare:500,
        sAvailable:32,
    },
    {
        bus:"Nabil Paribahan ",
        bus_class:"non AC",
        coach:"N11",
        route:"Dhaka- Rangpur",
        start:"Dhaka",
        end:"Rangpur",
        fare:500,
        sAvailable:32,
    },
    {
        bus:"S.R Travels ",
        bus_class:"non AC",
        coach:"S1",
        route:"Dhaka- Rangpur",
        start:"Dhaka",
        end:"Rangpur",
        fare:500,
        sAvailable:32,
    },
    {
        bus:"Hanif Enterprise ",
        bus_class:"AC",
        coach:"H3",
        route:"Dhaka- Rangpur",
        start:"Dhaka",
        end:"Rangpur",
        fare:1000,
        sAvailable:32,
    },
];

let dha_bog=[
    {
        bus:"Hanif Enterprise ",
        bus_class:"non AC",
        coach:"H23",
        route:"Dhaka- Bogra",
        start:"Dhaka",
        end:"Bogra",
        fare:350,
        sAvailable:32,
    },
    {
        bus:"Shyamoli Paribahan ",
        bus_class:"non AC",
        coach:"S21",
        route:"Dhaka- Bogra",
        start:"Dhaka",
        end:"Bogra",
        fare:350,
        sAvailable:32,
    },
    {
        bus:"S.R Travels ",
        bus_class:"non AC",
        coach:"SR2",
        route:"Dhaka- Bogra",
        start:"Dhaka",
        end:"Bogra",
        fare:350,
        sAvailable:32,
    },
];

let dha_siraj=[
    {
        bus:"SI ENTERPRISE ",
        bus_class:"non AC",
        coach:"SI12",
        route:"Dhaka- SIRAJGANJ",
        start:"Dhaka",
        end:"SIRAJGANJ",
        fare:280,
        sAvailable:32,
    },
    {
        bus:"OVI ENTERPRISE ",
        bus_class:"non AC",
        coach:"O2",
        route:"Dhaka- SIRAJGANJ",
        start:"Dhaka",
        end:"SIRAJGANJ",
        fare:280,
        sAvailable:32,
    },
    {
        bus:"SR TRAVELS ",
        bus_class:"non AC",
        coach:"SR22",
        route:"Dhaka- SIRAJGANJ",
        start:"Dhaka",
        end:"SIRAJGANJ",
        fare:380,
        sAvailable:32,
    },
];

let dha_patua=[
    {
        bus:"Hanif Enterprise ",
        bus_class:"non AC",
        coach:"H22",
        route:"Dhaka- PATUAKHALI",
        start:"Dhaka",
        end:"PATUAKHALI",
        fare:500,
        sAvailable:32,
    },
    {
        bus:"Sonartori Paribahan ",
        bus_class:"non AC",
        coach:"S12",
        route:"Dhaka- PATUAKHALI",
        start:"Dhaka",
        end:"PATUAKHALI",
        fare:500,
        sAvailable:32,
    },
    {
        bus:"Surovi Paribahan ",
        bus_class:"non AC",
        coach:"SUV",
        route:"Dhaka- PATUAKHALI",
        start:"Dhaka",
        end:"PATUAKHALI",
        fare:500,
        sAvailable:32,
    },
];

let chi_shyl=[
    {
        bus:"Star line ",
        bus_class:"non AC",
        coach:"SUV",
        route:"Chittigong - Shylet",
        start:"Chittigong",
        end:"Shylet",
        fare:600,
        sAvailable:32,
    },
    {
        bus:"Star line ",
        bus_class:"AC",
        coach:"SUV",
        route:"Chittigong - Shylet",
        start:"Chittigong",
        end:"Shylet",
        fare:1200,
        sAvailable:32,
    },
    {
        bus:"Ena ",
        bus_class:"AC",
        coach:"SUV",
        route:"Chittigong - Shylet",
        start:"Chittigong",
        end:"Shylet",
        fare:1250,
        sAvailable:32,
    },
];


//  conditional
let route_All_Details=[];

if(getFrom==="Dhaka" && getTo==="Chittagong")route_All_Details=[...dha_chitta ];
if(getFrom==="Dhaka" && getTo==="Khagrachari")route_All_Details=[...dha_khag];
if(getFrom==="Dhaka" && getTo==="Rangamati")route_All_Details=[...dha_ranga];
if(getFrom==="Dhaka" && getTo==="Cox's Bazar")route_All_Details=[...dha_cox];
if(getFrom==="Dhaka" && getTo==="Bandarban")route_All_Details=[...dha_bandar];
if(getFrom==="Dhaka" && getTo==="Kolkata")route_All_Details=[...dha_kol];
if(getFrom==="Dhaka" && getTo==="Rajshahi")route_All_Details=[...dha_raj];


if(getFrom==="Dhaka" && getTo==="Barisal")route_All_Details=[...dha_bari];
if(getFrom==="Dhaka" && getTo==="Kuakata")route_All_Details=[...dha_kua];
if(getFrom==="Dhaka" && getTo==="Khulna")route_All_Details=[...dha_khul];
if(getFrom==="Dhaka" && getTo==="Cumilla")route_All_Details=[...dha_cou];
if(getFrom==="Dhaka" && getTo==="Sylhet")route_All_Details=[...dha_sylh];
if(getFrom==="Dhaka" && getTo==="Pabna")route_All_Details=[...dha_pab];



if(getFrom==="Dhaka" && getTo==="Moulvibazar")route_All_Details=[...dha_mou];
if(getFrom==="Dhaka" && getTo==="Sunamganj")route_All_Details=[...dha_sunam];
if(getFrom==="Dhaka" && getTo==="Dinajpur")route_All_Details=[...dha_dinaj];
if(getFrom==="Dhaka" && getTo==="Rangpur")route_All_Details=[...dha_rang];
if(getFrom==="Dhaka" && getTo==="Bogra")route_All_Details=[...dha_bog];
if(getFrom==="Dhaka" && getTo==="Sirajganj")route_All_Details=[...dha_siraj];
if(getFrom==="Dhaka" && getTo==="Patuakhali")route_All_Details=[...dha_patua];


if(getFrom==="Pabna" && getTo==="Rajshahi")route_All_Details=[...pabna_raj];
if(getFrom==="Chittagong" && getTo==="Sylhet")route_All_Details=[...chi_shyl];

let tDate=new Date();
let selDate=new Date(getDate);

if(route_All_Details.length>0 && tDate<selDate){
    
    document.getElementById("serch_bus").style.display="block";
    //document.getElementById("emptyDiv").innerHTML="Buses is not available";
    //console.log("empty");
}
if(route_All_Details.length==0 || tDate>=selDate){
    document.getElementById("emptyDiv").style.display="flex";
}
// for display showing
let showBus=document.getElementsByClassName("bus-available");

for(let i=0;i<route_All_Details.length;i++){
    showBus[i].style.display="block";
}
// console.log(getFrom);
// console.log(getTo);
//console.log(dha_ranga.length);

for(let i=0;i<route_All_Details.length;i++){
    document.getElementsByClassName("bus_name")[i].innerHTML=route_All_Details[i].bus;
    document.getElementsByClassName("bus_class")[i].innerHTML=route_All_Details[i].bus_class;
    document.getElementsByClassName("coach")[i].innerHTML=route_All_Details[i].coach;
    document.getElementsByClassName("route")[i].innerHTML=route_All_Details[i].route;
    document.getElementsByClassName("start")[i].innerHTML=route_All_Details[i].start;
    document.getElementsByClassName("end")[i].innerHTML=route_All_Details[i].end;
    document.getElementsByClassName("bus_fare")[i].innerHTML=route_All_Details[i].fare;
    document.getElementsByClassName("savailable")[i].innerHTML=route_All_Details[i].sAvailable;


    console.log(document.getElementsByClassName("bus_name")[i].innerHTML=route_All_Details[i].bus);
}


// document.getElementById("start").innerHTML=getFrom;
// document.getElementById("end").innerHTML=getTo;

// document.getElementsByClassName("bus_name")[0].innerHTML="Hanif";

// localStorage.setItem("getFrom","");
// localStorage.setItem("getTo","");