import Layout from "../../components/Layout";
import Image from "next/image";
import styles from "../../styles/user.module.css";

import { getImages } from "@/services/imageService";

export default function user({ images }) {
  console.log(images);
  return (
    <Layout title={"User"}>
      <h1>User menu</h1>
      <main>
        <h2>Mis imágenes</h2>
        <div className={styles.imageGrid}>
          <div className={styles.imageItem}>
            {images &&
              images.map((image) => (
                <div key={image._id} className={styles.imageItem}>
                  <Image
                    src={image.srcImage}
                    width={200}
                    height={200}
                    alt={image.title}
                    className={styles.image}
                  />
                  <h3>{image.title}</h3>
                  <button>Eliminar</button>
                </div>
              ))}
            {/* <Image
              src={
                "https://images.pexels.com/photos/4549410/pexels-photo-4549410.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              width={200}
              height={200}
              alt={"imagen de prueba"}
            />
            <h3>Título de la imagen</h3>
            <p>Descripción de la imagen</p>
            <button>Eliminar</button>
          </div>
          <div className={styles.imageItem}>
            <Image
              src={
                "https://images.pexels.com/photos/4549410/pexels-photo-4549410.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              width={200}
              height={200}
              alt={"imagen de prueba"}
            />
            <h3>Título de la imagen</h3>
            <p>Descripción de la imagen</p>
            <button>Eliminar</button>
          </div> */}
            {/* Aquí irían más imágenes */}
          </div>
        </div>
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await getImages();

  return {
    props: {
      images: res,
    },
  };
}
