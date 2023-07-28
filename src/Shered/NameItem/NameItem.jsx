

const NameItem = ({item}) => {
    const {img, name} = item;
    return (
        <div>
        <div className="card w-96 bg-base-100 shadow-xl">
    <figure>
    <img src={img} alt="" />
    </figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores incidunt suscipit commodi similique nostrum ipsum repudiandae, architecto veniam minus quae, hic dolore recusandae natus deleniti quaerat exercitationem praesentium, eius pariatur.</p>
    <div className="card-actions text-center">
      <button className="btn btn-primary">Book Now</button>
    </div>
  </div>
     </div>
            
        </div>
    );
};

export default NameItem;