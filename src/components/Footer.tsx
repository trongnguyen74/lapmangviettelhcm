import { Link } from 'react-router-dom';
import { FacebookOutlined } from '@ant-design/icons';

export function Footer() {
  return (
    <section className="bg-[#787777] mt-10">
        <div className="max-w-screen-xl px-4 py-4 mx-auto space-y-6 overflow-hidden sm:px-6 lg:px-8 montserrat">
            <nav className="flex flex-wrap justify-center -mx-5 -my-2">
                <div className="px-5 py-2">
                    <Link to="/" className="text-base leading-6 text-[#FFF]">
                        Dịch vụ
                    </Link>
                </div>
                <div className="px-5 py-2">
                    <Link to="/" className="text-base leading-6 text-[#FFF]">
                        Giới thiệu
                    </Link>
                </div>
                <div className="px-5 py-2">
                    <Link to="/" className="text-base leading-6 text-[#FFF]">
                        Chính sách bảo mật
                    </Link>
                </div>
                <div className="px-5 py-2">
                    <Link to="/" className="text-base leading-6 text-[#FFF]">
                        Điều khoản & điều kiện
                    </Link>
                </div>
            </nav>
            <div className="flex justify-center mt-8 space-x-6">
              <button onClick={() => window.location.href=''} className="bg-white h-10 w-10 items-center justify-center align-center rounded-full border-solid text-[16px] cursor-pointer" type="button">
                <FacebookOutlined/>
              </button>
            </div>
            <div className="flex justify-center">
              <div className="w-[100px] h-fit">
                <img src="https://images.dmca.com/Badges/dmca_protected_sml_120n.png?ID=fed4f9c4-0b33-4fa7-b7be-dea39988ecd1"/>
              </div>
            </div>
            <div className="text-center text-[#FFF] space-y-2 text-[12px]">
              <div>Địa chỉ: 285 Cách Mạng Tháng Tám, phường 12, quận 10, TP. Hồ Chí Minh</div>
              <div>Điện thoại liên hệ: 0982.82.80.98</div>
              <div>Giấy chứng nhận ĐKKD số 0100109106-122 do Sở Kế hoạch Đầu tư Thành phố Hồ Chí Minh cấp ngày 04/03/2022</div>
              <div>Copyright © <span>{new Date().getFullYear()}</span><span className="text-blueGray-500"> Viettel </span></div>
            </div>
        </div>
    </section>
  );
}
