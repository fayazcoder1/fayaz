const para = document.getElementsByTagName('p')
let count = 0;
document.getElementById('btn1').addEventListener('click',incr)
const btn2 = document.getElementById('btn2')
btn2.addEventListener('click',decr)
document.getElementById("btn1").addEventListener("click",message)
setTimeout(function()
{
    console.log("fayyu")
    const dt = new Date()
    document.getElementsById('date').textContent=dt.toLocaleTimeString()  
},5000)
console.log("hi")
function incr ()
{
    count++
    para[0].textContent = count
    //para[1].textContent = "incremented"
}
function message ()
{
    console.log("fayyu")
}
function decr ()
{
    if (count > 0)
    {
        count--
        para[0].textContent = count
       //para[1].textContent = "decremented"
    }
    else
    {
        alert("don't decrease than zero")
    }
}
function reset ()
{
    count = 0;
    para[0].textContent = count
    para[1].textContent = ""
}