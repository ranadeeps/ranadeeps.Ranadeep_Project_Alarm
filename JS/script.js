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
    
}

function setAlarm(){
    let ele = document.createElement('li');
    ele.textContent = dropHours.value + ":" + dropMin.value;
    ele.className = "list-group-item";
    let btn = document.createElement('button');
    btn.style.float = 'right';
    btn.className = 'btn btn-primary';
    ele.id = dropHours.value + dropMin.value;
    btn.onclick = function(){
        del(ele.id);
    };
    let tra = document.createElement('img');
    tra.src = './IMG/trash-fill.svg';
    tra.width = 24;
    tra.height = 40;
    btn.appendChild(tra);
    ele.appendChild(btn);
    list.appendChild(ele);
}
function del(ide){
    let ele = document.getElementById(ide);
    ele.remove();
}
function loadHours(){
    for (let i = 0; i <= 23; i++) {
        let ele = document.createElement('option');
        if(i<10){
            i="0"+i;
        }
        ele.text = i;
        ele.value = i;
        dropHours.appendChild(ele);
    }
    for (let i = 0; i <= 59; i++) {
        let ele = document.createElement('option');
        if(i<10){
            i="0"+i;
        }
        ele.text = i;
        ele.value = i;
        dropMin.appendChild(ele);
    }
}
window.onload = loadHours();
