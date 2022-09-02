window.onresize = () => {
    location.reload();
}


//slider images

let scrWidth=screen.width;
slide_container_laptop=document.querySelector("#slider_inner_container_laptop");
slide_images_laptop=document.querySelectorAll("#slider_inner_container_laptop .slider_image");

slide_container_tablet=document.querySelector("#slider_inner_container_tablet");
slide_images_tablet=document.querySelectorAll("#slider_inner_container_tablet .slider_image");

slide_container_phone=document.querySelector("#slider_inner_container_phone");
slide_images_phone=document.querySelectorAll("#slider_inner_container_phone .slider_image");

let slide_container;
let slide_images;
// console.log(scrWidth);
if(scrWidth>1435){
    slide_container=slide_container_laptop;
    slide_images=slide_images_laptop;
}
else if(scrWidth<1435 && scrWidth>750){
    slide_container=slide_container_tablet;
    slide_images=slide_images_tablet;
}
else if(scrWidth<450){
    slide_container=slide_container_phone;
    slide_images=slide_images_phone;
}
// console.log(slide_container);
// console.log(slide_images);


const prevbtn=document.querySelector(".prev");
const nextbtn=document.querySelector(".next");

let counter=1;
let size=slide_container.clientWidth;
// console.log(size);
slide_container.style.transform="translateX("+(-size*counter)+"px)";

setInterval(nextSlide,3000);
// setInterval(prevSlide,3000);

function nextSlide(){
    if(counter>=slide_images.length-1) return;
    console.log(slide_images[counter].className);
    slide_container.style.transition="transform 0.8s ease-in-out";
    counter++;
    // console.log(counter);
    slide_container.style.transform="translateX("+(-size*counter)+"px)";
}

function prevSlide(){
    if(counter==0) return;
    slide_container.style.transition="transform 0.8s ease-in-out";
    counter--;
    // console.log(counter);
    slide_container.style.transform="translateX("+(-size*counter)+"px)";
}

nextbtn.addEventListener('click',nextSlide);
prevbtn.addEventListener('click',prevSlide);


slide_container.addEventListener('transitionend',()=>{
    if(slide_images[counter].id === 'duplicate_l'){
        console.log(slide_images[counter].class);
        slide_container.style.transition="none";
        counter=slide_images.length-2;
        slide_container.style.transform="translateX("+(-size*counter)+"px)";
        // counter=0;
        // alert();
    }
    if(slide_images[counter].id === 'duplicate_f'){
        console.log(slide_images[counter].className);
        slide_container.style.transition="none";
        counter= slide_images.length - counter;
        // console.log(counter);
        slide_container.style.transform="translateX("+(-size*counter)+"px)";
        // counter=
    }
});

//timer
let offerDivs = document.querySelectorAll(".oTime");



for(let i=0; i<offerDivs.length; i++){
    var x = setInterval(xyz, 1000,i);
}

function xyz(i) {
    
    var now = new Date().getTime();
    var end = new Date();
    end.setUTCHours(18,29,59,999);
    
    var distance = end - now;
    // console.log(end);
    
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    let Times=days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    
    if(days==0){
        Times = hours + "h " + minutes + "m " + seconds + "s ";
    }
    if(days==0 && hours==0){
        Times = minutes + "m " + seconds + "s ";
    }
    if(days==0 && hours==0 && minutes==0){
        Times = seconds + "s ";
    }
    offerDivs[i].innerHTML = Times;
    if (distance < 0) {
        clearInterval(x);
        offerDivs[i].innerHTML = "EXPIRED";
    }
    

}