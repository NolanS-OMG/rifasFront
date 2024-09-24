import { useEffect, useState } from "react";
import { MdContentCopy } from "react-icons/md";

const BankSection = ({ className = "", titulo = "Titulo", mensaje = "", cuentas = [{ id: "id", banco: "bbva", clabe: "012580015201500000", nombre: "" }, { id: "id5", banco: "santander", clabe: "012580015201500000", nombre: "" }] }) => {
  const [texto, setTexto] = useState('');

  const copiarAlPortapapeles = () => {
    navigator.clipboard.writeText(texto)
      .then(() => {
        console.log("Copiado:", texto);
      })
      .catch((err) => {
        console.error('Error al copiar el texto: ', err);
      });
  };

  return (
    <ul className={`${className} flex flex-col text-slate-900`}>
      <li className="mb-4">
        <h4 className="text-2xl font-bold">{titulo}</h4>
        {mensaje && <h4 className="text-xl font-semibold">{mensaje}</h4>}
      </li>
      {cuentas.map((cuenta) => {
        const [copyText, setCopyText] = useState("Copiar");
        useEffect(() => {
          if (copyText === "Copiado!") {
            setTimeout(() => {
              setCopyText("Copiar");
            }, 1000)
          }
        }, [copyText])

        return (
          <li key={`${cuenta.id}`} className="text-base mb-2 px-2 py-1 bg-sky-700 rounded text-slate-50">
            <p><strong>BANCO:</strong> {cuenta.banco}</p>
            {cuenta.nombre && <p><strong>NOMBRE:</strong> {cuenta.banco}</p>}
            <p><strong>CLABE: </strong>
              <span className="relative">
                {cuenta.clabe}
                <button disabled={copyText === "Copiado!"} onClick={() => {
                  setTexto(cuenta.clabe);
                  copiarAlPortapapeles();
                  setCopyText("Copiado!");
                }} className={`absolute top-1/2 -translate-y-1/2 left-full translate-x-2 flex items-center gap-1 text-sm ${copyText === "Copiar" ? "text-slate-300 hover:text-slate-50" : "text-green-500 hover:text-green-400"}`}>
                  <MdContentCopy size={16} /><span>{copyText}</span>
                </button>
              </span>
            </p>
          </li>
        )
      })}
    </ul>
  )
}

export default BankSection;