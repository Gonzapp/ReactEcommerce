import { Link } from "react-router-dom";

const CategoryButtons = () => {
  return (
    <div className="d-flex gap-2">
      <Link to="/productos/perfumes">
        <button className="btn btn-outline-primary">Perfumes</button>
      </Link>
      <Link to="/productos/cremas">
        <button className="btn btn-outline-success">Cremas</button>
      </Link>
      <Link to="/productos/maquillaje">
        <button className="btn btn-outline-danger">Maquillaje</button>
      </Link>
    </div>
  );
};

export default CategoryButtons;
