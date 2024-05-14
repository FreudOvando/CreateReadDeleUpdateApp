
import { useEffect, useState } from 'react'
import './App.css'
import UseCrud from './hooks/UseCrud'
import FormUser from './component/FormUser'
import Users from './component/Users'


function App() {
  
  const [userSelected, setUserSelected] = useState()
  
  const  [ users , getUsers, createUser, deleteUser, updateUser ] =  UseCrud('/users/')
  
  const [formIsOpen, setformIsOpen] = useState(false);

const [deleteMessage, setDeleteMessage] = useState(false);



  

  useEffect(() => {
    getUsers();
  },[])

const handleOpen = () => {
  setformIsOpen(!formIsOpen);

}

  return (
   
   
   <div className='w-auto flex justify-center items-center min-w-[390px]  flex-col'>
    <header className='w-auto h-auto m-2 p-2 bg-slate-600 rounded-2xl shadow-2xl shadow-slate-700 items-center justify-center flex flex-row'>
      <p className='text-center text-xl text-lime-100 m-2 p-2 cursor-pointer hover:text-green-400'>Create new USER</p>
        <button onClick={handleOpen} 
          className="group cursor-pointer outline-none hover:rotate-90 duration-300"
          title="Add New"
        >
          <svg
            className="stroke-teal-500 fill-none group-hover:fill-teal-800 group-active:stroke-teal-200 group-active:fill-teal-600 group-active:duration-0 duration-300"
            viewBox="0 0 24 24"
            height="50px"
            width="50px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-width="1.5"
              d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
            ></path>
            <path stroke-width="1.5" d="M8 12H16"></path>
            <path stroke-width="1.5" d="M12 16V8"></path>
          </svg>
        </button>
      </header>

< FormUser 
createUser={createUser}
userSelected={userSelected}
updateUser={updateUser}
setUserSelected={setUserSelected}
formIsOpen={formIsOpen}
setformIsOpen={setformIsOpen}
/>

<div className='grid grid-cols-2 gap-2 max-sm:grid-cols-1 h-[100vh]'>
  {
    users?.map(user => (
      <Users 
      key={user.id}
      user={user}
      deleteUser={deleteUser}
      setUserSelected={setUserSelected}
      setformIsOpen={setformIsOpen}
      deleteMessage={deleteMessage}
      setDeleteMessage={setDeleteMessage}
        />
    ))
  }
</div>

   </div>
  )
}

export default App
