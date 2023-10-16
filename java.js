var name =prompt("ismingiz nma")
var age = prompt ("nechi yoshsiz")
console.log( " mening ismim " + name + " mening yoshim " +age + " da " )
var misol = +prompt(" Misolni yeching 12*2")
if (misol === 24) {
    alert("Sizning javob tog'ri 24")
} else {
    alert("Sizning javob notog'ri")
    console.log("Sizning javob notog'ri " + misol + " Tog'ri javob 24")
}
var misol = +prompt(" Misolni yeching 20*5")
if (misol === 100) {
    alert("Sizning javob tog'ri 100")
} else {
    alert("Sizning javob notog'ri")
    console.log("Sizning javob notog'ri " + misol + " Tog'ri javob 100")
}
var misol = +prompt(" Misolni yeching 97+12?")
if (misol === 109) {
    alert("Sizning javob tog'ri 109")
} else {
    alert("Sizning javob notog'ri")
    console.log("Sizning javob notog'ri " + misol + " Tog'ri javob 109")
}
var misol = +prompt(" Misolni yeching 50+70?")
if (misol === 120) {
    alert("Sizning javob tog'ri 120")
} else {
    alert("Sizning javob notog'ri")
    console.log("Sizning javob notog'ri " + misol + " Tog'ri javob 120")
}
var misol = +prompt(" Misolni yeching 450+450")
if (misol === 900) {
    alert("Sizning javob tog'ri 900")
} else {
    alert("Sizning javob notog'ri")
    console.log("Sizning javob notog'ri " + misol + " Tog'ri javob 90")
}
var misol = +prompt(" Misolni yeching 45+23")
if (misol === 68) {
    alert("Sizning javob tog'ri 68")
} else {
    alert("Sizning javob notog'ri")
    console.log("Sizning javob notog'ri " + misol + " Tog'ri javob 68")
}
var misol = +prompt(" Misolni yeching 72/8")
if (misol === 9) {
    alert("Sizning javob tog'ri 9")
} else {
    alert("Sizning javob notog'ri")
    console.log("Sizning javob notog'ri " + misol + " Tog'ri javob 9")
}
var misol = +prompt(" Misolni yeching 81/9")
if (misol === 9) {
    alert("Sizning javob tog'ri 9")
} else {
    alert("Sizning javob notog'ri")
    console.log("Sizning javob notog'ri " + misol + " Tog'ri javob 9")
}
var misol = +prompt(" Misolni yeching 187 % 17=?")
if (misol === 31,79) {
    alert("Sizning javob tog'ri 31,79")
} else {
    alert("Sizning javob notog'ri")
    console.log("Sizning javob notog'ri " + misol + " Tog'ri javob 31,79")
}
alert("2-uy ishi")
var age = +prompt("yoshingiz")
if (age <= 16) {
    alert("yoshsiz oqishingiz kerak")
} 
else if(age > 18 && age <= 40){
    alert("ishlashiz kerak")
}
else if(age > 50 && age <= 59){
    alert("xudo johlasa pensiya chiqas")
}
else{
    alert("sizda nimadurni noto'g'ri kiritdingiz ")
}