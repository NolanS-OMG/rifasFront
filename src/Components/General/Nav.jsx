import { useState } from "react";
import { Link } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import { IoClose } from "react-icons/io5";

const hasMany = false;

const Nav = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  }

  const [openRifas, setOpenRifas] = useState(false);
  const toggleRifas = () => {
    setOpenRifas(!openRifas);
  }

  const linkClass = "text-slate-800 hover:text-sky-700 px-1 py-0.5 text-lg";
  const linkClassMobile = "text-slate-800 hover:text-sky-700 px-2 py-3 text-2xl font-semibold";
  return (
    <nav className="sticky top-0 w-full bg-white shadow px-6 lg:py-3 py-6 flex items-center justify-between z-10">

      <Link to={"/"}><h1 className="font-bold text-4xl">LOGOTIPO</h1></Link>

      <ul className="lg:flex hidden gap-6 pr-16">
        <li className={`${linkClass}`}>
          {hasMany ? <button onClick={toggleRifas}>Rifas disponibles</button> : <Link to={"/rifa01"}>Comprar Boletos</Link>}
        </li>
        <li className={`${linkClass}`}><a href="#pay">Métodos de Pago</a></li>
        <li className={`${linkClass}`}><a href="#faq">Preguntas Frecuentes</a></li>
        <li className={`${linkClass}`}><a href="#contact">Contacto</a></li>
      </ul>

      <button className="lg:hidden" onClick={toggleMenu}>{openMenu ? <IoClose color="#000000" size={36} /> : <MdMenu color="#000000" size={36} />}</button>

      <ul className={`absolute left-0 top-full ${openMenu ? "block" : "hidden"} z-10 bg-white w-full px-6`}>
        <li className={`${linkClassMobile}`}>
          {hasMany ? <button onClick={toggleRifas} className="py-2">Rifas disponibles</button> : <Link className="py-2" to={"/rifa01"}>Comprar Boletos</Link>}
        </li>
        <li className={`${linkClassMobile}`}><a href="#pay" className="py-2">Métodos de Pago</a></li>
        <li className={`${linkClassMobile}`}><a href="#faq" className="py-2">Preguntas Frecuentes</a></li>
        <li className={`${linkClassMobile}`}><a href="#contact" className="py-2">Contacto</a></li>
      </ul>

    </nav>
  )
}

export default Nav;