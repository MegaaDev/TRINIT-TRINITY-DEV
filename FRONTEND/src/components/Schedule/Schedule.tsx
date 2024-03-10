import { useEffect, useState } from 'react';
import { UserContext } from '../../Context/UserContextProvider';
import { useContext } from 'react';
import axios from 'axios';
type Dday = {
  day: string;
  active: string;
  setActive: (active: string) => void;
};
const days = ['SUN', 'MON', 'TUE', 'WED', 'THURS', 'FRI', 'SAT'];
const currentDate = new Date();
const currentDay = days[currentDate.getDay()] || '';
const Day = (props: Dday) => {
  const [selectedDay, setSelectedDay] = useState('');
  return (
    <div>
      {' '}
      <div
        className={`h-[80px] w-[80px] bg-[white] shadow-lg flex justify-center items-center text-center relative rounded-xl ${
          props.active == props.day ? 'border-[3px] border-[#7272f1]' : ''
        } transition-all`}
        style={{ boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.08)' }}
        onClick={() => {
          props.setActive(props.day);
        }}
      >
        {props.day}
        <br />

        <div
          className={`absolute bottom-2 text-[#757575] font-light text-sm ${
            currentDay === props.day ? 'block' : 'hidden'
          }`}
        >
          Today
        </div>
      </div>
    </div>
  );
};

const Slots = () => {
  return (
    <div className="w-full">
      <div className="w-full h-[80px] flex flex-row justify-between items-center gap-10">
        <div className="w-[300px] h-[70%] bg-[#7272f1] rounded-[10px] flex items-center justify-center font-semibold  text-xl text-[white]">
          7:00AM - 8:00AM
        </div>
        <div className="font-medium text-xl text-[#000000]">
          German in 90 days
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
      </div>
    </div>
  );
};

const Schedule = () => {
  const { user } = useContext(UserContext);
  const storedUser = localStorage.getItem('user');
  const parsedUser = storedUser ? JSON.parse(storedUser) : null;
  const currentUser = parsedUser || user;
  // console.log(currentUser);
  const [array, setArray] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/courses/${currentUser.user._id}`)
      .then((response) => {
        // Handle the response data here
        console.log(response.data);
      })
      .catch((error) => {
        // Handle any errors here
        console.error(error);
      });
  }, []);
  const [active, setActive] = useState(currentDay);
  const dayMap: { [key: string]: number } = {
    SUN: 0,
    MON: 1,
    TUE: 2,
    WED: 3,
    THURS: 4,
    FRI: 5,
    SAT: 6,
  };
  const decodeMap: { [key: string]: string } = {
    SUN: 'SUNDAY',
    MON: 'MONDAY',
    TUE: 'TUESDAY',
    WED: 'WEDNESDAY',
    THURS: 'THURSDAY',
    FRI: 'FRIDAY',
    SAT: 'SATURDAY',
  };
  return (
    <div className="h-full max-h-[100%] w-full p-10 overflow-hidden">
      <div className="h-[100%] w-full flex flex-col gap-10 ">
        {' '}
        <div className="h-[30%] w-full flex flex-row items-center gap-10">
          {' '}
          <div
            className="rounded-[10px] w-[55%] min-w-[900px] h-[140px] bg-white flex items-center justify-left flex-wrap px-[40px] gap-[30px] cursor-pointer"
            style={{ boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.08)' }}
          >
            {days.map((day, i) => {
              return (
                <Day day={day} key={i} active={active} setActive={setActive} />
              );
            })}
          </div>
          <div
            className="rounded-[10px] w-[40%] h-[140px] bg-white flex items-center justify-left flex-wrap p-[40px] gap-[30px] cursor-pointer"
            style={{ boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.08)' }}
          >
            <p>Slots Today: 5</p>
            <p>Slots Done: 3</p>
          </div>
        </div>
        <div
          className="h-[70%] w-[100%] px-[40px] rounded-2xl"
          style={{ boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.08)' }}
        >
          <div className="h-full w-full flex flex-col py-10 ">
            <p className="font-bold text-2xl text-[#5a5a5a] mb-8">
              {decodeMap[active]}
            </p>
            <div className="w-full overflow-y-scroll">
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
      </div>
    </div>
  );
};
export default Schedule;
