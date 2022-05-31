import React from 'react';
import SmallCard from './SmallCard';

/*  Cada set de datos es un objeto literal */

/* <!-- Products in DB --> */

let productsInDB = {
    title: 'Cantidad de productos',
    color: 'primary',
    cuantity: '120',
    icon: 'fa-solid fa-shirt',
};

/* <!-- Total users --> */

let totalUsers = {
    title: ' Cantidad de usuarios',
    color: 'success',
    cuantity: '630',
    icon: 'fa-user-friends',
};

/* <!-- Price quantity --> */

let priceQuantity = {
    title: 'Precio total de productos',
    color: 'warning',
    cuantity: '$1.000.000',
    icon: 'fa-dollar-sign',
};

let cartProps = [productsInDB, totalUsers, priceQuantity];

function ContentRowProducts() {
    return (
        <div className="row">
            {cartProps.map((product, i) => {
                return <SmallCard {...product} key={i} />;
            })}
        </div>
    );
}

export default ContentRowProducts;
