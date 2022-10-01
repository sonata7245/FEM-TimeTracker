
class CardData {
    constructor(name) {
        const reportData = { personName: name, 
                                work: {daily:{current: 0, previous: 0}, weekly: {current: 0, previous: 0},monthly:{current: 0, previous: 0}},
                                play: {daily:{current: 0, previous: 0}, weekly: {current: 0, previous: 0},monthly:{current: 0, previous: 0}},
                                study: {daily:{current: 0, previous: 0}, weekly: {current: 0, previous: 0},monthly:{current: 0, previous: 0}},
                                exercise: {daily:{current: 0, previous: 0}, weekly: {current: 0, previous: 0},monthly:{current: 0, previous: 0}},
                                social: {daily:{current: 0, previous: 0}, weekly: {current: 0, previous: 0},monthly:{current: 0, previous: 0}},
                                selfCare: {daily:{current: 0, previous: 0}, weekly: {current: 0, previous: 0},monthly:{current: 0, previous: 0}}
                             }
        return reportData;
    }
}

function getRandom(){
    return Math.floor(Math.random() * 11)
}


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
const titleArray = ["work", "play", "study", "exercise", "social", "selfCare"]
//hard coding for now
let person = robertJohnson;

console.log(robertJohnson.work.daily)

const cardID = document.querySelectorAll('.card');
const dailyButton = document.querySelector('#daily');
const weeklyButton = document.querySelector('#weekly');
const monthlyButton = document.querySelector('#monthly');

 dailyButton.addEventListener('click', () => {
        setData("daily", person)
        dailyButton.classList.add("selected")
        weeklyButton.classList.remove("selected")
        monthlyButton.classList.remove("selected")
     })

weeklyButton.addEventListener('click', () => {
    setData("weekly", person)
    dailyButton.classList.remove("selected")
        weeklyButton.classList.add("selected")
        monthlyButton.classList.remove("selected")
})

monthlyButton.addEventListener('click', () => {
    setData("monthly", person)
    dailyButton.classList.remove("selected")
        weeklyButton.classList.remove("selected")
        monthlyButton.classList.add("selected")
})

function setData(period, dataset) {

    

    const cardCurrentHours = document.querySelectorAll('.hours');
    const cardPreviousHours = document.querySelectorAll('.prevHours');

    console.log(cardCurrentHours)
    console.log(cardPreviousHours)

    if (period === "daily") {
        cardCurrentHours[0].textContent = `${dataset.work.daily.current}hrs`;
        cardPreviousHours[0].textContent = `Yesterday: ${dataset.work.daily.previous}`;
        cardCurrentHours[1].textContent = `${dataset.play.daily.current}hrs`;
        cardPreviousHours[1].textContent = `Yesterday: ${dataset.play.daily.previous}hrs`;
        cardCurrentHours[2].textContent = `${dataset.study.daily.current}hrs`;
        cardPreviousHours[2].textContent = `Yesterday: ${dataset.study.daily.previous}hrs`;
        cardCurrentHours[3].textContent = `${dataset.exercise.daily.current}hrs`;
        cardPreviousHours[3].textContent = `Yesterday: ${dataset.exercise.daily.previous}hrs`;
        cardCurrentHours[4].textContent = `${dataset.social.daily.current}hrs`;
        cardPreviousHours[4].textContent = `Yesterday: ${dataset.social.daily.previous}hrs`;
        cardCurrentHours[5].textContent = `${dataset.selfCare.daily.current}hrs`;
        cardPreviousHours[5].textContent = `Yesterday: ${dataset.selfCare.daily.previous}hrs`;
    }
    else if (period === "weekly") {
        cardCurrentHours[0].textContent = `${dataset.work.weekly.current}hrs`;
        cardPreviousHours[0].textContent = `Last Week: ${dataset.work.weekly.previous}`;
        cardCurrentHours[1].textContent = `${dataset.play.weekly.current}hrs`;
        cardPreviousHours[1].textContent = `Last Week: ${dataset.play.weekly.previous}hrs`;
        cardCurrentHours[2].textContent = `${dataset.study.weekly.current}hrs`;
        cardPreviousHours[2].textContent = `Last Week: ${dataset.study.weekly.previous}hrs`;
        cardCurrentHours[3].textContent = `${dataset.exercise.weekly.current}hrs`;
        cardPreviousHours[3].textContent = `Last Week: ${dataset.exercise.weekly.previous}hrs`;
        cardCurrentHours[4].textContent = `${dataset.social.weekly.current}hrs`;
        cardPreviousHours[4].textContent = `Last Week: ${dataset.social.weekly.previous}hrs`;
        cardCurrentHours[5].textContent = `${dataset.selfCare.weekly.current}hrs`;
        cardPreviousHours[5].textContent = `Last Week: ${dataset.selfCare.weekly.previous}hrs`;
    }
    else if (period === "monthly") {
        cardCurrentHours[0].textContent = `${dataset.work.monthly.current}hrs`;
        cardPreviousHours[0].textContent = `Last Month: ${dataset.work.monthly.previous}`;
        cardCurrentHours[1].textContent = `${dataset.play.monthly.current}hrs`;
        cardPreviousHours[1].textContent = `Last Month: ${dataset.play.monthly.previous}hrs`;
        cardCurrentHours[2].textContent = `${dataset.study.monthly.current}hrs`;
        cardPreviousHours[2].textContent = `Last Month: ${dataset.study.monthly.previous}hrs`;
        cardCurrentHours[3].textContent = `${dataset.exercise.monthly.current}hrs`;
        cardPreviousHours[3].textContent = `Last Month: ${dataset.exercise.monthly.previous}hrs`;
        cardCurrentHours[4].textContent = `${dataset.social.monthly.current}hrs`;
        cardPreviousHours[4].textContent = `Last Month: ${dataset.social.monthly.previous}hrs`;
        cardCurrentHours[5].textContent = `${dataset.selfCare.monthly.current}hrs`;
        cardPreviousHours[5].textContent = `Last Month: ${dataset.selfCare.monthly.previous}hrs`;
    }


}





