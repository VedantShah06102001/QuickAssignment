const images=[
    {
        "previewImage": "https://images.unsplash.com/photo-1561948955-570b270e7c36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        "title": "cat.jpeg"
    },
    {
        "previewImage": "https://images.unsplash.com/photo-1606787620819-8bdf0c44c293?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        "title": "a man and a woman trying to cook a meal together in a modern kitchen.jpg"
    },
    {
        "previewImage": "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        "title": "bali-kelingking-beach-plastic-removal-drive.key"
    },
    {
        "previewImage": "https://images.unsplash.com/photo-1623206837956-07dab21608f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        "title": "NextByk Investor Pitch 2022.ppt"
    },
    {
        "previewImage": "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
        "title": "interns-performance-report-may-2022.key"
    }
];
const titles=[];//to store the title 
for(let i=0;i<5;i++)
{
    titles[i]=images[i].title;
}
var i=0;
const btn1=document.querySelector("#id0");
const btn2=document.querySelector("#id1");
const btn3=document.querySelector("#id2");
const btn4=document.querySelector("#id3");
const btn5=document.querySelector("#id4");
const disp=document.querySelector(".displaying img");
const caption=document.querySelector(".displaying input");
const allbtn=document.querySelectorAll(".btn");
//to check and correct if image title is too big
const check=(title)=>
{
    if(title.length>22)
    {
        let s1=title.substring(0,12);
        let s2="...";
        let s3=title.substring(title.length-10);
        return s1+s2+s3;
    }
    return title;
}
//initial loading of images
btn1.innerHTML=
`
    <img class="btnimg" id="img1" src=${images[0].previewImage} alt="">
    <div class="text">${check(titles[0])}</div>
`
btn2.innerHTML=
`
    <img class="btnimg" id="img2" src=${images[1].previewImage} alt="">
    <div class="text">${check(titles[1])}</div>
`
btn3.innerHTML=
`
    <img class="btnimg" id="img3" src=${images[2].previewImage} alt="">
    <div class="text">${check(titles[2])}</div>
`
btn4.innerHTML=
`
    <img class="btnimg" id="img4" src=${images[3].previewImage} alt="">
    <div class="text">${check(titles[3])}</div>
`
btn5.innerHTML=
`
    <img class="btnimg" id="img5" src=${images[4].previewImage} alt="">
    <div class="text">${check(titles[4])}</div>
`
disp.src=images[0].previewImage;
caption.value=titles[0];
btn1.style.backgroundColor="#1E90FF";
//change the image with click functionality
btn1.addEventListener("click",()=>
{
    i=0;
    call();
})
btn2.addEventListener("click",()=>
{
    i=1;
    call();
})
btn3.addEventListener("click",()=>
{
    i=2;
    call();
})
btn4.addEventListener("click",()=>
{
    i=3;
    call();
})
btn5.addEventListener("click",()=>
{
    i=4;
    call();
})
//to change the caption
caption.addEventListener("change",(Element)=>
{
    titles[i]=Element.target.value;
    call();
})
//for up and down key functionality
document.addEventListener('keydown',(e)=>
{
    //console.log(e.key);
    if(e.key==="ArrowUp")
    {
        if(i>0)
        {
            i--;
        }
        else
        {
            i=images.length-1;
        }
        call();
    }
    else if(e.key==="ArrowDown")
    {
        if(i<images.length-1)
        {
            i++;
        }
        else
        {
            i=0;
        }
        call();
    }
})
//This is the function which is call every time when index changes and put everything right
const call=()=>
{
    disp.src=images[i].previewImage;
    caption.value=titles[i];
    //to change the background blue of the selected image
    allbtn.forEach((Element)=>
    {
        // console.log(Element);
        if(Element.id===`id${i}`)
        {
            Element.style.backgroundColor="#1E90FF";
            Element.focus();
        }
        else
        {
            Element.style.backgroundColor="white";
        }
        console.log(Element.style.border);
    })
    if(i===0)
    {
        btn1.innerHTML=`
            <img class="btnimg" id="img1" src=${images[i].previewImage} alt="">
            <div class="text">${check(titles[i])}</div>
        `
    }
    else if(i===1)
    {
        btn2.innerHTML=`
            <img class="btnimg" id="img2" src=${images[i].previewImage} alt="">
            <div class="text">${check(titles[i])}</div>
        `
    }
    else if(i===2)
    {
        btn3.innerHTML=`
            <img class="btnimg" id="img3" src=${images[i].previewImage} alt="">
            <div class="text">${check(titles[i])}</div>
        `
    }
    else if(i===3)
    {
        btn4.innerHTML=`
            <img class="btnimg" id="img4" src=${images[i].previewImage} alt="">
            <div class="text">${check(titles[i])}</div>
        `
    }
    else if(i===4)
    {
        btn5.innerHTML=`
            <img class="btnimg" id="img5" src=${images[i].previewImage} alt="">
            <div class="text">${check(titles[i])}</div>
        `
    }
}