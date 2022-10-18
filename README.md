# GH Pages Build Parsing

Esto es una prueba para mostrar como se puede realizar un parse del build generado por "npm run build".

Este proyecto sirve para hacer un parse mediante la terminal, permitiendo que se puedan automatizar los cambios al build, creando un nuevo html o modificando el html del build.

> **Note** 
> *El archivo rebuild.js debe estar en la carpeta raiz del proyecto, no dentro de la carpeta build.*

## Explicacion de que es un parser y porque utilizar uno

Un parser es una herramienta que sirve para modificar código html, eliminando las partes que no se desean y/o generando nuevas partes, mediante la ejecucion de un código en la terminal.

Esto permitiria automatizar la modificacion  de los builds antes de ser subidos, o previo a un pase a producción.

Para modificar el codigo de una pagina web uno podria modificar directamente el archivo html del codigo fuente, ya que teoricamente tendria acceso a estos archivos, pero si esto se hace directamente, entonces cuando se haga un cambio en este archivo, se tendria que hacer el mismo cambio en todos los archivos de la pagina, es decir, habria que modificar el codigo fuente de todos los archivos de la pagina y este proceso podria ser muy trabajoso, ya que ademas tendria que hacerse manualmente.

# Proceso de aprendizaje

* La primer parte del codigo del parser esta basado en este video [Building a Command Line Tool with Javascript](https://www.youtube.com/watch?v=e1KJ47tyCso), en el se explica como generar archivos mediante terminal utilizando "node" en la terminal.
* Como crear archivos y directorios con node en este [video](https://www.youtube.com/watch?v=1mv9rSI9FFA)


# Ejemplo de uso

Un ejemplo de uso practico es transformar el rebuild en un npm command, como se muestra en el siguiente caso de uso.
