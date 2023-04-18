import Head from "next/head";
import Link from "next/link";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Layout from "../../components/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout title={"Welcome"}>
      <h1>Index page</h1>
      <p>coso</p>
    </Layout>
  );
}
