import { useState } from "react";

 function LoginPage() {
    const [isSignUp, setIsSignUp] = useState(false);

    return (
        <div className="flex items-center justify-center min-h-screen bg-green-200">
            <div className="bg-white p-6 rounded-2xl shadow-xl w-96">
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
                                className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
                    )}

                    {/* Email */}
                    <div className="mt-4">
                        <label className="block text-gray-600">Email</label>
                        <input
                            type="email"
                            className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    {/* Password */}
                    <div className="mt-4">
                        <label className="block text-gray-600">Password</label>
                        <input
                            type="password"
                            className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        className="w-full bg-blue-600 text-white py-2 rounded-md mt-6 hover:bg-blue-800 transition"
                    >
                        Submit
                    </button>
                </form>

                {/* Toggle Sign In / Sign Up */}
                <p className="text-center text-gray-600 mt-4">
                    {isSignUp ? "Already have an account?" : "New here?"}
                    <button
                        className="text-blue-600 font-bold hover:underline ml-1"
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