// getMostFrequent(obj), которая:

// принимает объект вида { a: 2, b: 5, c: 1 }

// возвращает ключ с наибольшим значением (в данной ситуации вернет "b")

function getMostFrequent(obj) {
    const info = Object.entries(obj)
    let max = 0
    let findKey = ""
    for (let i = 0; i < info.length; i++) {
        const [key, value] = info[i]
        if (value > max) {
            max = value
            findKey = key
        }
    }
    console.log(findKey)
}

getMostFrequent({ a: 2, b: 5, c: 1 })