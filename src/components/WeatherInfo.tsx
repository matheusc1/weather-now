import { Weather } from "@/types/Weather.interface"
import { Thermometer, Droplets, Wind, Gauge } from 'lucide-react'

interface WeatherInfoProps {
  weather: Weather
}

export default function WeatherInfo({ weather }: WeatherInfoProps) {
  return (
    <>
      <p className="text-3xl font-light mb-6">{weather.city}, {weather.country}</p>
      <p className="text-6xl mb-3 font-semibold">{weather.temperature}°C</p>
      <p className="text-sm mb-6 text-slate-200">{weather.details}</p>

      <hr className="mb-6 w-80 items-center border-slate-400 mx-auto" />

      <section>
        <p className="text-start mb-8 text-slate-100">Details</p>
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-center justify-center gap-1.5">
            <Thermometer className="text-slate-300" />
            <p>{weather.realFeel}°C</p>
            <p className="text-xs text-slate-300">Real Feel</p>
          </div>

          <div className="flex flex-col items-center justify-center gap-1.5">
            <Droplets className="text-slate-300" />
            <p>{weather.humidity}%</p>
            <p className="text-xs text-slate-300">Humidity</p>
          </div>

          <div className="flex flex-col items-center justify-center gap-1.5">
            <Wind className="text-slate-300" />
            <p>{weather.windSpeed} km/h</p>
            <p className="text-xs text-slate-300">Wind Speed</p>
          </div>

          <div className="flex flex-col items-center justify-center gap-1.5">
            <Gauge className="text-slate-300" />
            <p>{weather.pressure}mb</p>
            <p className="text-xs text-slate-300">Pressure</p>
          </div>         
        </div>
      </section>
    </>
  )
}