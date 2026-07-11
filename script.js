let energy = 0;


const button = document.getElementById("dabButton");
const bar = document.getElementById("energyBar");

const cursor = document.getElementById("cursor");

const scrapbook = document.getElementById("scrapbook");
const garden = document.getElementById("garden");

const envelope = document.getElementById("envelope");

const letter = document.getElementById("letter");
const typing = document.getElementById("typing");

const closeLetter = document.getElementById("closeLetter");

const ending = document.getElementById("ending");

const music = document.getElementById("music");





// CURSOR FOLLOW

document.addEventListener("mousemove", (e)=>{

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

});





// SPARKLES

function makeSparkle(){

    const s = document.createElement("div");

    s.className="sparkle";

    s.innerHTML="✦";

    s.style.left=Math.random()*100+"vw";

    s.style.animationDuration =
    (3+Math.random()*5)+"s";


    document.getElementById("sparkles")
    .appendChild(s);


    setTimeout(()=>{

        s.remove();

    },8000);

}


setInterval(makeSparkle,200);







// DAB CHARGE


button.addEventListener("click",()=>{


    energy += 10;


    bar.style.width = energy + "%";



    if(energy >= 100){

        unlockGarden();

    }


});






function unlockGarden(){


    scrapbook.style.display="none";


    document.body.style.background="#b7ff72";


    cursor.innerHTML="🧸";


    garden.style.display="block";


    setTimeout(()=>{

        cursor.innerHTML="💗";

    },4000);



}








// ENVELOPE OPEN


envelope.addEventListener("click",()=>{


    garden.style.display="none";


    letter.style.display="block";


    music.play().catch(()=>{});


    startTyping();


});








// LETTER TEXT

const message = `hey, lil teddy bear 🧸💚

hehe you actually found the secret thing.

first of all... yo 😭 bahaha

i know A Levels have been stressing you out a lot lately and your brain probably has like 500 tabs open at the same time 💀 lolol

mehh idiot, i need you to remember something okay?

you're doing better than you think.

i know sometimes it feels like there's too much to do and everything is just piling up, but i see how much effort you put in. i see you trying, even on the days when you feel tired or unsure.

so here's your tiny reminder:

stop being so hard on urself harida 🫵😭

take breaks when you need them.

don't be so mean to yourself yea? only I get to do that :3

and remember that one stressful day doesn't decide your whole future.

i'm always cheering for you, even when you don't realize you need someone cheering.

also btw...

you better not underestimate yourself because you're actually so much more capable than you think 🤨💚

okay i'll stop being cheesy now before this becomes a whole novel 💀

just know that i care about you a lot.

i wuv u sooo much, harida?

more than yk 🥺❤️

mwahh 🧸💗`;












let i = 0;


function startTyping(){


    if(i < message.length){


        typing.innerHTML += message.charAt(i);


        i++;


        setTimeout(startTyping,35);


    }


}







// CLOSE LETTER = ENDING


closeLetter.addEventListener("click",()=>{


    letter.style.display="none";


    ending.style.display="block";


    heartRain();


});






// HEART RAIN

function heartRain(){


    const hearts =
    document.getElementById("hearts");


    setInterval(()=>{


        const h=document.createElement("div");


        h.innerHTML="💗";


        h.style.position="absolute";

        h.style.left=Math.random()*100+"vw";

        h.style.top="-20px";

        h.style.fontSize=
        (20+Math.random()*30)+"px";


        h.style.animation=
        "fall 4s linear";


        hearts.appendChild(h);



        setTimeout(()=>{

            h.remove();

        },4000);



    },150);


}
