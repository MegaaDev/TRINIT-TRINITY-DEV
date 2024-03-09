import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Courses from './components/Courses/Courses';
import Schedule from './components/Schedule/Schedule';
import '@mantine/core/styles.css';
import BrowseCourse from './components/BrowseCourses/BrowseCourse';
import Video from './pages/Video/Video';
import ManageCourse from './components/ManageCourse/ManageCourse';
import Landing from './pages/Landing/Landing';
import Getstarted from './pages/Getstarted/Getstarted';
import TutorRegister from './pages/TutorRegister/TutorRegister';
import LearnerRegister from './pages/LearnerRegister/LearnerRegister';
import { ProfileProvider } from './pages/Profile/ProfileContext';
import Profile from './pages/Profile/Profile';

function App() {
  return (
    <div className="h-[100vh] w-[100vw]">
      <ProfileProvider>
        <Routes>
          <Route path="/landing" element={<Landing />} />
          <Route path="/getstarted" element={<Getstarted />} />
          <Route path="/tutorregister" element={<TutorRegister />} />
          <Route path="/learnerregister" element={<LearnerRegister />} />
          <Route path="/" element={<Navbar />}>
            <Route index element={<Schedule />} />
            <Route path="myschedule" element={<Schedule />} />
            <Route path="mycourses" element={<Courses />} />
            <Route path="mycourses/:id" element={<ManageCourse />} />
            <Route path="courses" element={<BrowseCourse />} />
            <Route path="myprofile" element={<Profile bio={"hello Pawan"} name={"Pawan Kumar"}/>} />
          </Route>
          <Route path="/video" element={<Video />} />
        </Routes>
      </ProfileProvider>
    </div>
  );
}

export default App;
