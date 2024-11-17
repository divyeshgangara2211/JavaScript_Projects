const form = document.querySelector('form');
//console.log(form); 

// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit' , function (e){

    e.preventDefault() ;  //subit button click karta value je url ke server pase jay te roke(method che)

    //and height and weight ni value calculate button click krre tyare j levani means form ni ander event thay tyare levani in short form  bar leta empty value jayyy box ma 
    //click event pr value levi che ...

    const height = parseInt(document.querySelector('#Height').value);   //value string ma mle so int ma covert krta 
    const weight = parseInt(document.querySelector('#Weight').value);
    const results= document.querySelector('#results'); // results element che so sidhi value mle


    if( height === '' || height < 0 || isNaN(height)){
        results.innerHTML = 'Please give a valid height' ;  //check height
    } 
    else if( weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = 'Please give a valid weight' ;  // check weight
    }
    else {
        const BMI =  ( weight / ((height * height) / 10000 )).toFixed(2);
         //show results
         results.innerHTML =`<span>${BMI}</span>` ;

                if(  BMI <= 18.6){
                   note.innerHTML ='<span>Under Weight</span>';
               }
                else if( BMI > 18.6 && BMI <= 24.9){
                   note.innerHTML ='<span>Normal Weight</span>'
               }
               else if( BMI > 24.9 ){
                   note.innerHTML ='<span>Over Weight</span>'
               }       
    }



    

})