import "./App.css";
import SideBar from "./components/SideBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Ticktick } from "./components/Ticktick";
import SaunaPage from "./components/SaunaPage";
import Calendar from "./components/Calendar";
import SwiperCore, { Autoplay } from "swiper";

function App() {
  const queryClient = new QueryClient();
  SwiperCore.use([Autoplay]);

  return (
    <div className="relative top-0 h-screen">
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SideBar />}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="sukkerbiten" element={<SaunaPage />} />
              <Route path="calendar" element={<Calendar />} />
              <Route path="ticktick" element={<Ticktick />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
