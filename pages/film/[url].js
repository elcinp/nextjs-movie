import Head from "next/head"

export default function FilmDetail({movie}) {
    // console.log(movie);
    

    return (
        <div>
            <Head>
                <title>{movie.title}</title>
            </Head>
            <h3>{movie.title}</h3>
            <div className="summary">
                {movie.overview}
            </div>
        </div>
    )
}

export async function getServerSideProps({params}) {
    const res = await fetch(
        `https://api.themoviedb.org/3/movie/${params.url}?api_key=<<api_key>>&language=en-US`)
        const movie = await res.json()
    return{
        props:{
            movie
        }
    }
}
