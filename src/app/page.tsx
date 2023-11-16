export default function Home() {
  return (
    <section className="mt-7 text-slate-50 text-center">
      <p className="text-3xl font-light mb-6">Seul</p>
      <p className="text-6xl mb-3 font-semibold">1°C</p>
      <p className="text-sm mb-6 text-slate-200">Clear</p>

      <hr className="mb-6 w-80 items-center border-slate-400" />

      <section>
        <p className="text-start mb-8 text-slate-100">Details</p>
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <p>2°C</p>
            <p className="text-xs text-slate-300">Real Feel</p>
          </div>

          <div className="flex flex-col">
            <p>52%</p>
            <p className="text-xs text-slate-300">Humidity</p>
          </div>

          <div className="flex flex-col">
            <p>12 km/h</p>
            <p className="text-xs text-slate-300">Wind Speed</p>
          </div>

          <div className="flex flex-col">
            <p>1016mb</p>
            <p className="text-xs text-slate-300">Pressure</p>
          </div>         
        </div>
      </section>
    </section>
  )
}