//let route=document.getElementsByClassName("way");
//let routeArray=Array.prototype.slice.call(route);
let from=document.getElementById("From");
let to=document.getElementById("To");
//let amni=document.getElementById("header");
let demo=document.getElementById("demo");


from.value=localStorage.getItem("from");
to.value=localStorage.getItem("to");

console.log(from.value);

localStorage.setItem("from","");
localStorage.setItem("to","");

routeHandle=(e)=>{
    //console.log(e);
    var content=e.target.textContent;
    if(content==="  DHAKA - CHITTAGONG"){
        from.value="Dhaka";
        to.value="Chittagong"
    }
    if(content==="  DHAKA - COX'S BAZAR"){
        from.value="Dhaka";
        to.value="Cox's Bazar"
    }
    if(content==="  DHAKA - KHAGRACHHARI"){
        from.value="Dhaka";
        to.value="Khagrachari"
    }
    if(content==="  DHAKA - RANGAMATI"){
        from.value="Dhaka";
        to.value="Rangamati"
    }
    if(content==="  DHAKA - BANDARBAN"){
        from.value="Dhaka";
        to.value="Bandarban"
    }
    if(content==="  DHAKA - KOLKATA"){
        from.value="Dhaka";
        to.value="Kolkata"
    }
    if(content==="  DHAKA - RAJSHAHI"){
        from.value="Dhaka";
        to.value="Rajshahi"
    }
    if(content==="  DHAKA - BARISAL"){
        from.value="Dhaka";
        to.value="Barisal"
    }
    if(content==="  DHAKA - KUAKATA"){
        from.value="Dhaka";
        to.value="Kuakata"
    }
    if(content==="  DHAKA - TANGAIL"){
        from.value="Dhaka";
        to.value="Tangail"
    }
    if(content==="  DHAKA - KHULNA"){
        from.value="Dhaka";
        to.value="Khulna"
    }
    if(content==="  DHAKA - CUMILLA"){
        from.value="Dhaka";
        to.value="Cumilla"
    }
    if(content==="  DHAKA - SYLHET"){
        from.value="Dhaka";
        to.value="Sylhet"
    }
    if(content==="  DHAKA - PABNA"){
        from.value="Dhaka";
        to.value="Pabna"
    }
    if(content==="  DHAKA - MOULVIBAZAR"){
        from.value="Dhaka";
        to.value="Moulvibazar"
    }
    if(content==="  DHAKA - SUNAMGANJ"){
        from.value="Dhaka";
        to.value="Sunamganj"
    }
    if(content==="  DHAKA - DINAJPUR"){
        from.value="Dhaka";
        to.value="Dinajpur"
    }
    if(content==="  DHAKA - RANGPUR"){
        from.value="Dhaka";
        to.value="Rangpur"
    }
    if(content==="  DHAKA - BOGRA"){
        from.value="Dhaka";
        to.value="Bogra"
    }
    if(content==="  DHAKA - SIRAJGANJ"){
        from.value="Dhaka";
        to.value="Sirajganj"
    }
    if(content==="  DHAKA - PATUAKHALI"){
        from.value="Dhaka";
        to.value="Patuakhali"
    }
    if(content==="  DHAKA - BAGERHAT"){
        from.value="Dhaka";
        to.value="Bagerhat"
    }
    if(content==="  CHITTAGONG - SYLHET"){
        from.value="Chittagong";
        to.value="Sylhet"
    }
    if(content==="  DHAKA - GOPALGANJ"){
        from.value="Dhaka";
        to.value="Gopalganj"
    }
    if(content==="  RANGPUR - RAJSHAHI"){
        from.value="Rangpur";
        to.value="Rajshahi"
    }
    if(content==="  DHAKA - MANIKGANJ"){
        from.value="Dhaka";
        to.value="Manikganj"
    }
    if(content==="  CUMILLA - SYLHET"){
        from.value="Cumilla";
        to.value="Sylhet"
    }
    if(content==="  CUMILLA - CHITTAGONG"){
        from.value="Cumilla";
        to.value="Chittagong"
    }
    localStorage.setItem("from",from.value);
    localStorage.setItem("to",to.value);
    
    
}
submitHandle=(e)=>{
    //e.preventDefault();
    // let getFrom=localStorage.getItem("from");
    // let getTo=localStorage.getItem("to");

    let getFrom=document.getElementById("From").value;
    let getTo=document.getElementById("To").value;

        localStorage.setItem("getFrom",getFrom);
        localStorage.setItem("getTo",getTo);

        
    
    //console.log(getFrom);
}

