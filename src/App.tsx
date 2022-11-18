import "./App.css";
import SideBar from "./components/SideBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import { Weather } from "./components/Weather";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function App() {
  const queryClient = new QueryClient();

  return (
    <div className="relative top-0 h-screen">
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SideBar />}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="weather" element={<Weather />} />
              <Route
                path="maps"
                element={<h2 className="bg-grey-300">asd</h2>}
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
