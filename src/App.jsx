import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import HomePage from "./components/Pages/HomePage/HomePage";
import VideoUpload from "./components/Pages/VideoUpload/VideoUpload";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:videoId" element={<HomePage />} />
          <Route path="/upload" element={<VideoUpload />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
