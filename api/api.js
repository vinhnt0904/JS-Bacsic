fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(Response => {
        return Response.json()
    })
    .then(data => {
        console.log('Check data: ', data)
    })

// const getNewTodo = async (id) => {
//     let response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
//     if (response && response !== 200) {
//         throw new Error('Something wrong with status code: ' + response.status)
//         // reject
//     }
//     let data = await response.json()
//     return data // resolve
// }

const getNewTodo = async (id) => {
    try {
        let response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        if (response && response.status !== 200) {
            throw new Error('Something wrong with status code: ' + response.status)
            // reject
        }
        let data = await response.json()
        return data // resolve
    } catch (e) {
        console.log('Check catch err: ', e.message)
    }

}

getNewTodo('ádsdasdsas').then(data => {
    console.log('>> Check data: ', data)
})

    .catch(err => {
        console.log('>>> Check error: ', err.message)
    })