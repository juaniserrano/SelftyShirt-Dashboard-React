import React, {useState, useEffect} from 'react';

function CategoriesInDb() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/products').then((response) =>
            response.json().then((data) => {
                setCategories(data.data.countByCategory);
            })
        );
    }, []);

    return (
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Panel de categorías</h5>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-lg-6 mb-4">
                            <div className="card bg-dark text-white shadow text-center">
                                <div className="card-body">{Object.keys(categories)[0]}</div>
                                <div className="card-subtitle mb-2 text-muted"> Cantidad: {Object.values(categories)[0]}</div>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-4">
                            <div className="card bg-dark text-white shadow text-center">
                                <div className="card-body">{Object.keys(categories)[1]}</div>
                                <div className="card-subtitle mb-2 text-muted">Cantidad: {Object.values(categories)[1]}</div>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-4">
                            <div className="card bg-dark text-white shadow text-center">
                                <div className="card-body">{Object.keys(categories)[2]}</div>
                                <div className="card-subtitle mb-2 text-muted">Cantidad: {Object.values(categories)[2]}</div>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-4">
                            <div className="card bg-dark text-white shadow text-center">
                                <div className="card-body">{Object.keys(categories)[3]}</div>
                                <div className="card-subtitle mb-2 text-muted">Cantidad: {Object.values(categories)[3]}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CategoriesInDb;
