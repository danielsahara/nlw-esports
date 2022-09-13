import express from 'express'

const app = express()

app.get('/ads', (request, response) => {
    console.log('Acessou ads')

    response.json([
        {
            id: 1, name: 'aaaa'
        },
        {
            id: 2, name: 'bbb'
        },
        {
            id: 2, name: 'bbb'
        }
    ])
})

app.listen(3333)