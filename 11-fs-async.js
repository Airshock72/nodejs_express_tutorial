const { readFile, writeFile } = require('fs')

readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.error(err)
        return
    }
    const first = result
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.error(err)
            return
        }
        writeFile('./content/result-async.txt', `Here is the result: ${first}, ${result}`, (err, result) => {
            if (err) {
                console.error(err)
                return
            }
            console.log(result)
        })
    })
})
