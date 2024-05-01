
import './App.css'
import {Routes,Route} from 'react-router-dom';
import Auth from './pages/Auth';
import {QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {Toaster} from "react-hot-toast";
import Completeprofile from './pages/Complete-profile';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
const queryClient=new QueryClient();

function App() {

  return (
<QueryClientProvider client={queryClient}>
  <Toaster />
     <div className='container xl:max-w-screen-xl'>
    <Routes>
<Route path="/auth" element={<Auth/>}/>
<Route path="/complete-profile" element={<Completeprofile/>}/>
<Route path="/" element={<Home/>}/>
<Route path="*" element={<NotFound/>}/>
    </Routes></div> 
</QueryClientProvider>
  )
}

export default App
