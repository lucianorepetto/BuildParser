const fs = require('fs');

function Rebuild(){
    // const filename = process.argv[2] //la segunda variable sirve para poner el nombre al html ej: node rebuild.js myfile_2.html

    //Creamos la carpeta "rebuild"
    const rebuild_path = './rebuild'
    if (!fs.existsSync(rebuild_path)){
        fs.mkdirSync(rebuild_path);
    }
    
    //Obtenemos el html del build
    fs.readFile(`${process.cwd()}/build/index.html`, 'utf8', (err, html) => {
        // Guradamos en la carpeta el nuevo html
        fs.writeFileSync(`${process.cwd()}/rebuild/rebuild.html`, html.replace('<body>', '<head></head><body>'))
        console.log("El nuevo archivo HTML fue creado exitosamente")
    });
}

Rebuild()