import { RouterProvider } from "react-router-dom"
import { router } from "./Routes/Routes"
import{ Toaster } from 'react-hot-toast';
function App() {
  return (
    <div>
      <Toaster/>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
