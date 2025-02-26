

function LandingPage() {
    return (
        <>
            <nav className="flex justify-between items-center p-6 bg-white drop-shadow-lg">
                <h2 className="text-2xl font-bold text-red-600">CanteenHub</h2>
                <div className="flex space-x-6">
                    <a href="#" className="text-gray-700 hover:text-red-600 text-lg font-medium">Home</a>
                    <a href="#" className="text-gray-700 hover:text-red-600 text-lg font-medium">Order</a>
                    <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition">Login</button>
                </div>
            </nav>
            <div className="relative w-full h-screen flex flex-col items-center justify-center text-center text-white bg-cover bg-center"
                 style={{ backgroundImage: "url('https://tableo.com/wp-content/uploads/Restaurant-Stock-Images-e1699951587809.webp')" }}>
                <div className="bg-black bg-opacity-50 p-8 rounded-xl shadow-2xl">
                    <h1 className="text-4xl font-bold">Welcome to CanteenHub</h1>
                    <p className="mt-4 text-lg">Order your favorite meals online and avoid long queues!</p>
                    <button className="mt-6 px-6 py-3 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-600 transition">
                        Order Now
                    </button>
                </div>
            </div>
        </>
    );
}

export default LandingPage;
