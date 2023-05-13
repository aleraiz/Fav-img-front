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
          {images &&
            images.map((image) => (
              <div key={image._id} className={styles.imageItem}>
                <Image
                  src={image.srcImage}
                  width={300}
                  height={300}
                  alt={image.title}
                  className={styles.image}
                />
                <h3>{image.title}</h3>
                <div className={styles.imageItemButtons}>
                  <button>Editar</button>
                  <button>Eliminar</button>
                </div>
              </div>
            ))}
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
