import { useState, useEffect } from 'react'

import ProductsList from '../../components/ProductsList'
import { Game } from '../Home'

const Categories = () => {
  const [actionGames, setActionGames] = useState<Game[]>([])
  const [sportsGames, setSportsGames] = useState<Game[]>([])
  const [simulationGames, setsimulationGames] = useState<Game[]>([])
  const [fightGames, setFightGames] = useState<Game[]>([])
  const [rpgGames, setRpgGames] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/acao')
      .then((res) => res.json())
      .then((res) => setActionGames(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/esportes')
      .then((res) => res.json())
      .then((res) => setSportsGames(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/simulacao')
      .then((res) => res.json())
      .then((res) => setsimulationGames(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/luta')
      .then((res) => res.json())
      .then((res) => setFightGames(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/rpg')
      .then((res) => res.json())
      .then((res) => setRpgGames(res))
  }, [])
  return (
    <>
      <ProductsList games={actionGames} title="Ação" background="black" />
      <ProductsList games={sportsGames} title="Esportes" background="gray" />
      <ProductsList
        games={simulationGames}
        title="Simulação"
        background="black"
      />
      <ProductsList games={fightGames} title="Luta" background="gray" />
      <ProductsList games={rpgGames} title="RPG" background="black" />
    </>
  )
}
export default Categories
