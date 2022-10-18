const fs = require('fs');

function Rebuild(){
    //Creamos la carpeta "rebuild"
    const rebuild_path = './rebuild'
    if (!fs.existsSync(rebuild_path)){
        fs.mkdirSync(rebuild_path);
    }
    
    //Obtenemos el html del build
    fs.readFile(`${process.cwd()}/build/index.html`, 'utf8', (err, html) => {
        // Guradamos en la carpeta el nuevo html
        const js_file = html.split('static/js')[1].split('.js')[0] + '.js'
        const css_file = html.split('static/css')[1].split('.css')[0] + '.css'
        
        //Eliminar los scripts y styles viejos
        const repl_ = html.split('</title>')[1].split('</head>')[0]
        html = html.replace(repl_, '')
        
        fs.readFile(`${process.cwd()}/build/static/js/${js_file}`, 'utf8', (err, js) => {
            //parsing js
            console.log("")
            console.log('Parging js:', js_file)

            arr_html = html.split('</body>')
            html = arr_html[0] + "<script type='text/javascript'>"+js+'</script></body>' + arr_html[1]

            fs.readFile(`${process.cwd()}/build/static/css/${css_file}`, 'utf8', (err, css) => {
                //Parging css
                console.log('Parging css:', css_file)

                arr_html = html.split('</head>')
                html = arr_html[0] + `<style>${css}</style></head>` + arr_html[1]

                fs.writeFileSync(`${process.cwd()}/rebuild/rebuild.html`, html)
                console.log("")
                console.log("\x1b[32m", "Rebuild HTML fue creado exitosamente", '\x1b[0m')
                console.log(" ")

            })
        })
    });
}

Rebuild()