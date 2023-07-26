import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import silder1 from '../../../assets/photo/silder1.jfif'
import silder2 from '../../../assets/photo/silder2.jfif'
import silder3 from '../../../assets/photo/silder3.jfif'
import silder4 from '../../../assets/photo/silder4.jfif'
import silder5 from '../../../assets/photo/silder5.jfif'
import silder6 from '../../../assets/photo/silder6.jfif'
import silder7 from '../../../assets/photo/silder7.jfif'
import silder8 from '../../../assets/photo/silder8.jfif'
import silder9 from '../../../assets/photo/silder9.jfif'
import SectionTittle from '../../../components/Section/SectionTittle';


const Category = () => {
    return (
        <section>
        <SectionTittle heading={"Popular Classes Section"}
        subHeading={"We are here for you....."}
        >
           
        </SectionTittle>
            <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide>
            <img src={silder1} />
            <h3 className='text-3xl uppercase mt-12 text-center'>Language Learning</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={silder2} />
            <h3 className='text-3xl uppercase mt-12 text-center'>Foreign Language</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={silder3} />
            <h3 className='text-3xl uppercase mt-12 text-center'>British Language</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={silder4} />
            <h3 className='text-3xl uppercase mt-12 text-center'>Arabic Language</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={silder5} />
            <h3 className='text-3xl uppercase mt-12 text-center'>Chinese Language</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={silder6} />
            <h3 className='text-3xl uppercase mt-12 text-center'>Danish Language</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={silder7} />
            <h3 className='text-3xl uppercase mt-12 text-center'>French Language</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={silder8} />
            <h3 className='text-3xl uppercase mt-12 text-center'>German Language</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={silder9} />
            <h3 className='text-3xl uppercase mt-12 text-center'>Korean Language</h3>
        </SwiperSlide>
    
      </Swiper>
        </section>
    );
};

export default Category;