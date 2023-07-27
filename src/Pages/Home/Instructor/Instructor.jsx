
import { useEffect, useState } from 'react';
import SectionTittle from './../../../components/Section/SectionTittle';
import NameItem from '../../../Shered/NameItem/NameItem';






const Instructor = () => {
    const [category, setCategory] = useState([]);
   
    useEffect(() =>{
        fetch('category.json')
        .then(res => res.json())
        .then(data => {
            const nameItems = data.filter(item => item.category === 'name');
            setCategory(nameItems)
        })

    }
    )

    return (
        <div>
            <SectionTittle heading="Our Top Instructor">

            </SectionTittle>
            <div>
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