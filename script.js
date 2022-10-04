// Variables to hold text value from local storage
textVal9 = localStorage.getItem('box9');
textVal10 = localStorage.getItem('box10');
textVal11 = localStorage.getItem('box11');
textVal12 = localStorage.getItem('box12');
textVal13 = localStorage.getItem('box13');
textVal14 = localStorage.getItem('box14');
textVal15 = localStorage.getItem('box15');
textVal16 = localStorage.getItem('box16');
textVal17 = localStorage.getItem('box17');

// variables to display values on page
text9 = document.getElementById('event9');
text10 = document.getElementById('event10');
text11 = document.getElementById('event11');
text12 = document.getElementById('event12');
text13 = document.getElementById('event13');
text14 = document.getElementById('event14');
text15 = document.getElementById('event15');
text16 = document.getElementById('event16');
text17 = document.getElementById('event17');

text9.value = textVal9;
text10.value = textVal10;
text11.value = textVal11;
text12.value = textVal12;
text13.value = textVal13;
text14.value = textVal14;
text15.value = textVal15;
text16.value = textVal16;
text17.value = textVal17;



var today = moment();
$("#currentDay").text(today.format("dddd, h:mma, MMM Do, YYYY"));

//find current hour as a 0-23 value to compare to the hours of the day
var currentHour = parseInt(today.format('H'));

console.log(currentHour)

function colorChange(timeSlot) {
    timeSlot = document.getElementsByClassName('timeblock')
    console.log('bozo', timeSlot);

    // Check every element in the timeSlot variable one at a time
    for (let i=0; i < timeSlot.length; i++) {
        // get time number from the id of selected timeblock
        let rowTime = parseInt(timeSlot.item(i).id.slice(5));
        console.log("rowTime", rowTime)
        if(rowTime < currentHour) {
            document.getElementById(timeSlot.item(i).id).classList.add('past');
            document.getElementById(timeSlot.item(i).id).classList.remove('bg-secondary');
            console.log(document.getElementById(timeSlot.item(i).id));
        } else if (rowTime > currentHour) {
            document.getElementById(timeSlot.item(i).id).classList.add('future');
            document.getElementById(timeSlot.item(i).id).classList.remove('bg-secondary');
        } else {
            document.getElementById(timeSlot.item(i).id).classList.add('present');
            document.getElementById(timeSlot.item(i).id).classList.remove('bg-secondary');
        }
    }
}




var button = document.querySelectorAll('.btn')
button.forEach(el => el.addEventListener('click', event => {
    var buttonNum = event.target.getAttribute("id").slice(3);
    console.log('button #'+ buttonNum) 
    var textNum = document.getElementById('event'+buttonNum);
    console.log('text-box',textNum);
    inputText = textNum.value;
    console.log(inputText);
    localStorage.setItem("box"+buttonNum, JSON.stringify(inputText));
    console.log('submitted')
}))

// Call functions
colorChange();