import { FloatButton } from 'antd';
import { PhoneOutlined } from '@ant-design/icons';

export function FloatContactButton() {
  return (
    <FloatButton icon={<PhoneOutlined />} type="primary" onClick={() => window.location.href="tel:0982828098"} />
  );
}
