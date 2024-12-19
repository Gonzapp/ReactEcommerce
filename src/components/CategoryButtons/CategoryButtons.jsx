import { Link } from "react-router-dom"

const CategoryButtons = () => {
  return (
    <div className="categoryButtons">
      <Link to="/productos">
        <button>Ver todos</button>
      </Link>
      <Link to="/productos/perfumes">
        <button>Perfumes</button>
      </Link>
      <Link to="/productos/cremas">
        <button>Cremas</button>
      </Link>
      <Link to="/productos/maquillaje">
        <button>Maquillaje</button>
      </Link>
    </div>
  )
}

export default CategoryButtons
