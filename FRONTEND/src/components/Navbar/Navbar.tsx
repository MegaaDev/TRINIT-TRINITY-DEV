import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

export const Navbar = () => {
  const currentUrl = window.location.href.toString();
  const urlParts = currentUrl.split('/');
  const extractedString = urlParts[3];
  console.log(extractedString);

  const [current, setCurrent] = useState('');
  useEffect(() => {
    if (extractedString == 'myschedule') {
      setCurrent('My Schedule');
    }
    if (extractedString == 'mycourses') {
      setCurrent('Manage Courses');
    }
  }, [extractedString]);

  return (
    <div className="h-[100vh] w-[100vw] overflow-hidden flex flex-col">
      <div
        className="h-[100px] w-[100%] bg-[#ffffff] shadow-xl px-10 flex justify-between items-center z-10"
        style={{ boxShadow: '0px 8px 50px rgba(0, 0, 0, 0.05)' }}
      >
        <h1 className="font-extrabold text-2xl text-[#7272f1]">
          LINGUACONNECT
        </h1>

        <div className="w-[40px] h-[40px] rounded-[50%] bg-[#7272f1]"></div>
      </div>
      <div className="h-full w-full flex flex-row">
        <div className="h-[100%] w-[15%] min-w-[250px] bg-[#ffffff] px-10 pt-[40px] pb-[80px] text-left">
          <h1 className="font-bold text-2xl mb-5">Dashboard</h1>
          <div className="h-full w-full flex flex-col justify-between text-left">
            <div className="w-full h-fit flex flex-col gap-3">
              <div
                className={`h-[40px] w-full flex items-center cursor-pointer text-[#838383] font-medium ${
                  current == 'My Schedule' ? 'text-[#7272f1]' : 'text-[#838383]'
                }`}
                onClick={(e) => {
                  window.location.href = '/myschedule';
                  const target = e.target as HTMLElement;
                  console.log(target.innerHTML);
                  setCurrent(`${target.innerHTML}`);
                }}
              >
                My Schedule
              </div>
              <div
                className={`h-[40px] w-full flex items-center cursor-pointer text-[#838383] font-medium ${
                  current == 'Manage Courses'
                    ? 'text-[#7272f1]'
                    : 'text-[#838383]'
                }`}
                onClick={(e) => {
                  window.location.href = '/mycourses';
                  const target = e.target as HTMLElement;
                  setCurrent(`${target.innerHTML}`);
                }}
              >
                Manage Courses
              </div>
            </div>
            <div className="w-full h-fit  flex flex-col gap-5">
              <div className="h-[40px] w-full flex items-center cursor-pointer   text-[#838383] font-medium">
                Help and Support
              </div>
            </div>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};
export default Navbar;
