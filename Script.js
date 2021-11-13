const container = document.querySelector('.theatre-structure');
const seats = document.querySelectorAll('.row .seat:not(.taken');
const count = document.getElementById('count');
const total = document.getElementById('total');
const timeSelect = document.getElementById('showtime');
const seatPosition = document.getElementById ('seatPostion');
let stringS = "";


populateUI();
let ticketPrice = +timeSelect.value;

// Save selected movie index and price
function setTimeData(timeIndex, timePrice) {
  localStorage.setItem('selectedTimeIndex', timeIndex);
  localStorage.setItem('selectedTimePrice', timePrice);
}

// update total and count
function updatePickedCount() {
  const pickedSeats = document.querySelectorAll('.row .seat.picked');

  const seatsIndex = [...pickedSeats].map((seat) => [...seats].indexOf(seat));



  localStorage.setItem('pickedSeats', JSON.stringify(seatsIndex));

    

  //copy selected seats into arr
  // map through array
  //return new array of indexes

  const pickedSeatsCount = pickedSeats.length;

  count.innerText = pickedSeatsCount;
  total.innerText = pickedSeatsCount * ticketPrice;

  let x = pickedSeatsCount;

  seatsIndex.forEach((element) =>{

    stringS = "A" + console.log(element-3);

    seatPosition.innerText = stringS;

  })

for(let i =0; i<x; i++){

  if(seatsIndex <= 5 && seatsIndex >=0){

      stringS = "A" + (seatsIndex);

    }

    if (seatsIndex <=10 && seatsIndex>5){

      stringS = "A" + (seatsIndex- -3);
    }
    if (seatsIndex >10 && seatsIndex<=16){

      stringS = "B" + (seatsIndex-11);
    }
    if (seatsIndex >16 && seatsIndex<=21){

      stringS = "B" + (seatsIndex-8);
    }
    if (seatsIndex >=22 && seatsIndex<=35){

      stringS = "C" + (seatsIndex-22);
    }

    if (seatsIndex >=36 && seatsIndex<=49){

      stringS = "D" + (seatsIndex-36);
    }

    if (seatsIndex >=50 && seatsIndex<=63){

      stringS = "E" + (seatsIndex-50);
    }

    if (seatsIndex >=64 && seatsIndex<=77){

      stringS = "F" + (seatsIndex-64);
    }

    if (seatsIndex >=78 && seatsIndex<=91){

      stringS = "G" + (seatsIndex-78);
    }
    if (seatsIndex >=92 && seatsIndex<=105){

      stringS = "H" + (seatsIndex-92);
    }
    if (seatsIndex >=106 && seatsIndex<=119){

      stringS = "I" + (seatsIndex-106);
    }
    if (seatsIndex >=120 && seatsIndex<=133){

      stringS = "J" + (seatsIndex-120);
    }

    if (seatsIndex >=134 && seatsIndex<=139){

      stringS = "K" + (seatsIndex-134);
    }

    if (seatsIndex >=140 && seatsIndex<=144){

      stringS = "K" + (seatsIndex-131);
    }

    if (seatsIndex >=145 && seatsIndex<=150){

      stringS = "L" + (seatsIndex-145);
    }
    if (seatsIndex >=151 && seatsIndex<=155){

      stringS = "L" + (seatsIndex-142);

    }


    
  }

  return pickedSeatsCount;

  
}


// get data from localstorage and populate ui
function populateUI() {
  const pickedSeats = JSON.parse(localStorage.getItem('pickedSeats'));
  if (pickedSeats !== null && pickedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if (pickedSeats.indexOf(index) > -1) {
        seat.classList.add('picked');
      }
    });
  }

  const pickedTimeIndex = localStorage.getItem('pickedTimeIndex');

  if (pickedTimeIndex !== null) {
    timeSelect.pickedIndex = pickedTimeIndex;
  }
}

// Movie select event
timeSelect.addEventListener('change', (e) => {
  ticketPrice = +e.target.value;
  setTimeData(e.target.pickedIndex, e.target.value);
  updatePickedCount();
});

// Seat click event
container.addEventListener('click', (e) => {
  if (e.target.classList.contains('seat') && !e.target.classList.contains('taken')) {
    e.target.classList.toggle('picked');

    updatePickedCount();
  }
});



// intial count and total





