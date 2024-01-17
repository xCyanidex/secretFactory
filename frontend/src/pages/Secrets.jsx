
import SecretCard from "../components/SecretCard"
import { useEffect, useState } from "react"
import axios from 'axios';
const Secrets = () => {

    const [secrets,setSecrets]=useState([]);
       const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchSecrets = async () => {
      const { data } = await axios.get("/api/secrets");
      console.log(data);
      setSecrets(data);
        setLoading(true);
    };
    fetchSecrets();
  }, []);
   
  return (
    <>
      {loading ? (
        <>
          <div className="grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 p-5  ">
            {secrets.map((secret) => (
              <SecretCard
                id={secret._id}
                key={secret._id}
                title={secret.title}
                description={secret.description}
              />
            ))}
          </div>
        </>
      ) : (
        <div className="absolute inset-0 flex justify-center items-center">
          <span className="loading loading-bars loading-lg"></span>
        </div>
      )}
    </>
  );
}

export default Secrets