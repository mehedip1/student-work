import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Instructor from "../Instructor/Instructor";
import { Helmet } from 'react-helmet-async';


const Home = () => {
    return (
        <div>
          <Helmet>
        <title>Come To Learn | Home </title>
       
         </Helmet>
         <Banner></Banner>
         <Category></Category>
         <Instructor></Instructor>

        
        </div>
    );
};

export default Home;