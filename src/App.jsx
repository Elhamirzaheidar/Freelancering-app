import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Auth from "./pages/Auth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import Completeprofile from "./pages/Complete-profile";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import AppLayout from "./ui/AppLayout";
import OwnerDashboard from "./pages/OwnerDashboard";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/complete-profile" element={<Completeprofile />} />
          <Route path="/owner" element={<AppLayout/>}>
            <Route index element={<Navigate to="dashboard" replace />}/>
            <Route path="dashboard" element={<OwnerDashboard/>}/>
               <Route path="projects" element={<Projects/>}/>
                  <Route path="projects/:id" element={<Project/>}/>
          </Route>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
     
    </QueryClientProvider>
  );
}

export default App;
