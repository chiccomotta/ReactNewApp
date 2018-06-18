// funzione asincrona che ritorna una promise
function asyncFunc(e) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(e * 10), 1000)
  })
}

// array di files
const arr = [1, 2, 3, 4, 5]
let final = []

// sequenzializzo le promises: per ogni elemento dell'array invoco la funzione asincrona e
// aspetto la risoluzion della promise prima di invocare la successiva.
// Vedi: https://gist.github.com/anvk/5602ec398e4fdc521e2bf9940fd90f84
function sequentialUpload(arr) {
  return arr.reduce((promise, item) => {
    return promise.then(result => {
      console.log(`uploading ${item}...`)
      return asyncFunc(item).then(result => final.push(result))
    })
  }, Promise.resolve())
}

// test sequential promisis
sequentialUpload(arr).then(() => console.log(`FINAL RESULT is ${final}`))
