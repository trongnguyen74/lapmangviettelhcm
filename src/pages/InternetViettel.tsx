import React, { useEffect } from 'react';
import { Card, Table, Timeline  } from 'antd';
import type { TableColumnsType } from 'antd';
import { TopCarousel } from '../components/TopCarousel';
import AOS from "aos";
import "aos/dist/aos.css";
import { numberWithCommas } from '../utilities/NumberWithCommas';

const TopImages = [
  'https://res.cloudinary.com/deefrqkiu/image/upload/v1710246865/lap-internet-tang-4-thang-cuoc_blzgmt.jpg',
]

export function InternetViettel() {

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

      <h2 className="text-center text-[#FF0000]">lắp internet viettel - gói đơn lẻ</h2>

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

      <div id="prices-by-location" className="text-center">
        <h2>bảng giá các gói cước theo khu vực</h2>
        <Table columns={columns} dataSource={data} scroll={{ x: 600 }} pagination={false}/>
      </div>

      <div data-aos="fade-up" className="text-center">
        <h2>khuyến mãi khi lắp đặt</h2>
        <div className="space-y-4">
          <div>Đóng hàng tháng: Phí hòa mạng 300.000đ + Tặng Modem Wifi</div>
          <div>Đóng trước <span className="text-[25px] text-[#FF0000]">6</span> tháng: Phí hòa mạng 300.000đ + Tặng Modem Wifi + Tặng 1 tháng cước</div>
          <div>Đóng trước <span className="text-[25px] text-[#FF0000]">12</span> tháng: Phí hòa mạng 300.000đ + Tặng Modem Wifi + Tặng 2 tháng cước</div>
          <div className="space-y-4">
            <div className="text-[#FF0000]">Đặc biệt đối với gói STAR:</div>
            <div>Gói STAR1 được trang bị 1 modem wifi 5GHz + 01 cục Home Wifi</div>
            <div>Gói STAR2 được trang bị 1 modem wifi 5GHz + 02 cục Home Wifi</div>
            <div>Gói STAR3 được trang bị 1 modem wifi 5GHz + 03 cục Home Wifi</div>
          </div>
        </div>
      </div>

      <div data-aos="fade-down">
        <h2 className="text-center">hướng dẫn lựa chọn gói cước</h2>
        <div className="flex h-[500px] space-x-6 md:justify-evenly md:space-x-0 overflow-x-scroll">
          <Card hoverable={true} className="w-[400px] min-w-[300px] h-[420px] md:h-[480px] border-solid border-[1px] border-[#CCC] text-center space-y-2 pb-4">
            <div className="w-full h-fit">
              <img src="https://res.cloudinary.com/deefrqkiu/image/upload/v1710289851/z2748124803347_9adf0b070227968c33e7866bcbe0cd78_m86hze.jpg"/>
            </div>
            <div className="font-bold text-[24px] text-[#FF0000]">Gói SUN</div>
            <div className="text-[#555555] px-2">Các gói cước internet dành cho cá nhân, hộ gia đình</div>
          </Card>
          <Card hoverable={true} className="w-[400px] min-w-[300px] h-[420px] md:h-[480px] border-solid border-[1px] border-[#CCC] text-center space-y-2 pb-4">
            <div className="w-full h-fit">
              <img src="https://res.cloudinary.com/deefrqkiu/image/upload/v1710290207/internet-viettel-2022_pzarhr.jpg"/>
            </div>
            <div className="font-bold text-[24px] text-[#FF0000]">Gói STAR - GÓI HOME</div>
            <div className="text-[#555555] px-2">Gói cước internet cho nhà lầu, quán cafe, quán ăn hoặc kinh doanh nhỏ,…</div>
          </Card>
        </div>
      </div>

      <div data-aos="fade-up">
        <h2 className="text-center">quy trình đăng ký lắp đặt internet cáp quang viettel tại TP.HCM</h2>
        <Timeline
          items={[
            {
              children: 'Khách hàng có nhu cầu tham khảo các gói cước phía trên.',
            },
            {
              children: 'Gọi cho Hotline 0982.82.80.98 để được nhân viên Viettel tư vấn miễn phí và đưa ra các phương án, gói cước phù hợp cho quý khách hàng.',
            },
            {
              children: 'Sau khi khách hàng cung cấp địa chỉ cho Hotline, nhân viên Viettel sẽ tiến hành khảo sát và thông báo kết quả cho khách hàng ngay. Khi hạ tầng đáp ứng được và khách hàng đồng ý đăng ký dịch vụ, nhân viên Viettel sẽ ký hợp đồng tận nhà hoặc cơ quan của khách hàng.',
            },
            {
              children: 'Sau khi ký hợp đồng xong, Viettel sẽ triển khai lắp đặt nhanh nhất cho khách hàng.',
            },
          ]}
        />
      </div>

    </div>
  )
}
