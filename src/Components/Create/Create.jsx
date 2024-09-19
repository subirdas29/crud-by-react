import axios from "axios"

import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"


const Create = () => {


  const [users,setUsers] = useState([])

  const navigate = useNavigate()

  useEffect(()=>{
    axios.get('http://localhost:3000/users')
    .then(res=> setUsers(res.data)) 
    .catch(err=>console.log(err))
  },[])

  const totalUser = users.length


  const handleSubmit =e =>{
    e.preventDefault()
    const name = e.target.name.value
    const email = e.target.email.value
    const phone = e.target.phone.value

    axios.post('http://localhost:3000/users',{
      "id":`${totalUser+1}`,
      "name":name,
      "email":email,
      "phone":phone,
      
    })
    .then(function (res) {
      console.log(res);
      navigate('/')
    })
    .catch(function (error) {
      console.log(error);
    });
  }



  return (
    <div className="border-2 shadow-xl p-20 mx-96 my-40">
      <h1 className="text-4xl mb-12 text-center font-semibold">Add User</h1>
     <form action="" onSubmit={handleSubmit}>

     <div>
      <h1>Name:</h1>
     <label className="input input-bordered flex items-center ">
  
  <input type="text" name="name" className="grow" placeholder="Enter Name" />
</label>
     </div>
<div className="my-4">
<h1>Email:</h1>
<label className="input input-bordered flex items-center gap-2">
  <input type="text" name="email" className="grow" placeholder="Enter Email" />
</label>
</div>

<div>
<h1>Phone:</h1>
<label className="input input-bordered flex items-center gap-2">
  <input type="text" className="grow" name="phone" placeholder="Enter Phone" />
</label>
</div>

<div className="my-6 ">
  <button className="btn btn-success text-white">Submit</button>
  <Link to="/"><button className="btn btn-info ml-4 text-white">Back</button></Link>
</div>

     </form>
    </div>
  )
}

export default Create
