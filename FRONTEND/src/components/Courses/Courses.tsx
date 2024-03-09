import { useNavigate } from 'react-router-dom';
import TutorCard from '../TutorCard/TutorCard';
const Courses = () => {
  const navigate = useNavigate();
  return (
    <div className="h-full w-full p-10 flex flex-col gap-5">
      <div className=" w-full h-[100px] flex flex-row items-center text-3xl justify-between font-semibold">
        <p>My courses</p>
        <div
          onClick={() => {
            navigate('/createcourse');
          }}
          className="h-[50px] w-[180px] rounded-md bg-customBlue text-lg flex justify-center items-center font-semibold text-white"
        >
          Create a course
        </div>
      </div>
      <div className="h-[calc(100%-100px)] w-full flex flex-wrap overflow-y-scroll gap-10">
        <TutorCard />
        <TutorCard />
        <TutorCard />
        <TutorCard />
        <TutorCard />
        <TutorCard />
        <TutorCard />
      </div>
    </div>
  );
};
export default Courses;
