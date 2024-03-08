import { Outlet } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div className="h-[100vh] w-[100vw] overflow-hidden">
      <div className="h-[100px] w-[100%] bg-[#000000]"></div>
      <Outlet />
    </div>
  );
};
export default Navbar;
