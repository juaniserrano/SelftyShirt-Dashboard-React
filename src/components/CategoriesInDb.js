import React from 'react';

function CategoriesInDb() {
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
                                <div className="card-body">Remeras</div>
                                <div className="card-subtitle mb-2 text-muted">Cantidad: 30</div>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-4">
                            <div className="card bg-dark text-white shadow text-center">
                                <div className="card-body">Pantalones</div>
                                <div className="card-subtitle mb-2 text-muted">Cantidad: 40</div>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-4">
                            <div className="card bg-dark text-white shadow text-center">
                                <div className="card-body">Gorras</div>
                                <div className="card-subtitle mb-2 text-muted">Cantidad: 70</div>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-4">
                            <div className="card bg-dark text-white shadow text-center">
                                <div className="card-body">Medias</div>
                                <div className="card-subtitle mb-2 text-muted">Cantidad: 45</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CategoriesInDb;
