import { useEffect, useState } from "react";
import { useGetSecretByUserIdQuery } from "../slices/secretsApiSlice";
import { useUpdateSecretMutation } from "../slices/secretsApiSlice";
import { Link } from "react-router-dom";
const AddSecret = () => {
  const [updateSecret] = useUpdateSecretMutation();
const {data:secret,isLoading,error}=useGetSecretByUserIdQuery();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(()=>{
  if (secret && !isLoading) {
    setTitle(secret.title);
    setDescription(secret.description);
  }
  },[secret,isLoading])

  const submitHandler=async  (e)=>{
    e.preventDefault();

    try {
      const res = await updateSecret({title,description}).unwrap();
      if(res){ alert("Submission successful")}
    } catch (error) {
      console.log(error);
        //  alert(`${error?.data.message}` || `${error?.error}`);
    }
  }
return isLoading ? (
  <div className="absolute inset-0 flex justify-center items-center">
    <span className="loading loading-bars loading-lg"></span>
  </div>
) : (
  <>
    <div className="p-2">
      <Link to={"/secrets"} className="btn">
        Go Back
      </Link>
    </div>
    <div className="mt-20">
      <form
        onSubmit={submitHandler}
        action=""
        className="flex flex-col justify-center p-4 max-w-xl m-auto bg-slate-300 rounded-lg "
      >
        <div className="text-center">
          <h2 className="text-2xl">Secret</h2>
        </div>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Title for your secret</span>
          </div>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <label className="form-control">
          <div className="label">
            <span className="label-text">Your Secret</span>
          </div>
          <textarea
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            className="textarea textarea-bordered h-24"
            placeholder="Secret"
          ></textarea>
        </label>
        <div className="flex justify-center">
          <button className="btn btn-outline my-4 max-w-28 ">
            Submit Secret
          </button>
        </div>
      </form>
    </div>
  </>
);

};

export default AddSecret;
