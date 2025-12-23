import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './pages/Navbar.jsx';
import { Button } from '@/components/ui/button.jsx';
import { Input } from './components/ui/input.jsx';
import { Textarea } from './components/ui/textarea.jsx';
import axios from 'axios';

function App() {
  const [titile, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const addTodoHandler = async () => {
    try {
      const res = await axios.post("http://localhost:3000/api/todo/create", { titile }, { headers: { "Content-Type": "application/json" }, withCredentials: true });
    

    } catch (error) {
      console.log(error);

    }

    return (
      <div>
        <Navbar />
        <div className='flex items-center gap-5 mt-5'>

          <input
            value={titile}
            onChange={(e) => setTitle(e.target.value)}
            type="text" placeholder='Add new todo ...' className='w-1/4' />
          <Button onClick={addTodoHandler}>Add Todo</Button>

        </div>
        <Textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Add description..."
          className='mt-5 w-1/2'
        />

      </div>




    )
  }
}

  export default App
