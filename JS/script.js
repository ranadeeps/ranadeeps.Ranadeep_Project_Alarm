setInterval(show,1000);
function show(){
    const d = new Date();
    let hour = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();
    hour = hour < 10 ? "0" + hour : hour;
    min= min< 10 ? "0" + min: min;
    sec = sec < 10 ? "0" + sec : sec;
    document.getElementById("time").value = hour + ":" + min+ ":" + sec;
}
function loadHours(){
    let dropHours = document.getElementById('hours');
    for (let i = 0; i <= 23; i++) {
        let ele = document.createElement('option');
        ele.text = i;
        ele.value = i;
        dropHours.options.add(ele);
    }
    let dropMin = document.getElementById('min');
    for (let i = 0; i <= 59; i++) {
        let ele = document.createElement('option');
        ele.text = i;
        ele.value = i;
        dropMin.options.add(ele);
    }

}
window.onload = loadHours();