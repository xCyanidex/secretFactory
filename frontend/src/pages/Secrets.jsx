
import SecretCard from "../components/SecretCard"
import { useGetSecretsQuery } from "../slices/secretsApiSlice";

const Secrets = () => {
  const {data:secrets,isLoading,error}=useGetSecretsQuery();

  return (
    <>
      {isLoading ? (
        <>
          <div className="absolute inset-0 flex justify-center items-center">
            <span className="loading loading-bars loading-lg"></span>
          </div>
        </>
      ) : error ? (
        <div className="absolute inset-0 flex justify-center items-center">
          <span>{error?.data.message || error.error}</span>
        </div>
      ) : (
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
      )}
    </>
  );
}

export default Secrets