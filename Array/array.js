console.log('Hello world')

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let arr = [
    { name: 'Vinh', age: 24 },
    { name: 'Bobo', age: 20 },
    { name: 'poes', age: 19 },
    { name: 'jhonny', age: 18 },
    { name: 'Jerry', age: 30 },
]
// Filter, find

let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let filter = arr.find((item, index) => {
    console.log('check filter item: ', item, 'index: ', index)
    return item && item.age === 55;
});


let mapArr2 = arr2.map((item, index) => {
    return (
        `<td> ${item} - ${index} </td>`
    )
})

arr2.sort((a, b) => a - b)

console.log(filter)
console.log('Check arr2: ', arr2)
console.log('Check mapArr2:', mapArr2)