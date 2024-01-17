import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const SecretDetail = () => {
  const { id: SecretId } = useParams();
   const [loading, setLoading] = useState(false);
  const [secret,setSecret]=useState([])

  useEffect(() => {
    const fetchSecret = async () => {
      const { data } = await axios.get(`/api/secrets/${SecretId}`);
      setSecret(data);
      setLoading(true);
    };
    fetchSecret();

  }, [SecretId]);


    return(
        <>
        {loading?(
          <>
          <div className="p-2">
            <Link to={'/secrets'} className="btn">Go Back</Link>
        </div>
        <div className="h-full p-10 flex justify-center flex-col items-center">
            <h3 className="text-black text-2xl">Secret Title</h3>
            <h4>{secret.title}</h4>
            <h3 className="text-black text-2xl">Secret Description</h3>
            <h4>{secret.description}</h4>
        </div>
          </>
          ):(
            <div className="absolute inset-0 flex justify-center items-center">
            <span className="loading loading-bars loading-lg"></span>
            </div>
          )}
        </>
        ) 
  }


export default SecretDetail;
