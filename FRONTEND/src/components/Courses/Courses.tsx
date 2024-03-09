import TutorCard from '../TutorCard/TutorCard';
const Courses = () => {
  return (
    <div className="h-full w-full p-10 flex flex-col gap-5">
      <div className=" w-full h-[100px] flex flex-row items-center text-3xl justify-between font-semibold">
        <p>My courses</p>
        <div className="w-[200px] h-[50px] cursor-pointer text-white flex justify-center items-center rounded-lg bg-customBlue text-lg">
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
