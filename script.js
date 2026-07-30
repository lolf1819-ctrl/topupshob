// Top Up Shob V3

// Banner Slider

const banners = [
{
title:"🔥 বাংলাদেশের বিশ্বস্ত Top Up Store",
text:"Free Fire Diamond ও Membership দ্রুত ডেলিভারি"
},
{
title:"💎 Free Fire Diamond",
text:"সাশ্রয়ী দামে Diamond কিনুন"
},
{
title:"👑 Weekly & Monthly Membership",
text:"২৪/৭ অর্ডার গ্রহণ করা হয়"
}
];

let current = 0;

const title = document.querySelector(".banner-text h1");
const text = document.querySelector(".banner-text p");

function changeBanner(){

current++;

if(current>=banners.length){

current=0;

}

title.innerHTML=banners[current].title;

text.innerHTML=banners[current].text;

}

setInterval(changeBanner,4000);

// Smooth Scroll

document.querySelectorAll("nav a").forEach(link=>{

link.addEventListener("click",function(e){

const target=this.getAttribute("href");

if(target.startsWith("#")){

e.preventDefault();

document.querySelector(target).scrollIntoView({

behavior:"smooth"

});

}

});

});

// Welcome

console.log("Top Up Shob Loaded Successfully");
