import './styles.css';

class CountdownTimer {
    constructor({selector, targetDate, update }) {
        this.selector = selector;
        this.targetDate = targetDate;
        this.update = update;
    }

    start() {
        const endTime = this.targetDate;
        setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = endTime - currentTime;
            const time = this.getTimeComponents(deltaTime);
            this.update(time);
        }, 1000)
    } 

    getTimeComponents(time) {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    return { days, hours, mins, secs };
    }
    
    pad(value) {
    return String(value).padStart(2, '0');
}

};

function updateClock({ days, hours, mins, secs }) {
    const selectorRef = document.querySelector(this.selector);
    selectorRef.querySelector('span[data-value="days"]').textContent = days;
    selectorRef.querySelector('span[data-value="hours"]').textContent = hours;
    selectorRef.querySelector('span[data-value="mins"]').textContent = mins;
    selectorRef.querySelector('span[data-value="secs"]').textContent = secs;
}

const timer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Jul 11, 2021'),
    update: updateClock,
});



timer.start();