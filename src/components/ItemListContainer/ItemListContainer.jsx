import './itemListContainer.css';

const ItemListContainer = ({props}) => {
    return(
        <div className="container-flex vh-100 main">
            <h1 className='text-center pt-2'>{props}</h1>
        </div>
    );
};

export default ItemListContainer;