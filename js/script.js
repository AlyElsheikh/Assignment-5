let nav = document.getElementsByClassName('nav')[0];
let toggle = document.getElementById('toggle');
let ul = document.getElementById('nav-ul');

window.onscroll = function () {
    if(scrollY > 0){
        nav.style.backgroundColor = "#111";
    }else{
        nav.style.backgroundColor = "transparent";
    }
}

toggle.onclick = function (){
    ul.classList.toggle("toggleClass");
}





let progress = document.getElementsByClassName("progress-accuracy");

let prog = function (){
    for (let i = 0 ; i < progress.length ; i++ ){
        let prowidth = progress[i].getAttribute('name');
        progress[i].style.width = prowidth+'%';
    }
}

prog();