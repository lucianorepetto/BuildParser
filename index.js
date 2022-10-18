const fs = require('fs')

function writeHTML5(){
    const filename = process.argv[2]
    fs.writeFileSync(`${process.cwd()}/${filename}`, '<hmtml><body>hello world</body></html>')
}

writeHTML5()