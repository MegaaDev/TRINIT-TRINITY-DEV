import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Courses from './components/Courses/Courses';
import Schedule from './components/Schedule/Schedule';
import '@mantine/core/styles.css';
import BrowseCourse from './components/BrowseCourses/BrowseCourse';
import Video from './pages/Video/Video';
import ManageCourse from './components/ManageCourse/ManageCourse';

function App() {
  return (
    <div className="h-[100vh] w-[100vw]">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Schedule />} />
          <Route path="myschedule" element={<Schedule />} />
          <Route path="mycourses" element={<Courses />} />
          <Route path="mycourses/:id" element={<ManageCourse />} />
          <Route path="courses" element={<BrowseCourse />} />
        </Route>
        <Route path="/video" element={<Video />}></Route>
      </Routes>
    </div>
  );
}

export default App;
