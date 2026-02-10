const { readFile, writeFile } = require('fs').promises

// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf-8', (err, result) => {
//             if (err) reject(err)
//             else resolve(result)
//         })
//     })
// }

// getText('./content/first.txt')
//     .then((result) => console.log(result))
//     .catch((err) => console.log(err))

const start = async () => {
    try {
        const first = await readFile('./content/first.txt', 'utf-8')
        const second = await readFile('./content/second.txt', 'utf-8')

        await writeFile(
            './content/result-ming-grenade.txt',
            `This is the result: ${first}, ${second}`,
            { flag: 'a'}
        )
        console.log(first)
        console.log(second)
    } catch (err) {
        console.error(err)
    }
}

start().then()