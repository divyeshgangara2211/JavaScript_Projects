//  Generate random color

const randomColor = function(){
    const hex = "123456789ABCDEF" ;
    let color = "#" ;

    for(let i=0 ; i<6 ; i++){
        color += hex[Math.floor(Math.random()*16)] ;
    }

    return color ; 
}

// console.log( randomColor()) ; 
let intervalID ;
const startChangingColor = function(){
    if(!intervalID){ // check if intervalID == null after ... 
        intervalID = setInterval( changeBGColor , 500 );
    }
   
    function changeBGColor(){
        document.body.style.backgroundColor = randomColor() ;
    }
}

document.querySelector("#start").addEventListener('click' , startChangingColor );

const stopChangingColor = function(){
    clearInterval(intervalID) ;
    intervalID = null ;  // flashout important
}

document.querySelector("#stop").addEventListener('click' , stopChangingColor );