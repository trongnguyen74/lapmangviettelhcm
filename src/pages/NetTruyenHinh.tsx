import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, Table, Statistic } from 'antd';
import type { TableColumnsType } from 'antd';
import { TopCarousel } from '../components/TopCarousel';
import AOS from "aos";
import "aos/dist/aos.css";
import { numberWithCommas } from '../utilities/NumberWithCommas';

const TopImages = [
  'https://res.cloudinary.com/deefrqkiu/image/upload/v1710303780/87_ab_fveupk.jpg',
]

export function NetTruyenHinh() {

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
    {name: 'Home / 100Mbps', noithanh: 'Không áp dụng', ngoaithanh: '225000', cactinh: 225000},
    {name: 'Sun1 / 150Mbps', noithanh: 280000, ngoaithanh: 240000 , cactinh: 240000},
    {name: 'Sun2 / 250Mbps', noithanh: 305000, ngoaithanh: 289000, cactinh: 289000},
    {name: 'Sun3 / 300Mbps', noithanh: 390000, ngoaithanh: 339000, cactinh: 339000},
    {name: 'Star1 / 150Mbps ', noithanh: 315000, ngoaithanh: 270000, cactinh: 270000},
    {name: 'Star2 / 250Mbps ', noithanh: 349000, ngoaithanh: 305000, cactinh: 305000},
    {name: 'Star3 / 300Mbps ', noithanh: 419000, ngoaithanh: 359000, cactinh: 359000}
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

      <h2 className="text-center text-[#FF0000]">net+ truyền hình</h2>

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
          <div>Tặng kèm Androi TV box </div>
          <div>Đóng hàng tháng: Phí lắp đặt 300.000đ + Tặng Modem Wifi</div>
          <div>Đóng trước <span className="text-[25px] text-[#FF0000]">6</span> tháng: Phí lắp đặt 300.000đ + Tặng Modem Wifi + Tặng 1 tháng cước</div>
          <div>Đóng trước <span className="text-[25px] text-[#FF0000]">12</span> tháng: Phí lắp đặt 300.000đ + Tặng Modem Wifi + Tặng 2 tháng cước</div>
          <div className="space-y-4">
            <div className="text-[#FF0000]">Đặc biệt đối với gói STAR:</div>
            <div>Gói STAR1 được trang bị 1 modem wifi 5GHz + 01 cục Home Wifi</div>
            <div>Gói STAR2 được trang bị 1 modem wifi 5GHz + 02 cục Home Wifi</div>
            <div>Gói STAR3 được trang bị 1 modem wifi 5GHz + 03 cục Home Wifi</div>
          </div>
        </div>
      </div>

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

      <div data-aos="slide-up" className="flex flex-col items-center justify-center md:space-x-10 md:flex-row">
        <div className="w-full md:w-[50%] h-fit min-w-[40%]">
          <img src="https://res.cloudinary.com/deefrqkiu/image/upload/v1710314798/9_11_v5k9ff.png"/>
        </div>
        <div className="w-full">
          <h2 className="text-center">vì sao nên lắp đặt truyền hình viettel?</h2>
          <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <Card bordered={false}>
              <Statistic
                title="Kênh truyền hình"
                value={'150 kênh'}
                valueStyle={{ color: '#3f8600' }}
              />
            </Card>
            <Card bordered={false}>
              <Statistic
                title="Xem lại"
                value={'7 ngày'}
                valueStyle={{ color: '#3f8600' }}
              />
            </Card>
            <Card bordered={false}>
              <Statistic
                title="Tua lại"
                value={'2 giờ'}
                valueStyle={{ color: '#3f8600' }}
              />
            </Card>
            <Card bordered={false}>
              <Statistic
                title="1 tài khoản"
                value={'2 thiết bị'}
                valueStyle={{ color: '#3f8600' }}
              />
            </Card>
          </div>
        </div>
      </div>

    </div>
  )
}
