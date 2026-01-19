const { readFileSync, writeFileSync } = require('fs')

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

console.log(first, second)

writeFileSync(
    './content/result-sync.txt', //if there is no file, it will create one, if there is a file, it will overwrite it
    `Here is the overwritten result: ${first}, ${second}`,
    { flag: 'a'} // 'a' flag is for appending the content instead of overwriting
)
