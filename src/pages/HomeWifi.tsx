import React, { useEffect } from 'react';
import { Divider, Card } from 'antd';
import type { TableColumnsType } from 'antd';
import { TopCarousel } from '../components/TopCarousel';
import AOS from "aos";
import "aos/dist/aos.css";
import { numberWithCommas } from '../utilities/NumberWithCommas';

const TopImages = [
  'https://res.cloudinary.com/deefrqkiu/image/upload/v1710327681/homome-wifi-viettel-cho-ca-nha-1024x625_lhevd3.jpg',
]

export function HomeWifi() {

  useEffect(() => {
    AOS.init();
  }, [])

  interface DataType {
    name: string;
    noithanh: number|string;
    ngoaithanh: number|string;
    cactinh: number;
  }

  const data:DataType[] = [
    {name: 'Home / 100Mbps', noithanh: 'Không áp dụng', ngoaithanh: 'Không áp dụng', cactinh: 165000},
    {name: 'Sun1 / 150Mbps', noithanh: 220000, ngoaithanh: 180000 , cactinh: 180000},
    {name: 'Sun2 / 250Mbps', noithanh: 245000, ngoaithanh: 229000, cactinh: 229000},
    {name: 'Sun3 / 300Mbps', noithanh: 330000, ngoaithanh: 279000, cactinh: 279000},
    {name: 'Star1 / 150Mbps ', noithanh: 255000, ngoaithanh: 210000, cactinh: 210000},
    {name: 'Star2 / 250Mbps ', noithanh: 289000, ngoaithanh: 245000, cactinh: 245000},
    {name: 'Star3 / 300Mbps ', noithanh: 359000, ngoaithanh: 299000, cactinh: 299000}
  ];

  const columns: TableColumnsType<DataType> = [
    {
      title: 'Gói cước / Tốc độ',
      width: 20,
      dataIndex: 'name',
      key: 'name',
      fixed: 'left',
    },
    {
      title: <div className="text-center">Giá nội thành</div>,
      width: 20,
      dataIndex: 'noithanh',
      key: 'noithanh',
      render: (price) => {
        if(price != 'Không áp dụng'){
          return(
            <div className="text-center">{numberWithCommas(price)}</div>
          )
        }
        else{
          return(
            <div className="text-center">Không áp dụng</div>
          )
        }
      }
    },
    {
      title: <div className="text-center">Giá ngoại thành</div>,
      width: 20,
      dataIndex: 'ngoaithanh',
      key: 'ngoaithanh',
      render: (price) => {
        if(price != 'Không áp dụng'){
          return(
            <div className="text-center">{numberWithCommas(price)}</div>
          )
        }
        else{
          return(
            <div className="text-center">Không áp dụng</div>
          )
        }
      }
    },
    {
      title: <div className="text-center">Giá các tỉnh</div>,
      width: 20,
      dataIndex: 'cactinh',
      key: 'cactinh',
      render: (price) => {
        if(price != 'Không áp dụng'){
          return(
            <div className="text-center">{numberWithCommas(price)}</div>
          )
        }
        else{
          return(
            <div className="text-center">Không áp dụng</div>
          )
        }
      }
    },
  ];

  return (
    <div className="md:mx-[20px] space-y-20">
      <TopCarousel images={TopImages}/>

      <h2 className="text-center text-[#FF0000]">home wifi</h2>

      <div data-aos="zoom-in-up" className="flex h-[220px] space-x-6 md:justify-evenly md:space-x-0 mt-10 overflow-x-scroll">
        <Card hoverable={true} className="w-[400px] min-w-[300px] h-[200px] text-center border-solid border-[1px] border-[#CCC]">
          <div className="text-[#FF0000] font-bold text-[25px] mb-2">Ngoại thành</div>
          <div className="h-[80px]">Áp dụng cho: Quận 5, 6, 8, 9, 12, Bình Tân, Gò Vấp, Củ Chi, Hóc Môn, Bình Chánh, Nhà Bè, Cần Giờ, Thủ Đức</div>
          <div><a href="#prices-by-location" className="bg-[#FF0000] text-[#FFF] p-2 rounded-[10px] hover:bg-[#FFF] hover:text-[#FF0000] border-[1px] border-solid">Xem bảng giá</a></div>
        </Card>
        <Card hoverable={true} className="w-[400px] min-w-[300px] h-[200px] text-center border-solid border-[1px] border-[#CCC]">
          <div className="text-[#FF0000] font-bold text-[25px] mb-2">Nội thành</div>
          <div className="h-[80px]">Áp dụng cho: Quận 1, 2, 3, 4, 7, 10, 11,Tân Bình, Tân Phú, Bình Thạnh, Phú Nhuận</div>
          <div><a href="#prices-by-location" className="bg-[#FF0000] text-[#FFF] p-2 rounded-[10px] hover:bg-[#FFF] hover:text-[#FF0000] border-[1px] border-solid">Xem bảng giá</a></div>
        </Card>
        <Card hoverable={true} className="w-[400px] min-w-[300px] h-[200px] text-center border-solid border-[1px] border-[#CCC]">
          <div className="text-[#FF0000] font-bold text-[25px] mb-2">Các tỉnh</div>
          <div className="h-[80px]">Áp dụng cho tất cả các tỉnh thành toàn quốc (ngoại trừ TP.HCM và Hà Nội)</div>
          <div><a href="#prices-by-location" className="bg-[#FF0000] text-[#FFF] p-2 rounded-[10px] hover:bg-[#FFF] hover:text-[#FF0000] border-[1px] border-solid">Xem bảng giá</a></div>
        </Card>
      </div>

      <div>
        <h2 className="text-center">giới thiệu mess wifi viettel</h2>
        <div className="text-justify">
          Mesh Wifi Viettel là một thiết bị Wifi Mesh của Viettel có tên đầy đủ là Home Wifi Viettel H196A. Home Wifi H196A hỗ trợ Wi-Fi AC1200 với băng tần kép, khi cắm cục Mesh Wifi sẽ tạo ra 02 mạng wifi. Một băng tần 2.4GHz cho tốc độ tối đa lên đến 300Mbps và một băng tần 5GHz cho tốc độ tối đa lên đến 867Mbps.
          Bạn có thể sử dụng được cho diện tích rộng mà không cần phải lo lắng bị cản trở bởi các tầng và vật cản vật lý.
        </div>
      </div>

      <div data-aos="zoom-in" className="flex md:justify-center space-x-10 whitespace-nowrap overflow-x-scroll">
        <div className="w-[350px] h-[580px] border-solid border-[1px] border-[#CCC] space-y-4">
          <div className="w-full h-fit">
            <img src="https://res.cloudinary.com/deefrqkiu/image/upload/v1710328659/home-wifi-star1_yih7dc.png"/>
          </div>
          <div className="text-[#555555] px-2 space-y-4">
            <div className="font-bold">Ưu điểm của gói cước:</div>
            <div>- Tốc độ: 150Mbps</div>
            <div>- 7 - 20 thiết bị truy cập cùng lúc</div>
            <div>- Miễn phí lắp đặt</div>
            <div>- Đóng trước 6 tháng được tặng 1 tháng</div>
            <div>- Đóng trước 12 tháng được tặng 2 tháng</div>
            <div>- Miễn phí 1 thiết bị Mess wifi</div>
            <Divider />
            <div className="space-y-2">
              <div>Giá ngoại thành: &nbsp;<span className="font-bold text-[25px] text-[#FF0000]">210,000</span></div>
              <div>Giá nội thành: &nbsp;<span className="font-bold text-[25px] text-[#FF0000]">255,000</span></div>
            </div>
          </div>
        </div>
        <div className="w-[350px] h-[580px] border-solid border-[1px] border-[#CCC] space-y-4">
          <div className="w-full h-fit">
            <img src="https://res.cloudinary.com/deefrqkiu/image/upload/v1710328672/star2-2-1_jonzgy.webp"/>
          </div>
          <div className="text-[#555555] px-2 space-y-4">
            <div className="font-bold">Ưu điểm của gói cước:</div>
            <div>- Tốc độ: 250Mbps</div>
            <div>- 10 - 35 thiết bị truy cập cùng lúc</div>
            <div>- Miễn phí lắp đặt</div>
            <div>- Đóng trước 6 tháng được tặng 1 tháng</div>
            <div>- Đóng trước 12 tháng được tặng 2 tháng</div>
            <div>- Miễn phí 2 thiết bị Mess wifi</div>
            <Divider />
            <div className="space-y-2">
              <div>Giá ngoại thành: &nbsp;<span className="font-bold text-[25px] text-[#FF0000]">245,000</span></div>
              <div>Giá nội thành: &nbsp;<span className="font-bold text-[25px] text-[#FF0000]">289,000</span></div>
            </div>
          </div>
        </div>
        <div className="w-[350px] h-[580px] border-solid border-[1px] border-[#CCC] space-y-4">
          <div className="w-full h-fit">
            <img src="https://res.cloudinary.com/deefrqkiu/image/upload/v1710328732/star3-2-1_zcrehw.webp"/>
          </div>
          <div className="text-[#555555] px-2 space-y-4">
            <div className="font-bold">Ưu điểm của gói cước:</div>
            <div>- Tốc độ: 300Mbps</div>
            <div>- 20 - 50 thiết bị truy cập cùng lúc</div>
            <div>- Miễn phí lắp đặt</div>
            <div>- Đóng trước 6 tháng được tặng 1 tháng</div>
            <div>- Đóng trước 12 tháng được tặng 2 tháng</div>
            <div className="whitespace-normal">- Miễn phí 3 thiết bị Mess wifi + Modem wifi 2 băng tần </div>
            <Divider />
            <div className="space-y-2">
              <div>Giá ngoại thành: &nbsp;<span className="font-bold text-[25px] text-[#FF0000]">299,000</span></div>
              <div>Giá nội thành: &nbsp;<span className="font-bold text-[25px] text-[#FF0000]">359,000</span></div>
            </div>
          </div>
        </div>
      </div>


      <div data-aos="fade-down" className="h-[500px]">
        <img src="https://res.cloudinary.com/deefrqkiu/image/upload/v1710327598/home-wifi-2021-v1_kgfhko.jpg"/>
      </div>

    </div>
  )
}
