import { Link } from "react-router-dom";



const AllClass = ({item}) => {

    const {img, name, instructor, price,available_seats} = item;


 

    return (
        <div>
            
     <div className="card w-96 bg-base-100 shadow-xl">
    <figure>
    <img src={img} alt="" />
    </figure>
    <div className="card-body flex flex-col items-center">
    <h2 className="card-title">{name}</h2>
    <h2 className="card-title">{instructor}</h2>
    <h2 className="card-title">{price}</h2>
    <h2 className="card-title">{available_seats}</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <div className="card-actions text-center">
      <Link to='/dashboard/payment'><button className="btn btn-primary">Book Now</button></Link>
    </div>
    </div>
     </div>
        
        </div>
    );
};

export default AllClass;