import Head from "next/head";
import Link from "next/link";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Layout from "../components/Layout";
import Login from "@/components/Login";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout title={"Welcome"}>
      <Login />
    </Layout>
  );
}
