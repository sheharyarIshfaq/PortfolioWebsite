let hamburger=document.querySelector(".hamburger");
let close=document.querySelector(".close");
let mobile_nav=document.querySelector(".mobile_nav");

hamburger.addEventListener('click', ()=>
{
    mobile_nav.classList.add('open')
});

close.addEventListener('click', ()=>
{
    mobile_nav.classList.remove('open');
})


// review slider 

let left_click=document.getElementById("left_click");
let right_click=document.getElementById("right_click");
let one=document.getElementById("one");
let two=document.getElementById("two");
let three=document.getElementById("three");

let count=0;

right_click.addEventListener('click', ()=>
{
    count++;
    if(count>2)
    {
        count=2;
    }

    if(count==0)
    {
        one.style.display='flex';
        two.style.display='none';
        three.style.display='none';
        left_click.style.display='none';
        right_click.style.display="block";
    }
    else if(count==1)
    {
        one.style.display='none';
        two.style.display='flex';
        three.style.display='none';
        left_click.style.display='block';
        right_click.style.display="block";
    }
    else if(count==2)
    {
        one.style.display='none';
        two.style.display='none';
        three.style.display='flex';
        right_click.style.display="none";
        left_click.style.display='block';
    }
})


left_click.addEventListener('click', ()=>
{
    count--;
    if(count<0)
    {
        count=0;
    }

    if(count==0)
    {
        one.style.display='flex';
        two.style.display='none';
        three.style.display='none';
        left_click.style.display='none';
        right_click.style.display="block";
    }
    else if(count==1)
    {
        one.style.display='none';
        two.style.display='flex';
        three.style.display='none';
        left_click.style.display='block';
        right_click.style.display="block";
    }
    else if(count==2)
    {
        one.style.display='none';
        two.style.display='none';
        three.style.display='flex';
        right_click.style.display="none";
        left_click.style.display='block';
    }
})