

const NameItem = ({item}) => {
    const {img, name} = item;
    return (
        <div>
            <img src={img} alt="" />
            <div>
                <h2>{name}</h2>
            </div>
        </div>
    );
};

export default NameItem;