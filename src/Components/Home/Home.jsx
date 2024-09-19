import axios from "axios"
import { useEffect, useState } from "react"
import { Link} from "react-router-dom"


const Home = () => {
 

    const [users,setUsers] = useState([])
    console.log(users)

    useEffect(()=>{
         axios.get('http://localhost:3000/users')
         .then(res=> setUsers(res.data)) 
         .catch(err=>console.log(err))
    },[])
   

    const handleDelete = id =>{
      const confirm = window.confirm('Are you want to delete it?')
      if(confirm){
        axios.delete(`http://localhost:3000/users/${id}`)
      .then(res=>{
        console.log(res)
        setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id).map((user,index)=>({...user,id:index+1})))})
      .catch(err=>console.log(err))
    }
      }

  return (
    <div>
     <h1 className="text-4xl mt-16 mb-12 text-center font-semibold">
      Lists of Users
     </h1>

     <div className="overflow-x-auto mx-16 shadow-xl border-2 p-4">
      <div className="flex justify-end ">
      <Link to="/create"><button className="btn btn-success text-white"> Add +</button></Link>
        
      </div>
  <table className="table">
    {/* head */}
    <thead>
      <tr className="text-center">
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
    {
      users.map((user,id) =>(
        
        <tr className="text-center" key={id}>
          <th>{user.id}</th>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.phone}</td>
          <td>
          <Link to={`/read/${user.id}`}><button className="btn btn-primary ">Read</button></Link>
          <Link to={`/update/${user.id}`}><button className="btn btn-info mx-4">Edit</button></Link>
          <button className="btn btn-error" onClick={()=>handleDelete(user.id)}>Delete</button>
          </td>
        </tr>
      ))
    }
    </tbody>
  </table>
</div>
    </div>
  )

 

}

export default Home
