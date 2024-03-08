import './App.css';
import { useState } from 'react'
import AgoraUIKit from "agora-react-uikit";
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Courses from './components/Courses/Courses';
import Schedule from './components/Schedule/Schedule';
import Home from './pages/Home/Home';
import Landing from './pages/Landing/Landing';
import '@mantine/core/styles.css';
import BrowseCourse from './components/BrowseCourses/BrowseCourse';


function App() {
  const [videoCall, setVideoCall] = useState(true);
  const rtcProps = {
    appId: 'cc7bb6b0165a4ee8855a212baa58e50c',
    channel: 'TriNit',
    token: '007eJxTYJj4mIMzX8Noftzdbkmns/n26s2v5tV0mxx6kZQ6pfpL9gcFhuRk86QksyQDQzPTRJPUVAsLU9NEI0OjpMREU4tUU4PksvzXqQ2BjAxbndMYGKEQxGdjCCnK9MssYWAAAJb8ILM=' // use null or skip if using app in testing mode
  };
  const callbacks = {
    EndCall: () => setVideoCall(false),
  };
  return videoCall ?(
    <div style={{display: 'flex', width: '100vw', height: '100vh'}}>
      <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks} />
    </div>
  ) : (
    <div className="h-[100vh] w-[100vw]">
      <button onClick={() => setVideoCall(true)}>Start Call</button>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Schedule />} />
          <Route path="myschedule" element={<Schedule />} />
          <Route path="mycourses" element={<Courses />} />
          <Route path="courses" element={<BrowseCourse />} />
        </Route>
      </Routes>
    </div>
  );
    
}

export default App;
