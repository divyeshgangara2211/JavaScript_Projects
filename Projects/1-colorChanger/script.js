const buttons = document.querySelectorAll('.button');
// console.log(button);
const body = document.querySelector('body');

buttons.forEach( function (button) {
    // console.log(button);
    
    button.addEventListener('click' , function (e) {
     
        // console.log(e);
        // console.log(e.target);

        if(e.target.id === 'orange'){
                body.style.backgroundColor =e.target.id ;
         }

         if(e.target.id === 'palevioletred'){
            body.style.backgroundColor = e.target.id ;
        }

        if(e.target.id === 'red'){
            body.style.backgroundColor = e.target.id ;
        }

        if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id ;
        }

        if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id ;
        }

        if(e.target.id === 'green'){
            body.style.backgroundColor = e.target.id ;
        }

        if(e.target.id === 'grey'){
            body.style.backgroundColor = e.target.id ;
        }

        if(e.target.id === 'purple'){
            body.style.backgroundColor = e.target.id ;
        }

        if(e.target.id === 'Olive'){
            body.style.backgroundColor = e.target.id ;
        }

        // switch(e.targert.id){
        //     case 'orange' : 
        //     body.style.backgroundColor =e.target.id ; 
        //     break;

        //     case 'palevioletred': 
        //      body.style.backgroundColor =e.target.id ; 
        //     break;

        //     case 'red' : 
        //      body.style.backgroundColor =e.target.id ; 
        //     break;

        //     case 'blue' : 
        //      body.style.backgroundColor =e.target.id ; 
        //     break;

        //     case 'yellow' :  
        //     body.style.backgroundColor =e.target.id ; 
        //     break;

        //     case 'green' : 
        //      body.style.backgroundColor =e.target.id ; 
        //     break;

        //     case 'grey' : 
        //      body.style.backgroundColor =e.target.id ; 
        //     break;

        //     case 'purple' : 
        //      body.style.backgroundColor =e.target.id ; 
        //     break;

        //     case 'olive' : 
        //      body.style.backgroundColor = 'e.target.id '; 
        //     break;

        //     default : 
        //     body.style.backgroundColor = '#212121' ;
        // }
    });

} );

