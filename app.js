var timer;
var compareDate = new Date();
compareDate.setDate(compareDate.getDate() + 7);
timer=setInterval(function() {
    timeBetweenDates(compareDate);
}, 1000);

function timeBetweenDates(toDate){
    var dateEntered=toDate;
    var now=new Date();
    var difference=dateEntered.getTime() - now.getTime();

    if (difference<=0){
        clearInterval(timer);
    }else{
        var days = Math.floor(difference / (1000 * 60 * 60 * 24));
        var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((difference % (1000 * 60)) / 1000);

        document.getElementById('days').innerHTML=days;
        document.getElementById('hours').innerHTML=hours;
        document.getElementById('minutes').innerHTML=minutes;
        document.getElementById('seconds').innerHTML=seconds;
    }
console.log(difference)   
}