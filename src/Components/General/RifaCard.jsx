import ProgressBar from "./ProgressBar";

const RifaCard = ({
  className = "",
  rutaImagen = "/wp7729182.jpg",
  altImagen = "La mamalona",
  title = "TITULO",
  premios = ["Premio 1", "Premio 2", "Premio 3"],
  boletos = 1000, vendidos = 0, precio = 20.0,
  id = "rifa",
  fecha = "2024-08-10",
  hora = "9:00pm"
}) => {
  return (
    <article className={`${className} relative p-4 shadow bg-white rounded-3xl flex flex-col justify-center items-center`}>
      <div className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full px-2 py-1 bg-sky-700 text-slate-50 text-sm`}>{fecha} - {hora}</div>
      <h4 className="text-center font-bold text-slate-800 text-2xl mb-2">{title}</h4>
      <ul className="flex flex-wrap justify-center text-lg gap-2">
        {premios.map(p => {
          return (
            <li className="px-3 py-1 bg-sky-700 text-slate-50 font-bold rounded-full" key={`${id}-${p}`}>{p}</li>
          )
        })}
      </ul>
      <img src={rutaImagen} alt={altImagen} className="w-full aspect-video object-cover my-2" />
      <div className="flex flex-wrap justify-between w-full my-4">
        <ProgressBar className="w-full" progress={vendidos / boletos} />
        <p className="text-sm font-semibold">Vendidos: {vendidos}/{boletos}</p>
        <p className="text-sm font-semibold">Restantes: {boletos - vendidos}</p>
      </div>
      <button className={`w-2/3 px-3 py-1 text-sky-700 bg-slate-50 font-bold border-sky-700 border-2 rounded-full 
        transition-all duration-75 hover:duration-200 hover:bg-sky-700 hover:text-slate-50 hover:scale-110`}>Compra por ${precio}</button>
    </article>
  )
}

export default RifaCard;