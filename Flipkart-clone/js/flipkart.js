
let crousel = document.getElementsByClassName('crousel')[0];
let imgelem = crousel.children[0];
let arr = ['img/nature.png','img/nature2.png','img/prod1.png','img/prod2.png','img/prod3.png','img/prod4.png'];
let i = 0;
setInterval(() => {
     if(i==arr.length){
        i = 0;
    }
    else{
    imgelem.src = arr[i];
    i += 1;
    } 
}, 4000);

function changeimage(val){
    let fullsrc = imgelem.src;
    let src_index = imgelem.src.search('img');
    let src = fullsrc.substring(src_index , fullsrc.length);
    let index = 0;
    for (const j in arr) {
        if(arr[j] == src){
            index = parseInt(j);
            break
        }
    }
    
    if(val == 1){
        if((index+1 == arr.length)){
            index = 0;
            imgelem.src = arr[index];
        }
        let fullindex = index + 1;
        imgelem.src = arr[fullindex];
    }
    else{
        if(index-1 == -1){
            index = arr.length-1;
            imgelem.src = arr[index];
        }
        else{
        imgelem.src = arr[index - 1];
        }
}

}

let forward_btn = document.querySelector('.forward_btn');
let backward_btn = document.querySelector('.backward_btn');
forward_btn.addEventListener('click',function(event){
    changeimage(1);
})
backward_btn.addEventListener('click',function(event){
    changeimage(-1);
})
// making hamburgur button work by adding event listener
let nav_mob = document.querySelector('.navbar_mobile');
let ham_btn = document.querySelector('.triple_img');
ham_btn.addEventListener('click',function(){
   let style_nav = nav_mob.style;
   if(style_nav.length==0){
       nav_mob.style = "visibility:visible;";
   }
   else if(style_nav['visibility']=='visible'){
    nav_mob.style = "visibility:hidden;";
   }
   else{
    nav_mob.style = "visibility:visible;";
   }
})



