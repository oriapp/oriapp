const thisYear = new Date().getFullYear()
const startTimeOfThisYear = new Date(`${thisYear}-01-01T00:00:00+00:00`).getTime()
const endTimeOfThisYear = new Date(`${thisYear}-12-31T23:59:59+00:00`).getTime()
const progressOfThisYear = (Date.now() - startTimeOfThisYear) / (endTimeOfThisYear - startTimeOfThisYear)
const progressBarOfThisYear = generateProgressBar()

function generateProgressBar() {
    const progressBarCapacity = 30
    const passedProgressBarIndex = parseInt(progressOfThisYear * progressBarCapacity)
    const progressBar = Array(progressBarCapacity)
        .fill('▁')
        .map((value, index) => index < passedProgressBarIndex ? '█' : value)
        .join('')
    return `{ ${progressBar} }`
}

const yearProgress = `\
⏳ **Year Progress** ${progressBarOfThisYear} ${(progressOfThisYear * 100).toFixed(2)} % as on ⏰ ${new Date().getDate()+'-'+(new Date().getMonth()+1)+'-'+new Date().getFullYear()+'.'}
---

`
console.log(yearProgress)
