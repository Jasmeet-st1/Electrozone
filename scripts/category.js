let images=document.querySelectorAll(".diff_cat-1 img");
for(let i=0;i<images.length;i++){
    images[i].src="./photos/category_photos/laptop_"+(i+1)+".jpeg";
}

let searchbtn=document.querySelector(".innersearch label");
let searchinput=document.querySelector("#search");

searchbtn.addEventListener('click',function(){
    if(searchinput.value!=''){
        location.href='single_category_page.html';
    }
});

let topBtn=document.querySelector("#btt");
topBtn.addEventListener('click',function(){
    document.documentElement.scrollTop = 0;

});