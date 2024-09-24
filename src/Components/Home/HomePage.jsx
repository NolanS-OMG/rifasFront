import CountDown from "../General/CountDown";
import RifaCard from "../General/RifaCard";

import { IoIosArrowForward } from "react-icons/io";
import { FaWhatsapp, FaFacebook } from "react-icons/fa";
import BankSection from "../General/BankSection";

const HomePage = () => {
  const lgButtonClasses = "lg:absolute lg:right-24 lg:top-1/2 lg:-translate-y-1/2"
  return (
    <>

      <header className="">
        <article className="w-full h-fit pt-4 lg:pb-8 pb-6 flex lg:flex-nowrap flex-wrap gap-4 justify-center items-center bg-sky-700 text-slate-50 relative">
          <p className="text-2xl font-bold">La siguiente rifa termina en:</p>
          <div className="lg:w-fit w-full flex lg:pb-0 pb-4">
            <CountDown className="lg:m-0 m-auto" seconds={Math.floor((Number(new Date("2024-10-03T19:00:00Z")) - Number(new Date())) / 1000)} />
          </div>
          <button className={`
            ${lgButtonClasses} px-3 py-1 
            bg-slate-50 text-sky-700 text-lg font-bold rounded-lg 
            hover:text-sky-500 hover:scale-110 hover:underline underline-offset-2 decoration-2 
            transition-all duration-75 hover:duration-300
          `}>Comprar Boletos</button>
        </article>
        <div className="flex flex-wrap lg:px-24 px-2 pt-8 lg:gap-4 gap-12 justify-evenly">
          <RifaCard className="tercio-gap w-full" vendidos={700} />
          <RifaCard className="tercio-gap w-full" />
          <RifaCard className="tercio-gap w-full" />
        </div>
      </header>

      <section id="faq" className="lg:px-48 px-4 py-24">
        <h4 className="w-full text-center lg:text-6xl text-5xl font-bold text-slate-900 pb-4">Preguntas Frecuentes</h4>
        <div className="">
          <details open>
            <summary className="text-2xl  py-2 flex gap-2 lg:items-end items-center"><IoIosArrowForward className="transition-all duration-200 shrink-0" size={24} /><span>¿Cómo se eligen a los ganadores?</span></summary>
          </details>
          <div className="content border-b border-slate-900">
            <p className="text-lg px-1 py-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil neque soluta, dolorum officia amet tenetur temporibus distinctio in sed vel blanditiis ut. Veniam nesciunt hic fuga, quae numquam quod dolor!</p>
          </div>
          <details>
            <summary className="text-2xl py-2 flex gap-2 lg:items-end items-center"><IoIosArrowForward className="transition-all duration-200 shrink-0" size={24} /><span>¿Qué sucede cuando el número es un boleto no vendido?</span></summary>
          </details>
          <div className="content border-b border-slate-900">
            <p className="text-lg px-1 py-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil neque soluta, dolorum officia amet tenetur temporibus distinctio in sed vel blanditiis ut. Veniam nesciunt hic fuga, quae numquam quod dolor!</p>
          </div>
        </div>
      </section>

      <section id="pay" className="lg:px-48 px-4 py-12">
        <h4 className="w-full text-center lg:text-6xl text-5xl font-bold text-slate-900 pb-6">Método de pago</h4>
        <article className="w-full flex flex-wrap justify-evenly gap-6">
          <BankSection className="w-96 bg-white rounded-lg shadow p-4" />
          <BankSection className="w-96 bg-white rounded-lg shadow p-4" />
        </article>
      </section>

      <section id="contact" className="lg:px-96 px-4 py-12">
        <h4 className="w-full text-center lg:text-6xl text-5xl font-bold text-slate-900 pb-4">Contacto</h4>
        <div className="w-full flex lg:flex-nowrap flex-wrap justify-evenly py-12">
          <div className="flex flex-col lg:mb-0 mb-12 justify-center aspect-square items-center gap-1 text-xl text-slate-50 py-4 px-3 font-semibold bg-whatsapp rounded-lg shadow-lg shadow-slate-400">
            <FaWhatsapp size={96} />
            <p className="mt-2">+52 8115835723</p>
          </div>

          <div className="flex flex-col justify-center aspect-square items-center gap-1 text-xl text-slate-50 py-4 px-3 font-semibold bg-facebook rounded-lg shadow-lg shadow-slate-400">
            <FaFacebook size={96} />
            <p className="mt-2">Página Facebook</p>
          </div>

        </div>
      </section>

    </>
  )
}

export default HomePage;