import { useEffect } from "react";
import { useForm } from "react-hook-form";

const formUser = ({ createUser, userSelected, updateUser, setUserSelected, formIsOpen, setformIsOpen }) => {
  
  const { handleSubmit, register, reset } = useForm();

  useEffect(() => {
    reset(userSelected);
  }, [userSelected]);

  const submit = (data) => {
    createUser(data);
    setformIsOpen(false);
    if (userSelected) {
      updateUser(userSelected.id, data);
      setUserSelected();
    } else {
    }
    reset({ 
      email: "",
      password: "",
      first_name: "",
      last_name: "",
      birthday: "",
    });
  };

  const handleClose = () => {
    setformIsOpen(!formIsOpen);
    reset({ 
      email: "",
      password: "",
      first_name: "",
      last_name: "",
      birthday: "",
    });
    setUserSelected();

  }





  return (
    <div className={`w-[25rem] rounded-2xl bg-slate-800 m-2 p-2 min-w-[20rem]  transition-all ${formIsOpen ? 'fixed' : 'hidden'}`}>
    
      <section className="text-xl font-mono text-slate-100 text-wrap text-justify flex flex-row" >
        <p className=" text-center text-gray-400">Form users</p>
      <button onClick={handleClose} className="w-8 h-8 text-xl bg-blue-500 rounded-full text-center justify-end relative bottom-1 left-60 top-2 hover:bg-red-800">X</button>
      </section>
     
      <form
        onSubmit={handleSubmit(submit)}
        className="flex flex-col gap-2 p-2"
      >
        <label className="p-1 flex flex-col items-start justify-center">
          <span className="text-center flex items-start text-md text-gray-300 mb-1 p-1">Email:</span>
          <input
            {...register("email")} name="email" type="email"
            className="bg-slate-500 w-full h-4  text-slate-100 font-mono rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800" placeholder="Email"
          />
    
        </label>
        <label className="p-1 flex flex-col items-start justify-center">
          <span className="text-center flex items-start text-md text-gray-300 mb-2 p-1" >Password:</span>
          <input {...register("password")} name="password" type="password" 
          className="h-2 bg-slate-500 max-w-[30rem]  w-full text-slate-100 font-mono rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800" placeholder="password"/>
        </label>
        <label className=" p-1 flex flex-col items-start justify-center">
          <span className="text-center flex items-start text-md text-gray-300 mb-2 p-1 ">First Name:</span>
          <input {...register("first_name")} type="text" className="bg-slate-500 max-w-[30rem]  w-full h-2 text-slate-100 font-mono rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800" placeholder="First Name" />
        </label>
        <label className=" p-1 flex flex-col items-start justify-center">
          <span className="text-center flex items-start text-md text-gray-100 mb-2 p-1">Last Name:</span>
          <input {...register("last_name")} type="text" className="bg-slate-500 max-w-[30rem]  w-full h-2 text-slate-100 font-mono rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800" placeholder="Last Name" />
        </label>
        <label className=" p-1 flex flex-col items-start justify-center">
          <span className="text-center flex items-start text-md text-gray-100 mb-2 p-1">Birthday:</span>
          <input {...register("birthday")} type="date" className="bg-slate-500 max-w-[30rem]  w-full h-2 text-slate-100 font-mono rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-gray-800" />
        </label>
        <button className=" w-[100%] mt-2 cursor-pointer rounded-md bg-gray-700 px-4 py-3.5 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-blue-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2 active:scale-95" >Submit</button>
        </form>
  </div>
  );
};

export default formUser;
