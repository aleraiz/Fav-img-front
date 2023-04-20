// Ruteo en NextJS

// Todo se va a centralizar en nuestra carpeta de pages. NO hay que configurar nada
// Para crear una ruta creo un archivo dentro de pages:
// Por ejemplo: contacto.jsx y para acceder entramos a localhost:3000/contacto y listo

// navegación entre rutas de la aplicacion:
//Usamos el componente <Link href="/contacto">contacto</Link> en href va hacia donde queremos navegar
// Ya no se necesita agregar un <a></a> dentro del link (en la mayoria de los tutoriales esta de esa manera pero se cambio la forma)

//Si creamos una carpeta "productos" dentro de pages y creamos dentro un archivo "index.jsx"
// se crea la ruta localhost:3000/productos.
// Si dentro de esa carpeta productos, creamos un componente por ejemplo (producto1), la ruta de este es localhost:3000/productos/producto1

// ESTILOS CSS
// Si queremos darle estilos a elementos generales para toda la aplicación, (por ejemplo darle estilos a una etiqueta h1) debemos hacerlo en global.css

//Cuando vamos a estilar un componente por ej contacto.jsx, creamos un archivo contacto.module.css y le damos los estilos en ese archivo. (en contacto.jsx hay que importarlo)
