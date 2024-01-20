"use client"

import Navbar from '../components/EventHeader'
import Footer from '../components/Footer'
import Background from '../components/user/Background'

import { hashPassword } from '../_util/hash'
import { useEffect,useState,useRef } from 'react'
import { REGISTER_URL } from '../_util/constants'
import secureLocalStorage from 'react-secure-storage'
import {useRouter} from 'next/navigation'


export default function Register() { 

    useEffect(()=>{
        secureLocalStorage.clear()
    },[])

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [collegeName, setCollegeName] = useState("Amrita Vishwa Vidyapeetham");
    const [isAmrita, setisAmrita] = useState(true);

    // const [studentName, setStudentName] = useState("");
    // const [studentEmail, setStudentEmail] = useState("");
    // const [studentPhone, setStudentPhone] = useState("");
    // const [studentPassword, setStudentPassword] = useState("");
    // const [confirmStudentPassword, setConfirmStudentPassword] = useState("");
    // const [CollegeName, setCollegeName] = useState("Amrita Vishwa Vidyapeetham");
    // const [isAmrita, setIsAmrita] = useState(False);

    const router = useRouter()

    const handleSignUp = async(e)=>{
        e.preventDefault()
        // console.log({
        //     "studentFullName":name, // Max 255 chars. Min 1 char.
        //     "studentEmail":email, // Valid Email. Max 255 chars.
        //     "studentPhone":phone, // 10-digit exactly.
        //     "studentPassword":hashPassword(password), // min 8 chars. Cannot include '-'(hiphen) and "'"(quotes) as part of the password. SHA256 hashed version.
        //     "studentCollegeName":collegeName, // Max 255 chars. Min 1 char.
        //     "studentCollegeCity":"Coimbatore",
                 
        //     });


        try{
            const response = await fetch(REGISTER_URL,{
                method : "POST",
                headers:{
                    "Content-Type" : "application/json",
                },
                body: JSON.stringify({
                    "studentFullName":name, 
                    "studentEmail":email,  
                    "studentPhone":phone, 
                    "studentPassword":hashPassword(password), 
                    "studentCollegeName":collegeName, 
                    "studentCollegeCity":"Coimbatore",
                })
            })
            

            const data = await response.json()
            console.log(response)
            if (response.status === 200){
                alert("Registration Successful")
                console.log(data)
                secureLocalStorage.setItem("registerToken", data["SECRET_TOKEN"]);
                secureLocalStorage.setItem("registerEmail", email);

                setTimeout(() => {
                    router.push("/register/verify");
                }, 500);

            }
            else if (response.status === 500) {
                alertError('Oops!', 'Something went wrong! Please try again later!');
            } else if (data.message !== undefined || data.message !== null) {
                alertError('Registration Failed', data.message);
            } else {
                alertError('Oops!', 'Something went wrong! Please try again later!');
            }
        
        }
        catch(e){
            console.log(e)
        }


    }

    return (
        <main className='flex h-full justify-center'>
            <Navbar />
            <Background />
             
            <div className="w-full rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-10 md:mt-0 sm:max-w-md xl:p-0 bg-gray-500">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl">Register to your account</h1>
            <form className="space-y-4 md:space-y-6" action="#">
                <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-white">Your Name</label>
                    <input type="text" name="name" id="name" className="bg-transparent border border-gray-800 text-white sm:text-sm rounded-lg focus:ring-primary-800 focus:border-primary-800 block w-full p-2.5" placeholder="Name" required />
                </div>
                <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Your Email</label>
                    <input type="email" name="email" id="email" className=" bg-transparent border border-gray-800 text-white sm:text-sm rounded-lg focus:ring-primary-800 focus:border-primary-800 block w-full p-2.5" placeholder="eon@anokha.amrita.edu" required />
                </div>
                <div>
                    <label htmlFor="phone" className="block mb-2 text-sm font-medium text-white">Phone Number</label>
                    <input type="tel" name="phone" id="phone" className="bg-transparent border border-gray-800 text-white sm:text-sm rounded-lg focus:ring-primary-800 focus:border-primary-800 block w-full p-2.5" placeholder="+91 99999 99999" required />
                </div>
                <div className="flex items-center mb-4">
                    <input type="checkbox" name="amrita-student" id="amrita-student" className="mr-2" />
                    <label htmlFor="amrita-student" className="text-sm font-medium text-white">Amrita Student?</label>
                </div>
                <div>
                    <label htmlFor="college" className="block mb-2 text-sm font-medium text-white">College Name</label>
                    <input type="text" name="college" id="college" className="bg-transparent border border-gray-800 text-white sm:text-sm rounded-lg focus:ring-primary-800 focus:border-primary-800 block w-full p-2.5" placeholder="Amrita School of Engineering, Coimbatore" />
                </div>
                <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">Password</label>
                    <input type="password" name="password" id="password" placeholder="••••••••" className=" border bg-transparent border-gray-800 text-white sm:text-sm rounded-lg focus:ring-primary-800 focus:border-primary-800 block w-full p-2.5" required />
                </div>
                <div>
                    <label htmlFor="conf-password" className="block mb-2 text-sm font-medium text-white">Confirm Password</label>
                    <input type="password" name="conf-password" id="conf-password" placeholder="••••••••" className=" border bg-transparent border-gray-800 text-white sm:text-sm rounded-lg focus:ring-primary-800 focus:border-primary-800 block w-full p-2.5" required />
                </div>
                <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign Up</button>
                <p className="text-sm font-light text-gray-400">
                    Already have an account? <a href="/login" className="font-medium text-primary-500 hover:underline">Sign in</a>
                </p>
            </form>
        </div>
    </div>

                
                {/* <div className='mt-32 border border-gray-700 rounded-2xl mx-auto w-11/12 sm:max-w-11/12 md:max-w-xl lg:max-w-xl bg-gray-50 mb-8'>
                    {/* form head */}

                  {/*  <div className="mx-auto w-full sm:max-w-11/12 md:max-w-md lg:max-w-md">
                        <div className='flex flex-row justify-center'>
                            <h1 className='px-4 py-4 w-full text-2xl font-semibold text-center'>Student Registration</h1>
                        </div>
                        <hr className='mx-auto border-gray-300 w-11/12' />
                    </div>


                    {/* form body */}

                 {/*   <div className='mt-10 mx-auto w-full sm:max-w-11/12 md:max-w-md lg:max-w-md px-6 pb-8 bg-green-400'>
                        <form className='space-y-4 md:space-y-6' onSubmit={handleSignUp}>
                                <div>
                                    <label className="block mb-2 text-md font-medium text-black">Your Name</label>
                                        <input type="text" onChange={(e)=>{
                                                setName(e.target.value)
                                        }}
                                        name="name" id="name" className="bg-transparent border border-gray-800 text-white sm:text-sm rounded-lg focus:ring-primary-800 focus:border-primary-800 block w-full p-2.5" placeholder="Name" required />
                                </div>
                        </form>
                    </div>


                </div>
             */}

            
           
             
        </main>
        
                    
        //             <form className="space-y-4 md:space-y-6" onSubmit={handleSignUp}>
        //                     <div>
        //                         <label htmlFor="name" className="block mb-2 text-sm font-medium text-white">Your Name</label>
        //                         <input type="text" onChange={(e)=>{
        //                                 setName(e.target.value)
        //                         }}
        //                         name="name" id="name" className="bg-transparent border border-gray-800 text-white sm:text-sm rounded-lg focus:ring-primary-800 focus:border-primary-800 block w-full p-2.5" placeholder="Name" required />
        //                     </div>


        //                     <div>
        //                         <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Your Email</label>
        //                         <input
        //                         onChange={(e)=>{
        //                             setEmail(e.target.value)
        //                              }}
        //                         type="email" name="email" id="email" className=" bg-transparent border border-gray-800 text-white sm:text-sm rounded-lg focus:ring-primary-800 focus:border-primary-800 block w-full p-2.5" placeholder="eon@anokha.amrita.edu" required />
        //                     </div>


        //                     <div>
        //                         <label htmlFor="phone" className="block mb-2 text-sm font-medium text-white">Phone Number</label>
        //                         <input
        //                         onChange={(e)=>{
        //                             setPhone(e.target.value)
        //                     }}
        //                         type="text" name="phone" id="phone" className="bg-transparent border border-gray-800 text-white sm:text-sm rounded-lg focus:ring-primary-800 focus:border-primary-800 block w-full p-2.5" placeholder="+91 99999 99999" required />
        //                     </div>


        //                     <div className="flex items-center mb-4">
        //                         <input type="checkbox" name="amrita-student" id="amrita-student" className="mr-2" />
        //                         <label htmlFor="amrita-student" className="text-sm font-medium text-white">Amrita Student?</label>
        //                     </div>


        //                     <div>
        //                         <label htmlFor="college" className="block mb-2 text-sm font-medium text-white">College Name</label>
        //                         <input 
        //                         onChange={(e)=>{
        //                             setCollegeName(e.target.value)
        //                         }}
        //                     type="text" name="college" id="college" className="bg-transparent border border-gray-800 text-white sm:text-sm rounded-lg focus:ring-primary-800 focus:border-primary-800 block w-full p-2.5" placeholder="Amrita School of Engineering, Coimbatore" />
        //                     </div>


        //                     <div>
        //                         <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">Password</label>
        //                         <input 
        //                         onChange={(e)=>{
        //                                 setPassword(e.target.value)
        //                         }}
        //                         type="password" name="password" id="password" placeholder="••••••••" className=" border bg-transparent border-gray-800 text-white sm:text-sm rounded-lg focus:ring-primary-800 focus:border-primary-800 block w-full p-2.5" required />
        //                     </div>


        //                     <div>
        //                         <label htmlFor="conf-password" className="block mb-2 text-sm font-medium text-white">Confirm Password</label>
        //                         <input 
        //                         onChange={(e)=>{
        //                                 setConfirmPassword(e.target.value)
        //                         }}
        //                         type="password" name="conf-password" id="conf-password" placeholder="••••••••" className=" border bg-transparent border-gray-800 text-white sm:text-sm rounded-lg focus:ring-primary-800 focus:border-primary-800 block w-full p-2.5" required />
        //                     </div>

        //                     <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign Up</button>
        //                     <p className="text-sm font-light text-gray-400">
        //                         Already have an account? <a href="/login" className="font-medium text-primary-500 hover:underline">Sign in</a>
        //                     </p>
        //         </form>
        //     </div>
        // </div>
                
        //     </div>
        // </div>
        //     </div>
        // </main>
    )
}
