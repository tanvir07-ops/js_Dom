// console.log(document.body)
// console.log(document.getElementById("p1"))
// document.getElementById("p1").textContent = "My name is Tanvir Rifat"
// document.getElementById("p1").className = "tanvir"
// document.getElementById("p1").style.background = "purple"
// document.getElementById("p1").style.color = "white"
// document.getElementById("p1").style.background = "green"



// getElementById() diye ekbar select korei background or other property change kora jay jemon:

// document.getElementById("p1").style.background = "green"

// karon amra jani id unique hoy mane e ekti element er jonne ekti ei unique id thake tai eke kono loop er moddeh chalano lage nah




// getElementsByClassName() diye loop iteration kore property change kora laage:
// karon amra jani html e class onek tag ei deoaa jay ekoi rokom!
// ei jonne getElementsByClassName() dile loop iteration kore property set kora laage:

var a = document.getElementsByClassName("heading")
for(var i = 0 ; i<a.length;i++){
    a[i].style.background = "Yellow"
    a[i].style.color = "purple"
}


// querySelector(): dile jdi html e ekoi classname onekbar thake tahole first tikei select korbe:
// ar querySelectorAll(): dile jdi html e ekoi classname onekbar thake tahole sob gulakei select korbe:
// and ei querySelectorAll() ke getElementsByClassName() er motoi loop use kore iteration kore property change kora laagbe


document.querySelector(".heading").style.background  = "green"

var a = document.querySelectorAll(".heading")
// for(var i = 0;i<a.length;i++){
//     a[i].style.background = "blue"
//     a[i].style.color = "white"
// }

a.forEach(function(b){
    b.style.background = "yellow"
    b.style.color = "purple"
})

