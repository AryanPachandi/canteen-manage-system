import photo from "./assets/login.jpg"
import { useState } from "react";


 function LoginPage() {
    const [isSignUp, setIsSignUp] = useState(false);

    return (
        <div className="flex items-center justify-center min-h-screen bg-green-200 relative w-full h-screen  bg-cover bg-center"
             style={{ backgroundImage: `url(${photo})` }}
        >
            <div className="bg-[#EADDCA] p-6 rounded-2xl shadow-xl w-96">
                {/* Title */}
                <h2 className="text-2xl font-bold text-center text-gray-700">
                    {isSignUp ? "Sign Up" : "Sign In"}
                </h2>

                {/* Form */}
                <form className="mt-4">
                    {/* Full Name (Only in Sign Up) */}
                    {isSignUp && (
                        <div className="mt-4">
                            <label className="block text-gray-600">Full Name</label>
                            <input
                                type="text"
                                className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#321E1E]"
                            />
                        </div>
                    )}

                    {/* Email */}
                    <div className="mt-4">
                        <label className="block text-gray-600">Email</label>
                        <input
                            type="email"
                            className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#321E1E]"
                        />
                    </div>

                    {/* Password */}
                    <div className="mt-4">
                        <label className="block text-gray-600">Password</label>
                        <input
                            type="password"
                            className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#321E1E]"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        className="w-full bg-[#AB886D] text-white py-2 rounded-md mt-6 hover:bg-[#481E14] transition"
                    >
                        Submit
                    </button>
                </form>

                {/* Toggle Sign In / Sign Up */}
                <p className="text-center text-gray-600 mt-4">
                    {isSignUp ? "Already have an account?" : "New here?"}
                    <button
                        className="text-[#6D2932] font-bold hover:underline ml-1"
                        onClick={() => setIsSignUp(!isSignUp)}
                    >
                        {isSignUp ? "Sign In" : "Sign Up"}
                    </button>
                </p>
            </div>
        </div>
    );
}


export default LoginPage;