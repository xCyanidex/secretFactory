import { Link } from "react-router-dom";


const SecretCard = ({id,title,description}) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl m-auto">
      <div className="card-body">
        <h2 className="card-title truncate">{title}</h2>
        <p className="truncate">{description}</p>
        <div className="card-actions justify-end">
          <Link to={`/secrets/${id}`} className="btn btn-primary">View</Link>
        </div>
      </div>
    </div>
  );
}

export default SecretCard