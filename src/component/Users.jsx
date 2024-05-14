import React from "react";

const Users = ({ user, deleteUser, setUserSelected, setformIsOpen, deleteMessage, setDeleteMessage }) => {
  
    const handleDelete = () => {
        deleteUser(user.id);
    
      }

    const handleEdit = () => {
        setUserSelected(user)
        setformIsOpen(true);
    }
  
    return (
    <div className="bg-gray-700 text-gray-400 shadow-xl shadow-black rounded-lg w-[20rem] h-auto m-2 p-2">
      
    
      <h3 className="font-mono text-2xl text-start p-1">
      Name:   {user.first_name} {user.last_name} 
      </h3>

      <hr className="bg-black m-2" />

      <ul className=" m2 p-2">
        <li>
          <span className=" font-mono text-xl text-start text-wrap" >Email:</span>
          <span className="font-mono text-xl text-start p-1 text-wrap">{user.email}</span>
        </li>

        <li>
          <span className=" font-mono text-xl text-start text-wrap">Birthday:</span>
          <span className="font-mono text-xl text-start p-1 text-wrap">{user.birthday}</span>
        </li>
      </ul>

      <button className="w-10 h-10 m-2 p-2 bg-gray-500" onClick={handleDelete}> ❌ </button>

      <button  className="w-10 h-10 m-2 p-2 bg-gray-500" onClick={handleEdit}>♻</button>

    </div>
  );
};

export default Users;
