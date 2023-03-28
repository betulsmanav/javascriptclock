let myName = document.querySelector("#myName");
let username = prompt("username giriniz");

myName.innerHTML = ` ${username}`;

//   hh:mm:ss today


function showTime() {
    let myClock = document.querySelector("#myClock")
    let d = new Date()
    let days = ['Pazar', 'Pazartesi', 'Salı', 'Çarsamba', 'Persembe', 'Cuma', 'Cumartesi']

    let hour = d.getHours()
    let minute = d.getMinutes()
    let second = d.getSeconds()

    hour = checkZero(hour)
    minute = checkZero(minute)
    second = checkZero(second)

    // myClock.innerHTML = hour + ":" + minute + ":" + second + "   " +  days[d.getDay()]
    myClock.innerHTML = `${hour} : ${minute} : ${second} ${days[d.getDay()]}`
    
}

function checkZero(i) {
    if (i < 10) {
        i = "0" + i
    } 
    return i;
}

setInterval(showTime, 1000)



    
    
