

const AddSecret = () => {
  return (
    <>
      <div className="mt-20">
        <form
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
              className="textarea textarea-bordered h-24"
              placeholder="Secret"
            ></textarea>
      
          </label>
          <div className="flex justify-center">
          <button className="btn btn-outline my-4 max-w-28 ">Submit Secret</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddSecret