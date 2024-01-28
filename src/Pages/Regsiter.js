import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Regsiter = () => {
  const Navigate=useNavigate();
  const { addToast } = useToasts();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'borrower', // Default role
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handledirect=()=>{
    Navigate("/regsiter");
  }

  const handleSubmit = () => {
    // Here you can send formData to the backend for registration processing
    // console.log('Form Data:', formData);
    try {
      // console.log(response);
      if(formData.email =='' || formData.password==' ' || formData.role){
        alert("please fill email and password");
      }
      else{
      
      // if(formData){
        // localStorage.setItem("token",res.data.token);
        Navigate("/regsiter");
      // }
      }
    } catch (error) {
      // addToast(res.data.messsage,{appearance:"failure"});
      console.log(error);

    }

  }

  return (
    <div className="flex items-center justify-center h-screen">
    <div className="bg-white p-8 rounded shadow-md w-80">
      <h1 className="text-2xl font-bold mb-4 text-center">Registration</h1>
      <form>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Choose Your Role:</label>
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded"
            required
          >
            <option value="admin">Admin</option>
            <option value="borrower">Borrower</option>
            <option value="lender">Lender</option>
          </select>
        </div>

        <div className='flex flex-row justify-between'>
        <button
          type="button"
          onClick={handleSubmit}
          className=" bg-green-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Sign Up
        </button>
        <button
          type="button"
          onClick={handledirect}
          className=" bg-green-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Sign In
        </button>
        </div>
        
        {/* <Link
        
          // onClick={handleSubmit}
          className="  ml-14 text-xl text-black py-2 px-4  hover:bg-sky-200"
          to='/login'
        >
         Register
        </Link> */}
        
      
      </form>
    </div>
  </div>
  )
}

export default Regsiter