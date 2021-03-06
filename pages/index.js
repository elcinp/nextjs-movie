import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Layout from "../components/Layout";
import MovieCard from "../components/MovieCard";

export default function Home({ movies }) {
  console.log(movies);
  return (
    <Layout>
      <Head>
        <title>Nextjs-Movie</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      

      <MovieCard movies={movies} />
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`
  https://api.themoviedb.org/3/movie/popular?api_key=03bc9c0daee204f57c600a2bd683e5d9&language=en-US&page=1`);
  const movies = await res.json();
  return {
    props: {
      movies,
    },
  };
}
