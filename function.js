const btn1 =document.querySelector(".x1 .button2");
const obj1 =document.querySelector(".x1 .b2-bg1-1");

const btn2 =document.querySelector(".x1 .button1");
const obj2 =document.querySelector(".x1 .b1-bg1-1");

const btn3 =document.querySelector(".x1 .button3");
const obj3 =document.querySelector(".x1 .b3-bg1-1");

btn1.addEventListener("mouseover", function ()
{
    obj1.style.backgroundColor = "grey";
});
btn1.addEventListener("mouseout", function ()
{
    obj1.style.backgroundColor = "black";
});

btn2.addEventListener("mouseover", function ()
{
    obj2.style.backgroundColor = "grey";
});
btn2.addEventListener("mouseout", function ()
{
    obj2.style.backgroundColor = "black";
});

btn3.addEventListener("mouseover", function ()
{
    obj3.style.backgroundColor = "grey";
});
btn3.addEventListener("mouseout", function ()
{
    obj3.style.backgroundColor = "black";
});
