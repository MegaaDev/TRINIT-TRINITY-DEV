import Calender from '../Calender/Calender';
import Edit from './../../../public/edit.png';
import Done from './../../../public/done.png';
import { useState } from 'react';

const Courses = () => {
  const [description, setDescription] = useState(
    "Learn German in this intensive crash course  to help you quickly grasp the fundamentals of the language. Whether you're a beginner or have some prior knowledge, this course will cover essential vocabulary,grammar, and conversational skills"
  );
  const DefaultDesc = (props) => {
    if (mode == 'Edit') {
      return (
        <>
          {' '}
          <div className="w-full flex justify-between">
            {' '}
            <p className="text-[#686868] text-lg">Description: </p>
            <div className="h-[30px] w-[30px]" onClick={() => setMode('Idle')}>
              <img src={Done} alt="" />
            </div>
          </div>
          <textarea
            className="text-[#aaaaaa] font-medium text-lg h-[200px]"
            defaultValue={description}
            onChange={(e) => {
              props.setDescription(e.target.value);
            }}
          />
        </>
      );
    } else {
      return (
        <>
          <div className="w-full flex justify-between">
            {' '}
            <p className="text-[#686868] text-lg">Description: </p>
            <div className="h-[30px] w-[30px]" onClick={() => setMode('Edit')}>
              <img src={Edit} alt="" />
            </div>
          </div>
          <p className="text-[#aaaaaa] font-medium text-lg h-[200px] overflow-y-scroll">
            {description}
          </p>
        </>
      );
    }
  };
  const [mode, setMode] = useState('idle');
  const Slots = () => {
    return (
      <div className="w-full">
        <div className="w-full h-[80px] flex flex-row justify-between items-center gap-10 pr-5">
          <div className="w-[300px] h-[70%] bg-[#7272f1] rounded-[10px] flex items-center justify-center font-semibold  text-xl text-[white]">
            7:00AM - 8:00AM
          </div>

          <div className="w-[300px] flex flex-row gap-4">
            Student:{' '}
            <div className="flex flex-row gap-1">
              <span>
                <div className="h-[20px] w-[20px] rounded-[50%] flex flex-row bg-[#7272f1]"></div>
              </span>{' '}
              <p>Megaa</p>
            </div>
          </div>
          <div className="h-[50px] w-[200px] rounded-[5px] flex flex-row justify-center items-center text-white font-semibold cursor-pointer bg-[#000000]">
            Go live
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="h-full w-full p-10 flex flex-col gap-5 ">
      <div className="w-full h-[50%] flex flex-row justify-between ">
        <div
          className=" w-[48%] h-full flex flex-col text-3xl gap-5 font-semibold p-6"
          style={{ boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.08)' }}
        >
          <p>German Crash Course</p>
          <div className="w-[200px] h-[50px] rounded-md cursor-pointer bg-customBlue font-semibold flex justify-center items-center text-white text-lg">
            Start Live Session
          </div>

          <DefaultDesc setDescription={setDescription} />
        </div>
        <div
          className="w-[50%] flex flex-row justify-center rounded-lg  "
          style={{ boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.08)' }}
        >
          <Calender />
        </div>
      </div>
      <div
        className="h-[50%] w-full p-10 overflow-hidden"
        style={{ boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.08)' }}
      >
        <div className="h-full w-full overflow-y-scroll">
          {' '}
          <Slots />
          <Slots />
          <Slots />
          <Slots />
          <Slots />
          <Slots />
          <Slots />
        </div>
      </div>
    </div>
  );
};
export default Courses;
