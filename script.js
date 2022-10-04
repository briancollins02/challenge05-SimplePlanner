
var today = moment();
$("#currentDay").text(today.format("dddd, h:mma, MMM Do, YYYY"));

//find current hour as a 0-23 value to compare to the hours of the day
var currentHour = parseInt(today.format('H'));

console.log(currentHour)

function colorChange(timeSlot) {
    timeSlot = document.getElementsByClassName('timeblock')
    console.log('bozo', timeSlot);

    // Check every element in the timeSlot variable
    for (let i=0; i < timeSlot.length; i++) {
        // if (timeSlot.item(i) <)

        let rowTime = parseInt(timeSlot.item(i).id.slice(5));
        console.log("rowTime", rowTime)
        if(rowTime < currentHour) {
            document.getElementById(timeSlot.item(i).id).classList.add('past');
            document.getElementById(timeSlot.item(i).id).classList.remove('bg-secondary');
            console.log('gamer time')
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





// Call functions
colorChange();