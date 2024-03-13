import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Drawer } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

export function Navbar() {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  return (
    <nav className="flex items-center justify-evenly sticky top-0 h-[80px] z-10 bg-[#FFF]" style={{boxShadow: '0 2px 4px 0 rgba(0,0,0,.1)'}}>
      <div className="absolute left-10 text-[25px] lg:hidden" onClick={() => setOpenDrawer(true)}>
        <MenuOutlined/>
      </div>
      <Link to="/" className="h-fit w-[150px]">
        <img className="w-full h-full object-contain" src="https://netviettel.net/wp-content/uploads/2021/09/Viettel_logo_2021.svg"/>
      </Link>
      <div className="hidden space-x-4 uppercase lg:flex lg:space-x-10 text-[14px]">
        <Link to="/internet-viettel" className="hover:text-[#ff9900]">internet viettel</Link>
        <Link to="/net-truyen-hinh" className="hover:text-[#ff9900]">net+ truyền hình</Link>
        <Link to="/home-wifi" className="hover:text-[#ff9900]">home wifi</Link>
        <Link to="/" className="hover:text-[#ff9900]">sim trả sau viettel</Link>
        <Link to="/" className="hover:text-[#ff9900]">home camera viettel</Link>
      </div>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)} placement="left" className="lg:hidden">
        <div className="flex flex-col items-center space-y-8 uppercase text-[16px]">
          <div className="h-fit w-[150px]">
            <img className="w-full h-full object-contain" src="https://netviettel.net/wp-content/uploads/2021/09/Viettel_logo_2021.svg"/>
          </div>
          <Link to="/internet-viettel">internet viettel</Link>
          <Link to="/net-truyen-hinh">net+ truyền hình</Link>
          <Link to="/home-wifi">home wifi</Link>
          <Link to="/">sim trả sau viettel</Link>
          <Link to="/">home camera viettel</Link>
          <div className="rounded-[20px] bg-[#FF0000] py-4 px-8 text-[#FFF]">
            0982.82.80.98
          </div>
        </div>
      </Drawer>
    </nav>
  )
}
