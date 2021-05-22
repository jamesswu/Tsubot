
function hoursToMilliseconds(h) {
    return h*60*60*Math.pow(10,3);
}

function minutesToMilliseconds(m) {
    return m*60*Math.pow(10,3);
}
function secondsToMilliseconds(s) {
    return s*Math.pow(10,3);
}

module.exports = {
    hoursToMilliseconds,
    minutesToMilliseconds,
    secondsToMilliseconds
}