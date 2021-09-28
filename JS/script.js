setInterval(show,1000);
let dropHours = document.getElementById('hours');
let dropMin = document.getElementById('min');
let list = document.getElementById('alarmList');

function show(){
    const d = new Date();
    let hour = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();
    hour = hour < 10 ? "0" + hour : hour;
    min= min< 10 ? "0" + min: min;
    sec = sec < 10 ? "0" + sec : sec;
    document.getElementById("time").value = hour + ":" + min+ ":" + sec;
    // if(dropHours.value == hour && dropMin.value == min){
    //     alertMsg();
    // }
}

function setAlarm(){
    let ele = document.createElement('li');
    ele.textContent = dropHours.value + ":" + dropMin.value;
    ele.className = "list-group-item";
    list.appendChild(ele);
}

function loadHours(){
    for (let i = 0; i <= 23; i++) {
        let ele = document.createElement('option');
        ele.text = i;
        ele.value = i;
        dropHours.appendChild(ele);
    }
    for (let i = 0; i <= 59; i++) {
        let ele = document.createElement('option');
        ele.text = i;
        ele.value = i;
        dropMin.appendChild(ele);
    }
}
window.onload = loadHours();
