setInterval(show,1000);
setInterval(alarm,1000);
let dropHours = document.getElementById('hours');
let dropMin = document.getElementById('min');
let list = document.getElementById('alarmList');
var ado = document.getElementById('tone');
let hour,min,sec;
console.log("Started");
function show(){
    const d = new Date();
    hour = d.getHours();
    min = d.getMinutes();
    sec = d.getSeconds();
    hour = hour < 10 ? "0" + hour : hour;
    min= min< 10 ? "0" + min: min;
    sec = sec < 10 ? "0" + sec : sec;
    document.getElementById("time").value = hour + ":" + min+ ":" + sec;
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
function setAlarm(){
    let ele = document.createElement('li');
    ele.textContent = dropHours.value + ":" + dropMin.value;
    ele.className = "list-group-item";
    ele.id = dropHours.value + dropMin.value;
    let btn = document.createElement('button');
    btn.style.float = 'right';
    btn.className = 'btn btn-primary';
    btn.onclick = function(){
        del(ele.id);
    };
    let tra = document.createElement('img');
    tra.src = './IMG/trash-fill.svg';
    tra.width = 24;
    tra.height = 40;
    let check = document.createElement('div');
    check.className = 'form-check form-switch';
    check.style.width = '20px';
    check.style.height = '30px';
    check.style.float = 'right';
    let slide = document.createElement('input');
    slide.type = 'checkbox';
    slide.className = 'form-check-input';
    slide.id = dropHours.value + ":" +dropMin.value + "slide";
    slide.checked = 1;
    btn.appendChild(tra);
    ele.appendChild(btn);
    check.appendChild(slide);
    ele.appendChild(check);
    list.appendChild(ele);
}
function alarm(){
    if(sec == '00'){
        let itm = list.getElementsByTagName('li');
        for(let i=0;i<itm.length;i++){
            if(itm[i].textContent == hour + ":" + min)
            {
                var sld = document.getElementById(itm[i].textContent+'slide');
                console.log(sld);
                if(sld.checked == true){
                    ado.play();
                }
            }
            else{
                ado.pause();
            }
        }
    }
}

function stp(){
    ado.pause();
}

function del(ide){
    let ele = document.getElementById(ide);
    ele.remove();
}

window.onload = loadHours();
