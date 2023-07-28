
import { useEffect, useState } from 'react';
import SectionTittle from './../../../components/Section/SectionTittle';
import NameItem from '../../../Shered/NameItem/NameItem';






const Instructor = () => {
    const [category, setCategory] = useState([]);
   
    useEffect(() =>{
        fetch('category.json')
        .then(res => res.json())
        .then(data => setCategory(data))

    }
    )

    return (
        <div>
            <SectionTittle heading="Our Top Instructor">

            </SectionTittle>
            <div className='grid md:grid-cols-3 gap-4'>
                {
                    category.map(item => <NameItem 
                    key={item._id}
                    item={item}
                    >

                    </NameItem>)
                }
            </div>
        </div>
    );
};

export default Instructor;