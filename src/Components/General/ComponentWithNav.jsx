import Nav from "./Nav.jsx";

const ComponentWithNav = ({ children }) => {
  return (
    <div className="relative scroll-smooth">
      <Nav />
      {children}
    </div>
  )
}

export default ComponentWithNav;