import { Carousel } from 'antd';

interface Props {
  images: string[];
}

export function TopCarousel(props: Props) {
  const { images } =  props;
  return (
    <Carousel>
      {
        images.map((url:string) => {
          return(
            <div>
              <div className="w-full h-fit">
                <img className="w-full h-full object-contain" src={url} />
              </div>
            </div>
          )
        })
      }
    </Carousel>
  );
}
