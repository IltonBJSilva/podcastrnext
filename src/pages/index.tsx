/* Primeira forma e a tradicional SPA*/
/* Segunda forma e a tradicional SSR*/
/* Terceira forma e a tradicional SSG*/



export default function Home(props) {  
  return (
    <div>
      <h1>Index</h1>
      <p>{JSON.stringify(props.episodes)}</p>
    </div>
  )
}

export async function getServerSideProps(){
  const response = await fetch('http://localhost:3333/episodes')
  const data = await response.json()

  return{
    props:{
      episodes: data,
    }
  }
}
