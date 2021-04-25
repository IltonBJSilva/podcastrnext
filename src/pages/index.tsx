/* Primeira forma e a tradicional SPA*/
/* Segunda forma e a tradicional SSR*/
/* Terceira forma e a tradicional SSG*/

import { useEffect } from "react"

export default function Home() {
  //Função para efeitos colaterias
  useEffect(() => {
    fetch('http://localhost:3333/episodes').then(response => response.json())
    .then(data => console.log(data))
  }, [])
  
  return (
    <h1>Index</h1>
  )
}
