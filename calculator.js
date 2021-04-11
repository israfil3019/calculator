function cal(val)
{
document.getElementById("input").value+=val // screen
 }

function solve()
{
let x = document.getElementById("input").value
let y = eval(x)
document.getElementById("input").value = y
}

function clr()
{
document.getElementById("input").value = ""
}

function sqr()
{
 let x = document.getElementById("input").value
 let y = eval(x)
 document.getElementById("input").value = y*y
}

function abs()
{
 let x = document.getElementById("input").value
 let y = eval(x)
 document.getElementById("input").value = (-1)*(y)
}

