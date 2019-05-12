const filteredKeys = collection.filter(item => item[pre])
const originalKeys = collection.map(item => item)

const truthCheck = (collection, pre) => {
  const result = filteredKeys.length === originalKeys.length ? true : false
  return result
}

console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"},
                        {"user": "Dipsy", "sex": "male"},
                        {"user": "Laa-Laa", "sex": "female"},
                        {"user": "Po", "sex": "female"}],
                        "sex"))
