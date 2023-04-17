import Link from "next/link";
import Image from "next/image";

export default function blog1() {
  return (
    <div>
      <h1>blog1</h1>
      <div>
        <Image
          src={"/img/pruebaImagen.jpg"}
          width={600}
          height={600}
          alt="imagenPrueba"
        />
      </div>
      <Link href="/">
        <p>Volver al inicio</p>
      </Link>
    </div>
  );
}
