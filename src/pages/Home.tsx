import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TopCarousel } from '../components/TopCarousel';
import AOS from "aos";
import "aos/dist/aos.css";

const TopImages = [
  'https://res.cloudinary.com/deefrqkiu/image/upload/v1710246865/lap-internet-tang-4-thang-cuoc_blzgmt.jpg',
  'https://res.cloudinary.com/deefrqkiu/image/upload/v1710247186/0a2efc5760366a0a5e0440a5b229eb57527fcb49_gup3el.jpg'
]

export function Home() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className="md:mx-[20px]">
      <TopCarousel images={TopImages}/>

      <div className="space-y-36 mt-10">
        <div data-aos="fade-up" data-aos-delay="100" className="flex flex-col">
          <h2 className="text-center">combo internet + truyền hình viettel</h2>
          <div className="flex justify-center space-x-10 overflow-x-scroll">
            <div className="w-[250px] h-[350px] border-solid border-[1px] border-[#CCC] text-center space-y-4">
              <div className="w-[250px] h-fit">
                <img src="https://viettel-telecom.net/wp-content/uploads/2022/05/truyen-hinh-viettel-tv360-app.jpg"/>
              </div>
              <div className="font-bold">Truyền hình sử dụng APP</div>
              <div className="text-[#555555]">Gói combo internet+ truyền hình Viettel sử dụng app</div>
              <div><Link to="/" className="bg-[#FF0000] text-[#FFF] p-2 rounded-[10px] hover:bg-[#FFF] hover:text-[#FF0000] border-[1px] border-solid">Tìm hiểu thêm</Link></div>
            </div>
            <div className="w-[250px] h-[350px] border-solid border-[1px] border-[#CCC] text-center space-y-4">
              <div className="w-[250px] h-fit">
                <img src="https://viettel-telecom.net/wp-content/uploads/2022/05/truyen-hinh-viettel-tv360-box-ott.jpg"/>
              </div>
              <div className="font-bold">Truyền hình sử dụng BOX</div>
              <div className="text-[#555555]">Gói combo internet+ truyền hình Viettel sử dụng box</div>
              <div><Link to="/" className="bg-[#FF0000] text-[#FFF] p-2 rounded-[10px] hover:bg-[#FFF] hover:text-[#FF0000] border-[1px] border-solid">Tìm hiểu thêm</Link></div>
            </div>
            <div className="w-[250px] h-[350px] border-solid border-[1px] border-[#CCC] text-center space-y-4">
              <div className="w-[250px] h-fit">
                <img src="https://dangkyinternetviettel.com.vn/wp-content/uploads/2021/07/app-tv360-2.jpg"/>
              </div>
              <div className="font-bold">Truyền hình kết hợp K+</div>
              <div className="text-[#555555]">Gói combo internet+ truyền hình Viettel kết hợp K+</div>
              <div><Link to="/" className="bg-[#FF0000] text-[#FFF] p-2 rounded-[10px] hover:bg-[#FFF] hover:text-[#FF0000] border-[1px] border-solid">Tìm hiểu thêm</Link></div>
            </div>
          </div>
        </div>

        <div data-aos="fade-up-right" className="flex flex-col-reverse items-center justify-evenly md:space-x-14 md:flex-row">
          <div className="text-center">
            <h2>lắp internet viettel- gói đơn lẻ</h2>
            <p>
              Dùng cho khách hàng chỉ sử dụng mạng wifi, mạng LAN, không có nhu cầu sử dụng truyền hình.
              Đa dạng các gói cước ngoại thành, nội thành và các tỉnh trên toàn quốc.
            </p>
            <div className="mt-6"><Link to="/internet-viettel" className="bg-[#FF0000] text-[#FFF] p-2 rounded-[10px] hover:bg-[#FFF] hover:text-[#FF0000] border-[1px] border-solid">Tìm hiểu thêm</Link></div>
          </div>
          <div className="flex min-w-[60%] mb-10 md:w-[600px] md:mb-0">
            <img className="-rotate-[20deg] z-10" src="https://res.cloudinary.com/deefrqkiu/image/upload/v1710289852/z2748132764331_5c47575cc1bb342c4c4dcb8cf857d762_fxnafh.jpg" />
            <img className="z-20" src="https://res.cloudinary.com/deefrqkiu/image/upload/v1710290207/internet-viettel-2022_pzarhr.jpg"/>
            <img className="rotate-[20deg] z-10" src="https://res.cloudinary.com/deefrqkiu/image/upload/v1710289851/z2748124803347_9adf0b070227968c33e7866bcbe0cd78_m86hze.jpg" />
          </div>
        </div>

        <div data-aos="zoom-in-down" className="flex flex-col items-center md:space-x-10 md:flex-row">
          <div className="w-full h-fit min-w-[60%]">
            <img src="https://netviettelhcm.vn/wp-content/uploads/2021/09/homome-wifi-viettel-cho-ca-nha-1024x625.jpg"/>
          </div>
          <div className="text-center">
            <div className="space-y-4">
              <h2 className="text-center">home wifi - giải pháp wifi toàn diện</h2>
              <p>Home Wifi của Viettel là bộ thiết bị khuếch đại tín hiệu wifi, được kết nối với nhau một cách thống nhất và có khả năng phủ sóng wifi đến toàn bộ góc trong căn nhà, quán cafe.</p>
            </div>
            <div className="mt-6"><Link to="/" className="bg-[#FF0000] text-[#FFF] p-2 rounded-[10px] hover:bg-[#FFF] hover:text-[#FF0000] border-[1px] border-solid">Tìm hiểu thêm</Link></div>
          </div>
        </div>

      </div>
    </div>
  )
}
