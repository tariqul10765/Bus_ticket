//let demo=document.getElementById("demo");
//console.log(demo);

routeHandle=(e)=>{
    let content=e.target.textContent;

    if(content==="  DHAKA - CHITTAGONG"){
        from="Dhaka";
        to="Chittagong"
    }
    if(content==="  DHAKA - COX'S BAZAR"){
        from="Dhaka";
        to="Cox's Bazar"
    }
    if(content==="  DHAKA - KHAGRACHHARI"){
        from="Dhaka";
        to="Khagrachari"
    }
    if(content==="  DHAKA - RANGAMATI"){
        from="Dhaka";
        to="Rangamati"
    }
    if(content==="  DHAKA - BANDARBAN"){
        from="Dhaka";
        to="Bandarban"
    }
    if(content==="  DHAKA - KOLKATA"){
        from="Dhaka";
        to="Kolkata"
    }
    if(content==="  DHAKA - RAJSHAHI"){
        from="Dhaka";
        toe="Rajshahi"
    }
    if(content==="  DHAKA - BARISAL"){
        from="Dhaka";
        to="Barisal"
    }
    if(content==="  DHAKA - KUAKATA"){
        from="Dhaka";
        to="Kuakata"
    }
    if(content==="  DHAKA - TANGAIL"){
        from="Dhaka";
        to="Tangail"
    }
    if(content==="  DHAKA - KHULNA"){
        from="Dhaka";
        to="Khulna"
    }
    if(content==="  DHAKA - CUMILLA"){
        from="Dhaka";
        to="Cumilla"
    }
    if(content==="  DHAKA - SYLHET"){
        from="Dhaka";
        to="Sylhet"
    }
    if(content==="  DHAKA - PABNA"){
        from="Dhaka";
        to="Pabna"
    }
    if(content==="  DHAKA - MOULVIBAZAR"){
        from="Dhaka";
        to="Moulvibazar"
    }
    if(content==="  DHAKA - SUNAMGANJ"){
        from="Dhaka";
        to="Sunamganj"
    }
    if(content==="  DHAKA - DINAJPUR"){
        from="Dhaka";
        to="Dinajpur"
    }
    if(content==="  DHAKA - RANGPUR"){
        from="Dhaka";
        to="Rangpur"
    }
    if(content==="  DHAKA - BOGRA"){
        from="Dhaka";
        to="Bogra"
    }
    if(content==="  DHAKA - SIRAJGANJ"){
        from="Dhaka";
        to="Sirajganj"
    }
    if(content==="  DHAKA - PATUAKHALI"){
        from="Dhaka";
        to="Patuakhali"
    }
    if(content==="  DHAKA - BAGERHAT"){
        from="Dhaka";
        to="Bagerhat"
    }
    if(content==="  CHITTAGONG - SYLHET"){
        from="Chittagong";
        to="Sylhet"
    }
    if(content==="  DHAKA - GOPALGANJ"){
        from="Dhaka";
        to="Gopalganj"
    }
    if(content==="  RANGPUR - RAJSHAHI"){
        from="Rangpur";
        to="Rajshahi"
    }
    if(content==="  DHAKA - MANIKGANJ"){
        from="Dhaka";
        to="Manikganj"
    }
    if(content==="  CUMILLA - SYLHET"){
        from="Cumilla";
        to="Sylhet"
    }
    if(content==="  CUMILLA - CHITTAGONG"){
        from="Cumilla";
        to="Chittagong"
    }
    localStorage.setItem("from",from);
    localStorage.setItem("to",to);

    
}