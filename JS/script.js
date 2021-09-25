setInterval(show,1000);
function show(){
    const d = new Date();
    document.getElementById("time").value = d.getHours() + ":" + d.getMinutes() + ":" +d.getSeconds();
}

