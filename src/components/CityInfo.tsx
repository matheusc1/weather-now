import { CityWeather } from "@/types/CityWeather.interface"
import { Thermometer, Droplets, Wind, Gauge } from 'lucide-react'

interface CityInfoProps {
  city: CityWeather
}

export default function CityInfo({ city }: CityInfoProps) {
  return (
    <>
      <p className="text-3xl font-light mb-6">{city.name}</p>
      <p className="text-6xl mb-3 font-semibold">{city.temperature}°C</p>
      <p className="text-sm mb-6 text-slate-200">{city.details}</p>

      <hr className="mb-6 w-80 items-center border-slate-400" />

      <section>
        <p className="text-start mb-8 text-slate-100">Details</p>
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-center justify-center gap-1.5">
            <Thermometer className="text-slate-300" />
            <p>{city.realFeel}°C</p>
            <p className="text-xs text-slate-300">Real Feel</p>
          </div>

          <div className="flex flex-col items-center justify-center gap-1.5">
            <Droplets className="text-slate-300" />
            <p>{city.humidity}%</p>
            <p className="text-xs text-slate-300">Humidity</p>
          </div>

          <div className="flex flex-col items-center justify-center gap-1.5">
            <Wind className="text-slate-300" />
            <p>{city.windSpeed} km/h</p>
            <p className="text-xs text-slate-300">Wind Speed</p>
          </div>

          <div className="flex flex-col items-center justify-center gap-1.5">
            <Gauge className="text-slate-300" />
            <p>{city.pressure}mb</p>
            <p className="text-xs text-slate-300">Pressure</p>
          </div>         
        </div>
      </section>
    </>
  )
}