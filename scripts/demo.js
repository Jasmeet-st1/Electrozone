
let playbtn=document.querySelectorAll("#demo_menu li");
let playlogo=document.querySelectorAll(".play");
let videos=document.querySelectorAll("#monitorscreen iframe");

// console.log(playbtn);

for(let i=0; i<playbtn.length; i++){
    playbtn[i].addEventListener('click',function(){
        playVideo(i);
    })
}

function playVideo(count){
    for(let j=0; j<videos.length; j++){
        videos[j].style.display='none';
        playlogo[j].style.display='none';
    }
    videos[count].style.display='block';
    playlogo[count].style.display='inline';
}