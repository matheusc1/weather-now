import CityInfo from "@/components/CityInfo"

export default function Home() {
  const city = [{
    name: 'Seul',
    temperature: 1,
    details: 'clear',
    realFeel: 2,
    humidity: 52,
    windSpeed: 12,
    pressure: 1016
  }]

  return (
    <section className="mt-7 text-slate-50 text-center">
      {city.map(city => <CityInfo key={city.name} city={city} />)}
    </section>
  )
}