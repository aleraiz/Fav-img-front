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

////////////////////              Pre-rendering             //////////////////////
// Se refiere al proceso de generar html por adelantado con los datos necesarios para una página en nuestra aplicación

// Por que querriamos renderizar paginas previamente en una aplicación?
// 1) Pre-rendering mejora el rendimiento.
// En una app de react, tenemos que esperar a que se ejecute el javascript, que luego quizas se obtengan datos de una API externa y finalmente se renderiza el ui, por lo que hay un tiempo de espera del usuario.
// Con una pagina pre-renderizada previamente, el html ya se generó y por lo tanto se carga más rápido. Por lo que el pre-rendering puede generar un mejor rendimiento
// 2) Pre-rendering mejora el SEO.
// En react, si el motor de búsqueda llega a su página, solo ve una etiqueta div con el id=root.
// si el motor de búsqueda accede a una página pre-renderizada, todo el contenido estará presente en el código fuente, lo que ayudará a indexar la página, lo que lleva a mejores clasificaciones de busqueda

// Hay dos formas de pre-renderización: 1) Static Generation  2) Server-side Rendering

////////////////////              Static Generation             //////////////////////
//un método de pre-renderizado en el que las páginas HTML se generan en el momento de compilación.
// El HTML con todos los datos que componen el contenido de la página web se generan anticipadamente cuando se construye la aplicación
// Ejemplos de cuando usar Static Generation: Blog pages, e-commerce product pages, documentation and marketing pages

//  Next Js, por defecto, sin ninguna configuración, genera estáticamente cada página de nuestra aplicación cuando la construimos para producción(build de la app). Esto permite que la página sea almacenada en caché por un CDN e indexada por un motor de búsqueda.

////////////////////      Static Generation with getStaticProps        //////////////////////

// Primero obtenemos algunos datos externos y despues genera el HTML
//En next js cuando exportamos un page component, tambien podemos exportar una funcion asincrona llamada getStaticProps(). Si exportamos esa función, se ejecutará en el build time en producción y dentro de la función se puede obtener datos externos (fetch) y enviarlos como props al componente
// Ejemplo:

// function UserList({users}){
//     return <h1>Lista of users</h1>
// }

// export default UserList

// export async function getStaticProps(){
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
//     console.log(data) // este console.log se ve en la terminal y no en la consola del navegador
//     // Hay que retornar siempre un objeto, con una prop llamada props que tambien es un objeto
//     return {
//         props:{
//             users: data, // data es la lista de usuarios que obtuvimos en el fetch
//         }
//     }

//     // Esto se le pasa como prop a la funcion del componente de pagina (UserList({prop})) se puede destructurar tmb y poner({users})
//     // Despues este users lo recorremos con un map y vamos mostrando cada uno como siempre
// }

// ESTILOS CSS
// Si queremos darle estilos a elementos generales para toda la aplicación, (por ejemplo darle estilos a una etiqueta h1) debemos hacerlo en global.css

//Cuando vamos a estilar un componente por ej contacto.jsx, creamos un archivo contacto.module.css y le damos los estilos en ese archivo. (en contacto.jsx hay que importarlo)
