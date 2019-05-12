// const filteredKeys = (collection, pre) => collection.filter(item => item[pre]).length
// const originalKeys = (collection, pre) => collection.map(item => item).length

// const truthCheck = (collection, pre) => {
//  return filteredKeys(collection, pre) === originalKeys(collection, pre) ? true : false
// }

// seconde approach with every method

const truthCheck = (collection, pre) => {
  return collection.every(item => item[pre])
}

console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"},
                        {"user": "Dipsy", "sexy": "male"},
                        {"user": "Laa-Laa", "sex": "female"},
                        {"user": "Po", "sex": "female"}],
                        "sex"))
