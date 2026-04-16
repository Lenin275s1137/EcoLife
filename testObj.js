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

// getMostFrequent({ a: 2, b: 5, c: 1 })

const OP = {
    Sp: "Сергиев Посад",
    Dmd: "Домодедово",
    Dubna: "Дубна",
    Himki: "Химки",
    Odin: "Одинцово",
    Ruza: "Руза",
    Istra: "Истра",
    Kasha: "Кашира",
    Luch: "Луховицы",
  };

  const res = Object.entries(OP).map(([el]) => {
    console.log(el)
  })

  console.log(res)