'use client'
import WeatherInfo from "@/components/WeatherInfo"
import { Weather } from "@/types/Weather.interface"
import { Search } from "lucide-react"
import { useState } from "react"

export default function Home() {

  const [weather, setWeather] = useState<Weather | null>({
    city: 'Seul',
    country: 'South Korea',
    temperature: 1,
    details: 'clear',
    realFeel: 2,
    humidity: 52,
    windSpeed: 12,
    pressure: 1016
  })

  // const [weather, setWeather] = useState<Weather | null>(null)
  
  const notFound = false;

  // console.log(weather)

  return (
    <>
      <form className="flex gap-2 mt-4">
        <input
          placeholder="Insira o nome da cidade"
          type="text"
          className="border-0 text-slate-200 rounded-lg p-3 bg-slate-600 placeholder:text-slate-300 focus:outline-0" />
        <button className="bg-slate-600 px-4 rounded-lg hover:bg-slate-500 transition-colors">
          <Search className="text-slate-200" />
        </button>
      </form>
      
      <section className="mt-7 text-slate-50 text-center">
        {notFound ? (
          <p className="text-slate-200 text-xl mt-10 w-72">
            Dados não encontrados, verifique o nome da cidade e tente novamente
          </p>
        ) : weather ? (
          <WeatherInfo key={weather.city} weather={weather} />
        ) : ( 
          <p className="text-slate-200 text-xl mt-10 w-72">
            Pesquise por uma cidade para mais informações
          </p> 
        )}
      </section>
    </>
  )
}