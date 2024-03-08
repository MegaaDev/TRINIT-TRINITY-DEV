import { useState } from 'react';

type Dday = {
  day: string;
  active: string;
  setActive: (active: string) => void;
};
const days = ['MON', 'TUE', 'WED', 'THURS', 'FRI', 'SAT', 'SUN'];
const currentDate = new Date();
const currentDay = days[currentDate.getDay() - 1];
const Day = (props: Dday) => {
  return (
    <div>
      {' '}
      <div
        className={`h-[100px] w-[100px] bg-[white] shadow-lg flex justify-center items-center text-center relative rounded-xl ${
          props.active == props.day ? 'border-[6px] border-[#7272f1]' : ''
        } transition-all`}
        style={{ boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.08)' }}
        onClick={() => {
          props.setActive(props.day);
        }}
      >
        {props.day}
        <br />

        <div
          className={`absolute bottom-4 text-[#757575] font-light text-sm ${
            currentDay === props.day ? 'block' : 'hidden'
          }`}
        >
          Today
        </div>
      </div>
    </div>
  );
};

const Schedule = () => {
  const [active, setActive] = useState(currentDay);
  return (
    <div className="h-full w-full p-10">
      <div className=" w-full h-[30%] flex items-center justify-left flex-wrap px-[40px] gap-[60px] cursor-pointer">
        {days.map((day, i) => {
          return (
            <Day day={day} key={i} active={active} setActive={setActive} />
          );
        })}
      </div>
      <div
        className="h-[70%] w-full px-[40px]"
        style={{ boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.08)' }}
      >
        <div className="h-full w-fullrounded-3xl"></div>
      </div>
    </div>
  );
};
export default Schedule;
