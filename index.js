// const filteredKeys = (collection, pre) => collection.filter(item => item[pre]).length
// const originalKeys = (collection, pre) => collection.map(item => item).length

// const truthCheck = (collection, pre) => {
//  return filteredKeys(collection, pre) === originalKeys(collection, pre) ? true : false
// }

// seconde approach with every method

const truthCheck = (collection, pre) => {
// every checks if value returned from the callback is truthy
  return collection.every(item => item[pre])
}

// should return true
console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"},
                        {"user": "Dipsy", "sex": "male"},
                        {"user": "Laa-Laa", "sex": "female"},
                        {"user": "Po", "sex": "female"}],
                        "sex"))
