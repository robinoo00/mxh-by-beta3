import {Carousel} from 'antd-mobile'
import ban1 from '../images/banner1.jpg';
import ban2 from '../images/banner2.jpg';
import ban3 from '../images/banner3.jpg';

const banner = [ban1,ban2,ban3]

const Banner = () => {
    return (
        <div>
            <Carousel
                autoplay={false}
                infinite
                beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                afterChange={index => console.log('slide to', index)}
            >
                {banner.map(val => (
                    <a
                        key={val}
                        href="javascript:;"
                        style={{ display: 'inline-block', width: '100%' }}
                    >
                        <img
                            src={val}
                            alt=""
                            style={{ width: '100%', verticalAlign: 'top',height:'1.13rem' }}
                            onLoad={() => {
                                // fire window resize event to change height
                                window.dispatchEvent(new Event('resize'));
                            }}
                        />
                    </a>
                ))}
            </Carousel>
        </div>
    );
};

export default Banner

