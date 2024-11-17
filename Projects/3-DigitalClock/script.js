  const clock = document.querySelector('#clock');
  const divas = document.querySelector('#date');
//   const clock = document.getElementById('clock');
//   console.log(clock);

  setInterval(function () {

    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
    divas.innerHTML = date.toDateString();

  },1000);  //mili sec ma time interval ley

//   setInterval( function (){

//     let date = new Date();

//     divas.innerHTML = date.toDateString();
//   } , 86400000);
