import Layout from "../../../components/Layout";
import Image from "next/image";

import { getImages } from "@/services/imageService";

export default function user({ images }) {
  console.log(images);
  return (
    <Layout>
      <h1>User menu</h1>
      {images &&
        images.map((image) => (
          <div key={image._id}>
            <Image
              src={image.srcImage}
              width={200}
              height={200}
              alt={image.title}
            />
            <p>{image.title}</p>
          </div>
        ))}
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
