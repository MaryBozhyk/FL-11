function formatTime(time) {
    let days = 0
    let hours = 0
    let minutes = 0
    let difference = 0
    if (time >= 1440) {
        difference = time % 1440
        days = (time - difference) / 1440
        time = difference
    }
    if (time >= 60) {
        minutes = time % 60
        hours = (time - minutes) / 60
    } else if (time < 60) {
        minutes = time
    }
    return days + ' day(s) ' + hours + ' hour(s) ' + minutes + ' minute(s)'
}
let time = formatTime(120)
alert(time)
time = formatTime(59)
alert(time)
time = formatTime(3601)
alert(time)