import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

const Read = () => {

  const [user,setUser] = useState([])

  const {id} = useParams();
  

  useEffect(()=>{
    axios.get(`http://localhost:3000/users/${id}`)
    .then(res=> setUser(res.data)) 
    .catch(err=>console.log(err))
  },[])

  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl mx-auto my-60">
  <div className="card-body">
    <h2 className="card-title text-3xl text-center font-semibold">Details Users</h2>
    <div className="my-2">
    <p><span>Name:</span> {user.name}</p>
    <p><span>Email:</span> {user.email}</p>
    <p><span>Phone:</span> {user.phone}</p>
    </div>
    <div className="">
    <Link to={`/update/${id}`}><button className="btn btn-success text-white">Edit</button></Link>
    <Link to="/"><button className="btn btn-info ml-4 text-white">Back</button></Link>
    </div>
  </div>
</div>
    </div>
  )
}

export default Read
