//class for tracker data.
class CardData {
    constructor(name) {
        const reportData = {
            personName: name,
            work: { daily: { current: 0, previous: 0 }, weekly: { current: 0, previous: 0 }, monthly: { current: 0, previous: 0 } },
            play: { daily: { current: 0, previous: 0 }, weekly: { current: 0, previous: 0 }, monthly: { current: 0, previous: 0 } },
            study: { daily: { current: 0, previous: 0 }, weekly: { current: 0, previous: 0 }, monthly: { current: 0, previous: 0 } },
            exercise: { daily: { current: 0, previous: 0 }, weekly: { current: 0, previous: 0 }, monthly: { current: 0, previous: 0 } },
            social: { daily: { current: 0, previous: 0 }, weekly: { current: 0, previous: 0 }, monthly: { current: 0, previous: 0 } },
            selfCare: { daily: { current: 0, previous: 0 }, weekly: { current: 0, previous: 0 }, monthly: { current: 0, previous: 0 } }
        }
        return reportData;
    }
}

function getRandom() {
    return Math.floor(Math.random() * 11)
}

//hard coding data in, get random number to fill hours for now
const robertJohnson = new CardData("Robert Johnson");
robertJohnson.work.daily.current = getRandom();
robertJohnson.work.weekly.current = getRandom();
robertJohnson.work.monthly.current = getRandom();
robertJohnson.work.daily.previous = getRandom();
robertJohnson.work.weekly.previous = getRandom();
robertJohnson.work.monthly.previous = getRandom();
robertJohnson.play.daily.current = getRandom();
robertJohnson.play.weekly.current = getRandom();
robertJohnson.play.monthly.current = getRandom();
robertJohnson.play.daily.previous = getRandom();
robertJohnson.play.weekly.previous = getRandom();
robertJohnson.play.monthly.previous = getRandom();
robertJohnson.study.daily.current = getRandom();
robertJohnson.study.weekly.current = getRandom();
robertJohnson.study.monthly.current = getRandom();
robertJohnson.study.daily.previous = getRandom();
robertJohnson.study.weekly.previous = getRandom();
robertJohnson.study.monthly.previous = getRandom();
robertJohnson.exercise.daily.current = getRandom();
robertJohnson.exercise.weekly.current = getRandom();
robertJohnson.exercise.monthly.current = getRandom();
robertJohnson.exercise.daily.previous = getRandom();
robertJohnson.exercise.weekly.previous = getRandom();
robertJohnson.exercise.monthly.previous = getRandom();
robertJohnson.social.daily.current = getRandom();
robertJohnson.social.weekly.current = getRandom();
robertJohnson.social.monthly.current = getRandom();
robertJohnson.social.daily.previous = getRandom();
robertJohnson.social.weekly.previous = getRandom();
robertJohnson.social.monthly.previous = getRandom();
robertJohnson.selfCare.daily.current = getRandom();
robertJohnson.selfCare.weekly.current = getRandom();
robertJohnson.selfCare.monthly.current = getRandom();
robertJohnson.selfCare.daily.previous = getRandom();
robertJohnson.selfCare.weekly.previous = getRandom();
robertJohnson.selfCare.monthly.previous = getRandom();

//hard coding for now
let person = robertJohnson;


//Button Selections and Listeners
const cardID = document.querySelectorAll('.card');
const dailyButton = document.querySelector('#daily');
const weeklyButton = document.querySelector('#weekly');
const monthlyButton = document.querySelector('#monthly');
const titleArray = ["work", "play", "study", "exercise", "social", "selfCare"]

dailyButton.addEventListener('click', () => {
    for (let i = 1; i <= 6; i++) {
        let title = titleArray[i - 1]
        let period = "daily"
        let dataset = (person[title][period])
        setData(i, period, dataset)
    }
    dailyButton.classList.add("selected")
    weeklyButton.classList.remove("selected")
    monthlyButton.classList.remove("selected")
})

weeklyButton.addEventListener('click', () => {
    for (let i = 1; i <= 6; i++) {
        let title = titleArray[i - 1]
        let period = "weekly"
        let dataset = (person[title][period])
        setData(i, period, dataset)
    }
    dailyButton.classList.remove("selected")
    weeklyButton.classList.add("selected")
    monthlyButton.classList.remove("selected")
})

monthlyButton.addEventListener('click', () => {
    for (let i = 1; i <= 6; i++) {
        let title = titleArray[i - 1]
        let period = "monthly"
        let dataset = (person[title][period])
        setData(i, period, dataset)
    }
    dailyButton.classList.remove("selected")
    weeklyButton.classList.remove("selected")
    monthlyButton.classList.add("selected")
})

//function to populate Card Data
function setData(i, period, dataset) {
    const cardCurrentHours = document.querySelectorAll('.hours');
    const cardPreviousHours = document.querySelectorAll('.prevHours');

    if (period === "daily") {
        cardCurrentHours[i - 1].textContent = `${dataset.current}hrs`;
        cardPreviousHours[i - 1].textContent = `Yesterday: ${dataset.previous}`;
    }
    else if (period === "weekly") {
        cardCurrentHours[i - 1].textContent = `${dataset.current}hrs`;
        cardPreviousHours[i - 1].textContent = `Last Week: ${dataset.previous}`;

    }
    else if (period === "monthly") {
        cardCurrentHours[i - 1].textContent = `${dataset.current}hrs`;
        cardPreviousHours[i - 1].textContent = `Last Month: ${dataset.previous}`;

    }
}





