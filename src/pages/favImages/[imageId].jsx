import { useRouter } from "next/router";

export default function ImageDetail() {
  const router = useRouter();
  const imageId = router.query.imageId;

  return <h1>Image Detail ID: {imageId}</h1>;
}
