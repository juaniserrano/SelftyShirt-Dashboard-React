import React, {useEffect, useState} from 'react';
import SmallCard from './SmallCard';

/*  Cada set de datos es un objeto literal */

/* <!-- Products in DB --> */

function ContentRowProducts() {
    const [productsCount, setProductsCount] = useState(0);
    const [usersCount, setUsersCount] = useState(0);
    const [productsTotalPrice, setProductsTotalPrice] = useState(0);

    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        useGrouping: true,
    });

    useEffect(() => {
        fetch('http://localhost:3000/api/products').then((response) =>
            response.json().then((data) => {
                setProductsCount(data.data.count);
                let totalPrice = 0;
                data.data.products.forEach((product) => (totalPrice += product.price * product.stock));
                setProductsTotalPrice(formatter.format(totalPrice));
            })
        );
        fetch('http://localhost:3000/api/users').then((response) =>
            response.json().then((data) => {
                setUsersCount(data.count);
            })
        );
    }, []);

    // useEffect(() => {
    //     fetch('http://localhost:3000/api/users').then((response) =>
    //         response.json().then((data) => {
    //             setUsersCount(data.data.count);
    //         })
    //     );
    // }, []);

    let productsInDB = {
        title: 'Cantidad de productos',
        color: 'primary',
        cuantity: productsCount,
        icon: 'fa-solid fa-shirt',
    };

    /* <!-- Total users --> */

    let totalUsers = {
        title: ' Cantidad de usuarios',
        color: 'success',
        cuantity: usersCount,
        icon: 'fa-user-friends',
    };

    /* <!-- Price quantity --> */

    let priceQuantity = {
        title: 'Precio total de productos',
        color: 'warning',
        cuantity: productsTotalPrice,
        icon: 'fa-dollar-sign',
    };

    let cartProps = [productsInDB, totalUsers, priceQuantity];

    return (
        <div className="row">
            {cartProps.map((product, i) => {
                return <SmallCard {...product} key={i} />;
            })}
        </div>
    );
}

export default ContentRowProducts;
