import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import './Banner.css'
import img1 from '../../../assets/photo/img1.jpg'
import img2 from '../../../assets/photo/img2.jpg'
import img3 from '../../../assets/photo/img3.jpg'
import img4 from '../../../assets/photo/img4.jpg'
import img5 from '../../../assets/photo/img5.jpg'
import img6 from '../../../assets/photo/img6.jpg'






const Banner = () => {
    return (
        <AwesomeSlider className='img-item'>
       <div >
       <img src={img3} />
       <h2 className='text-4xl text-center text-green-700 uppercase -mt-20'>Welcom my page</h2>
       </div>
        <div>
            <img src={img2} />
        </div>
        <div>
            <img src={img1} />
        </div>
        <div>
            <img src={img4} />
        </div>
        <div>
            <img src={img5} />
        </div>
        <div>
            <img src={img6} />
        </div>
        
        </AwesomeSlider>
    );
};

export default Banner;