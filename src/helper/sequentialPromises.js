// questa asincrona che ritorna una promise
function asyncFunc(e) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(e * 10), 1000)
  })
}

// array di files
const arr = [1, 2, 3, 4, 5]
let final = []

// sequenzializzo le promises
function sequentialUpload(arr) {
  return arr.reduce((promise, item) => {
    return promise.then(result => {
      console.log(`uploading ${item}...`)
      return asyncFunc(item).then(result => final.push(result))
    })
  }, Promise.resolve())
}

sequentialUpload(arr).then(() => console.log(`FINAL RESULT is ${final}`))
