import { useState } from "react";
import SectionTittle from "../../components/Section/SectionTittle";
import { useEffect } from "react";
import About from "./About";




const InstructorPage = () => {
    const [category, setCategory] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:5000/category')
        .then(res => res.json())
        .then(data => setCategory(data))

    }
    )
  
    return (
        <div>
            <SectionTittle heading="Come To Learn"
        subHeading="We are hare from your learning...">

        </SectionTittle>
        <div  className='grid md:grid-cols-3 gap-4'>
             {
                    category.map(item => <About
                      key={item._id}
                    item={item}
                    >

                    </About>)
                }
            </div>
        </div>
    );
};

export default InstructorPage;
