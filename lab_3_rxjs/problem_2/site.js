const startBtn = document.querySelector('#start')
const stopBtn = document.querySelector('#stop')
const resetBtn = document.querySelector('#reset')

const startObs = Rx.Observable.fromEvent(startBtn, 'click')
const stopObs = Rx.Observable.fromEvent(stopBtn, 'click')
const resetObs = Rx.Observable.fromEvent(resetBtn, 'click')

const minutes = document.querySelector('#minutes')
const seconds = document.querySelector('#seconds')
const milliseconds = document.querySelector('#milliseconds');

const userHr = document.querySelector('#userHr')
const userMin = document.querySelector('#userMin')
const userSec = document.querySelector('#small')

total = 0;

// Observable created to read when the user clicks the start countdown button
const clearList = document.querySelector('#start');
const stop = document.querySelector('#Stop');
const clearSource = Rx.Observable.fromEvent(clearList, 'click');
changeText = 0;
clearSource.subscribe(event => {
    user_hour = ((userHr.value)*100*60*1000);
    user_min = (userMin.value)*100*10*100;
    user_sec = (userSec.value)*1000;
    console.log(user_hour);
    console.log(user_min);
    console.log(user_sec);
    var total = user_sec + user_min + user_hour;
    total = total / 1000;
    start(total);
    block = document.querySelector('#block');
    clearList.innerHTML = "START COUNTDOWN";
    stop.innerHTML = "Stop";
});

// Function to calculate the different time attributes
const toTime = (time) => ({
    milliseconds: Math.floor(time % 10),
    seconds: Math.floor((time/100) % 60),
    minutes: Math.floor(time / 6000),
})

// Method which renders the time to display each digit
const render = (time) => {
    if ((time.milliseconds) > 0) {
        value = time.minutes
        minutes.innerHTML = value + ":"
        value2 = time.seconds
        seconds.innerHTML = value2 + ":"
        milliseconds.innerHTML = time.milliseconds
    }
    else {
        minutes.innerHTML = " "
        seconds.innerHTML = " "
        milliseconds.innerHTML = "00"
    }
}

const intervalObs = Rx.Observable.interval(10)
const stopOrResetObs = Rx.Observable.merge(
    stopObs,
    resetObs
)

const pauseObs = intervalObs
                        .takeUntil(stopObs)

// Function which handles the rxjs functions initialised when the start countown button is clicked
function start(init2) {
    console.log("now");
    const init = init2;
    const inc = acc => acc-1
    const reset = acc => init

    const incOrResetObs = Rx.Observable.merge(
        pauseObs.mapTo(inc),
        resetObs.mapTo(reset),
    )

    appObs = startObs
    .switchMapTo(incOrResetObs)
    .startWith(init)
    .scan((acc, currFunc) => currFunc(acc))
    .map(toTime)
    .subscribe(val => {
        //this.results = val;
        //console.log('data', val);
        render(val)
    });
}

