import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"


const Update = () => {
  const [user,setUser] = useState({
    name: "",
    email: "",
    phone: ""
  })



  const {id} = useParams()

  const navigate = useNavigate()

  useEffect(()=>{
    axios.get(`http://localhost:3000/users/${id}`)
    .then(res=> setUser(res.data)) 
    .catch(err=>console.log(err))
  },[])

  // const totalUser = users.length

  console.log(user.name)

  const handleUpdate =e =>{
    e.preventDefault()
   
    axios.put(`http://localhost:3000/users/${id}`,user)
    .then(function (res) {
      console.log(res);
      navigate('/')
    })
    .catch(function (error) {
      console.log(error);
    });
  }


const handleInputChange = e =>{
  const {name,value} = e.target

  setUser((preUser)=>({
    ...preUser, [name] : value
  }))


}


  return (
    <div className="border-2 shadow-xl p-20 mx-96 my-40">
      <h1 className="text-4xl mb-12 text-center font-semibold">Update User</h1>
     <form action="" onSubmit={handleUpdate}>

     <div>
      <h1>Name:</h1>
     <label className="input input-bordered flex items-center ">
  
  <input type="text" name="name" className="grow" value={user.name}
              onChange={handleInputChange}
              placeholder="Enter Name" />
</label>
     </div>
<div className="my-4">
<h1>Email:</h1>
<label className="input input-bordered flex items-center gap-2">
  <input type="text" name="email" className="grow" value={user.email}
              onChange={handleInputChange}
              placeholder="Enter Email"/> 
</label>
</div>

<div>
<h1>Phone:</h1>
<label className="input input-bordered flex items-center gap-2">
  <input type="text" className="grow" name="phone" value={user.phone}
              onChange={handleInputChange}
              placeholder="Enter Phone" />
</label>
</div>

<div className="my-6 ">
  <button className="btn btn-success text-white">Update</button>
  <Link to="/"><button className="btn btn-info ml-4 text-white">Back</button></Link>
</div>

     </form>
    </div>
  )
}

export default Update
