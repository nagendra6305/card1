

function toggle(){
    var addcartbtn = document.getElementById("btn")
    if(addcartbtn.innerText == "Add to Cart"){
        addcartbtn.innerText= "remove from cart"
    }  else{
        addcartbtn.innerText = "Add to Cart"
    }
}
function color(){
    var hearticon = document.getElementById("heart")
    if(hearticon.style.color === "white"){
        hearticon.style.color = "blue"
    }else{
        hearticon.style.color = "white"
    }
}