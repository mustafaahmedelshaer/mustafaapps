var ourData = [];
let catagory = "Seafood"


var allLinks = []



getMeals();
async function getMeals() {

  
    x = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c="+catagory)
    let z = await x.json()

     ourData = z.meals

    display();
    
}





function display() {

    let hsala = ``;

    for (i = 0; i < ourData.length; i++) {
        
        var mealName = ourData[i].strMeal
        var mealID = ourData[i].idMeal
        var mealSrc = ourData[i].strMealThumb

        hsala +=  `<div class="col-md-4 py-2 my-3">
        <div class="meal text-center py-3">
          <img src="`+ourData[i].strMealThumb+`" class="img-fluid my-3" alt="">
          <h2 >`+ourData[i].strMeal+`</h2>
        </div>
      </div>`
        

document.getElementById("demo").innerHTML = hsala


    
}
    
}




//nav dynamic 

var ourcat= [];
getcat()
async function getcat() {

    x = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?c=list")
    let z = await x.json()

    ourcat = z.meals
     let hsala = ``

     for (let i = 0; i < ourcat.length; i++) {
 
 
         hsala += `
         <li class="nav-item">
         <a class="nav-link active" href="#">`+ourcat[i].strCategory+`</a>
     </li>
         
         `
     }
 
     document.getElementById("nav").innerHTML = hsala
    
}








var navClick= document.getElementById("nav")

navClick.addEventListener ("click", nav)

function nav(e)
{
catagory= e.target.text
getMeals()
}






//black box 





var imgs = document.querySelectorAll(".img-fluid")
    imgs = Array.from(imgs)
var blackBox =document.querySelector(".blackBox")
var designbox =document.querySelector(".designBox")
var close =document.getElementById("close")


var currentIndex = 0




document.addEventListener ("click", openBlackBox)

function openBlackBox(e)
{



   for (i = 0; i < ourData.length; i++) {

    if (e.target.src ==ourData[i].strMealThumb ){

        blackBox.classList.replace ("hide","show")
        
        mealcaption()

    }

   }

}


async function mealcaption() {

    var mCaption = []



   let x = await fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i="+ourData[i].idMeal)
   let z = await x.json()

   mCaption=z.meals[0]

hasala = `<div class="designBox px-3 d-flex flex-column  justify-content-center    m-auto ">
        <img src="`+mCaption.strMealThumb+`" class="captionimg  " alt="">
        
        <div class="caption bg-dark  p-3  mb-2  m-auto ">
        <h3>`+mCaption.strMeal+`</h3>
        <p >`+mCaption.strInstructions+`</p>
        </div>
        <i class="fas fa-window-close  fa-2x" id="close"></i>
        </div>
        `
        document.querySelector(".blackBox").innerHTML = hasala

        
}



document.addEventListener("click",closeblackbox)

function closeblackbox(e) {
    var close =document.getElementById("close")

    if (e.target == blackBox || e.target == close ) {
        
        blackBox.classList.replace ("show","hide")
    } 
    
}









document.addEventListener("keyup",slidercontrol)

function slidercontrol(e){


    var x = e.keyCode
    if (x == 27){       // esc
        blackBox.classList.replace ("show","hide")
    }
}


