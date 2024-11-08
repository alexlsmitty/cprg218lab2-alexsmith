document.getElementById("sheep").addEventListener("click",function(){
    console.log("baaaa");
    document.getElementById("sheep").style.backgroundColor = '#97bf04'
    document.getElementById("bear").style.backgroundColor = '#d9043d'
    document.getElementById("elk").style.backgroundColor = '#d9043d'
    document.getElementById("moose").style.backgroundColor = '#d9043d'
    document.getElementById("wolf").style.backgroundColor = '#d9043d'
    document.getElementById("main-image").src = 'images/sheep.webp'
});

document.getElementById("bear").addEventListener("click",function(){
    console.log("rawr");
    document.getElementById("sheep").style.backgroundColor = '#d9043d'
    document.getElementById("bear").style.backgroundColor = '#97bf04'
    document.getElementById("elk").style.backgroundColor = '#d9043d'
    document.getElementById("moose").style.backgroundColor = '#d9043d'
    document.getElementById("wolf").style.backgroundColor = '#d9043d'
    document.getElementById("main-image").src = 'images/bear.webp'
});

document.getElementById("elk").addEventListener("click",function(){
    console.log("elk noises");
    document.getElementById("sheep").style.backgroundColor = '#d9043d'
    document.getElementById("bear").style.backgroundColor = '#d9043d'
    document.getElementById("elk").style.backgroundColor = '#97bf04'
    document.getElementById("moose").style.backgroundColor = '#d9043d'
    document.getElementById("wolf").style.backgroundColor = '#d9043d'
    document.getElementById("main-image").src = 'images/elk.webp'
});

document.getElementById("moose").addEventListener("click",function(){
    console.log("moose noises");
    document.getElementById("sheep").style.backgroundColor = '#d9043d'
    document.getElementById("bear").style.backgroundColor = '#d9043d'
    document.getElementById("elk").style.backgroundColor = '#d9043d'
    document.getElementById("moose").style.backgroundColor = '#97bf04'
    document.getElementById("wolf").style.backgroundColor = '#d9043d'
    document.getElementById("main-image").src = 'images/moose.webp'
});

document.getElementById("wolf").addEventListener("click",function(){
    console.log("AROOOOOOOO");
    document.getElementById("sheep").style.backgroundColor = '#d9043d'
    document.getElementById("bear").style.backgroundColor = '#d9043d'
    document.getElementById("elk").style.backgroundColor = '#d9043d'
    document.getElementById("moose").style.backgroundColor = '#d9043d'
    document.getElementById("wolf").style.backgroundColor = '#97bf04'
    document.getElementById("main-image").src = 'images/wolf.webp'
});