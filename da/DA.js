let arr1 = ['Phan tu 1', 'Phan tu 2']
let state = {
    name: 'Vinh',
    address: 'HCM',
    chanel: 'T1 vo dich'
}

let [name1, name2] = arr1

console.log('Check data Array 1: ', name1, name2)

let { name, address, chanel } = state

console.log('Check data Array 2: ', name, address, chanel)