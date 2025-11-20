import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      {/* Tailwind CSS Test */}
      <div className="p-6 bg-purple-600 text-white text-3xl rounded-lg shadow-lg mb-8">
        ✅ Tailwind CSS is working!
      </div>
      
   
    </div>
  );
}

export default App
