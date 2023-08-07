import { Link } from "react-router-dom";


const NameItem = ({item}) => {
    const {img, name} = item;
    return (
        <div>
        <div className="card w-96 bg-base-100 shadow-xl">
    <figure>
    <img src={img} alt="" />
    </figure>
  <div className="card-body flex flex-col items-center">
    <h2 className="card-title">{name}</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <div className="card-actions text-center">
     <Link to='/login'> <button className="btn btn-primary">Book Now</button></Link>
    </div>
  </div>
     </div>
            
        </div>
    );
};

export default NameItem;