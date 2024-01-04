'use client'
import WeatherInfo from "@/components/WeatherInfo"
import { Weather } from "@/types/Weather.interface"
import { Search } from "lucide-react"
import { useState } from "react"

export default function Home() {
  const [weather, setWeather] = useState<Weather | null>(null)
  const [search, setSearch] = useState('')
  const [notFound, setNotFound] = useState(false)

  async function getWeatherInfo(cityName: String) {
    setWeather(null)

    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${process.env.NEXT_PUBLIC_WEATHER_API}`

      const response = await fetch(url)
      const data = await response.json()

      setWeather({
        city: data.name,
        country: data.sys.country,
        temperature: parseFloat((data.main.temp - 273.15).toFixed(1)),
        icon: data.weather[0].icon,
        details: data.weather[0].main,
        realFeel: parseFloat((data.main.feels_like - 273.15).toFixed(1)),
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        pressure: data.main.pressure
      })

      setNotFound(false)
    } catch (err) {
      setNotFound(true)
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value)
  }

  return (
    <>
      <div className="flex gap-2 mt-5">
        <input
          value={search}
          onChange={handleChange}
          placeholder="Insira o nome da cidade"
          type="text"
          className="border-0 w-64 text-slate-200 rounded-lg p-3 bg-slate-600 placeholder:text-slate-300 focus:outline-0" />
        <button
          onClick={() => getWeatherInfo(search)}
          className="bg-slate-600 px-4 rounded-lg hover:bg-slate-500 transition-colors"
        >
          <Search className="text-slate-200" />
        </button>
      </div>
      
      <section className="mt-7 max-w-[90%] text-slate-50 text-center mb-5">
        {notFound 
          ? <p className="text-slate-200 text-xl mt-10 w-64">Dados não encontrados, verifique o nome da cidade e tente novamente!</p>
        : weather
          ? <WeatherInfo key={weather.city} weather={weather} />
          : <p className="text-slate-200 text-xl mt-10 w-72">Pesquise por uma cidade para mais informações.</p> 
        }
      </section>
    </>
  )
}