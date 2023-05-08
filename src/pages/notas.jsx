////////////////////              NextJS - Routes               //////////////////////

// Todo se va a centralizar en nuestra carpeta de pages. NO hay que configurar nada
// Para crear una ruta creo un archivo dentro de pages:
// Por ejemplo: contacto.jsx y para acceder entramos a localhost:3000/contacto
// Por ejemplo: usuario.jsx y para acceder entramos a localhost:3000/usuario

////////////////////              Nested Routes              //////////////////////

//Si creamos una carpeta "productos" dentro de pages y creamos dentro un archivo "index.jsx"
// se crea la ruta localhost:3000/productos.
// Si dentro de esa carpeta productos, creamos un componente por ejemplo (producto1), la ruta de este es localhost:3000/productos/producto1

////////////////////              Dynamic Routes              //////////////////////
//Si creamos una carpeta "productos" dentro de pages y creamos dentro un archivo "index.jsx"
// se crea la ruta localhost:3000/productos.
// Si queremos crear rutas dinamicas tenemos que crear un archivo con con corchetes
// por ejemplo: "[productId]"
// esto va a crear la ruta localhost:3000/productos/productId
// si queremos acceder al valor de productId hay que hacer:
// import { useRouter } from "next/router";
// export default function ProductDetail(){
//     const router = useRouter()
//     const productId = router.query.productId
//     return <div> product detail id : {productId}</div>
// }

// NextJs siempre se va a fijar primero si dentro de la carpeta productos hay una page con el nombre del [productId] si hay, renderiza la page, sino la ruta dinamica
// Si dentro de la carpeta productos,tenemos una page x ejemplo camisa.jsx y una ruta dinamica es localhost:3000/productos/camisa se va a renderizar la page que tenemos en la carpeta

///////////////////            Catch all routes             //////////////////////////
// https://www.youtube.com/watch?v=ZHn726VDoIY&list=PLC3y8-rFHvwgC9mj0qv972IO5DmD-H0ZH&index=9

////////////////////              Link Component Navegation              //////////////////////

// navegación entre rutas de la aplicacion utilizando Link Component:
//Usamos el componente <Link href="/contacto">contacto</Link> en href va hacia donde queremos navegar (importar link component => import Link from 'next/link')
// Ya no se necesita agregar un <a></a> dentro del link (en la mayoria de los tutoriales esta de esa manera pero se cambio la forma)
// Si agregamos la propiedad replace (<Link href="/productos" replace>) al navegar hacia atras te lleva directamente a la pagina ="/"

////////////////////              Navigating Programmatically              //////////////////////
//Navegar automaticamente despues de que hacer algo, por ejemplo si enviamos un formulario y esta ok que nos lleve a otra pagina

////////////////////              Custom 404 Page             //////////////////////
// Ya existe una pagina 404 por defecto, pero si queremos crear una y editarla hay que crear un archivo 404.jsx o js.

// ESTILOS CSS
// Si queremos darle estilos a elementos generales para toda la aplicación, (por ejemplo darle estilos a una etiqueta h1) debemos hacerlo en global.css

//Cuando vamos a estilar un componente por ej contacto.jsx, creamos un archivo contacto.module.css y le damos los estilos en ese archivo. (en contacto.jsx hay que importarlo)
