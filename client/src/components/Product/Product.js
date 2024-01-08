import React from 'react';
// import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import cardType from '../../models/types/cardType';

const Product = ({card}) => {
    return (
        <>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-blue-900" to="/product-details">
                <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                    <div className="m-2 text-justify text-sm">
                    <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={card.img} />
                        <h2 className="font-semibold my-4 text-xl text-center">{card.title}</h2>
                        <h3 className="font-semibold my-4 text-2xl text-center">{card.price}$</h3>
                        <p className="text-md font-medium">
                            {card.description}
                        </p>
                    </div>
                </div>
            </HashLink>
        </>
    )
}

Product.propTypes = {
  card: cardType.isRequired,
//   onDelete: func.isRequired,
//   onLike: func.isRequired,
}

export default Product;