import { useEffect } from "react";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import AllClass from "../AllClass/AllClass";


const Class = () => {

const [newclass, setNewClass] = useState([]);


useEffect(() =>{
     fetch('http://localhost:5000/classes')
    .then(res => res.json())
    .then(data => setNewClass(data))

  }
   )

    return (
        <div>
           <Helmet>
            <title>Come To Learn || Class</title>
           </Helmet>
            <h2 className="text-4xl text-center">My classes now</h2>
            <div className="grid grid-cols-3 gap-5">
            {
                    newclass.map(item => <AllClass
                    
                    key={item._id}
                    item={item}
                    >

                    </AllClass>
                  
                  )
                }
            </div>
           
        </div>
    );
};

export default Class;