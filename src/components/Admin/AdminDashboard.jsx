import { useEffect, useState } from 'react';
import axiosInstance from '../../../axiosInstance';
import userPic from '../../assets/images/AdminLogin/user-round.svg'

export default function AdminDashboard() {

    const [ adminUserData, setAdminUserData ] = useState(null);
    const [ userData, setUserData ] = useState({
        email: '',
        password: ''
    });

    useEffect(() => {
        const fetchAdminData = async () => {
            try {
                const response = await axiosInstance.get('/admin');
                setAdminUserData(response.data);                
            } catch (error) {
                console.error("data fetching error:", error);
            }
        };
        fetchAdminData();
    }, [adminUserData]);
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!adminUserData) return;
        adminUserData.map((admin) => {
            if (admin.email === userData.email && admin.password === userData.password) {
                alert("Login Successful!");
                window.location.href = '/admin/home';
            } else {
                alert("Invalid Credentials. Please try again.");
            }
        })
    };

  return (
    <div className=' flex justify-center items-center h-screen bg-linear-to-b from-lightblue to-darkblue text-white/90'>
        <form className=' flex flex-col justify-center items-center gap-4 p-8 border rounded-lg shadow-lg bg-white/5 backdrop-blur-2xl
            w-3/4 sm:w-2/4 md:w-1/2 lg:w-1/3 xl:w-1/4
            '
            onSubmit={handleSubmit}
        >
            <h1 className=' font-bold sm:text-4xl '>Admin Login</h1>
            <img src={userPic} alt=" user image" className=' bg-white/50 rounded-full size-20 p-2 ' />
            <input 
                type="email" 
                required 
                placeholder="Enter your Email" 
                name="email"
                value={userData.email}
                onChange={handleChange}
                className=' rounded-2xl p-2 text-white/90 outline-0 border border-white/60 w-full ' 
            />
            <input 
                type="password" 
                required 
                placeholder="Enter your Password" 
                name="password"
                value={userData.password}
                onChange={handleChange}
                className=' rounded-2xl p-2 text-white/90 outline-0 border border-white/60 w-full ' 
            />
            <button type="submit" className=' bg-darkyellow px-3 py-1 text-lg rounded-2xl '>Login</button>
        </form>
    </div>
  )
}
