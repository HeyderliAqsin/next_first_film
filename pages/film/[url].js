import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";

const FilmDetail = ({ movie }) => {
  return (
    <div className="movie">
      <Head>
        <title>{movie.title}</title>
      </Head>
      <div className="cover" style={{backgroundImage:`url(https://www.themoviedb.org/t/p/original${movie.backdrop_path})`}}></div>
      <h3>{movie.title}</h3>
      <div className="def">{movie.overview}</div>

      <style jsx>{`
        .movie{
          width:1200px;
          margin:0px auto;
          position:relative;
          padding:20px;
          h3{
            font-size:30px;
            font-weight:bold;
            margin-bottom:20px;
          }
          .summary{
            font-size:18px;
            color:#666;
            line-height:1.7;
          }
          .cover{
            position:absolute;
            top:0;
            left:0;
            width:100%;
            height:600px;
            background-size:cover;
            opacity:0.3;
            z-index:-1;
            &::before{
              content:'';
              background:linear-gradient(to bottom,transparent, #ddd);
              position:absolute;
              top:0%;
              left:0%;
              width:100%;
              height:100%;

            }
          }
        }     
      `}</style>
    </div>
  );
};

export default FilmDetail;

export async function getServerSideProps({ params }) {
  const request = await fetch(
    `https://api.themoviedb.org/3/movie/${params.url}?api_key=d3979df656135c96a122306d37e8a456&language=tr-TR`
  );
  const movie = await request.json();
  return {
    props: {
      movie,
    },
  };
}
