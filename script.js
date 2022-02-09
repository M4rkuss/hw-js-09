// // 6) Выводить совершенные числа из диапазона
// function perfect (num) {
//   let sum = 0
//   for (let i = 1; i < num; i++) {
//     if (num % i === 0){
//       sum += i
//     }
//   }
//   if (sum === num) return console.log(`Число ${num} совершенное!`)
// }
//
// perfect()
//
// function isPerfect (num1, num2) {
//   for (num1; num1 <= num2; num1++){
//     perfect(num1)
//   }
// }
//
// isPerfect(1,9000)

// // 7) Выводить время
// function time (hours, minutes="00", sec="00"){
//   return console.log(`${hours}:${minutes}:${sec}`)
// }
//
// time(14, 12)

// 8) Возвращает время в секундах
function timeToSeconds (hours = 1, minutes = 0, sec = 0) {
  return (hours * 3600 + minutes * 60 + sec)
}

// timeToSeconds()

// 9) Секунды в часы
function secondsToHours (sec = 3600) {
  let hours = Math.floor(sec / 3600)
  sec %= 3600
  let minutes = Math.floor(sec / 60)
  let seconds = sec % 60
  return (`${hours}:${minutes}:${seconds}`)
}

// secondsToHours()

// 10) Разница между датами

function timeDifference (h1 = 1, m1 = 0, s1 = 0, h2, m2, s2) {
  let time1 =timeToSeconds(h1, m1, s1)
  let time2 = timeToSeconds(h2, m2, s2)
  let result = time1 - time2
  return console.log(`Difference: ${secondsToHours(result)}`)
}

timeDifference(15, 0, 0, 10)

