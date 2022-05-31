import React from 'react';
import imagenFondo from '../assets/images/test-img.jpg';

function LastProductInDb() {
    return (
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800 text-center">Ultimo producto agregado</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 25 + 'rem'}} src={imagenFondo} alt=" Star Wars - Mandalorian " />
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa citationem ratione aperiam voluptatum non corporis ratione aperiam voluptatum quae dolorem culpa ratione aperiam voluptatum?</p>
                    <a className="btn btn-danger d-flex w-50 justify-content-center" target="_blank" rel="nofollow" href="/">
                        Ver detalles del producto
                    </a>
                </div>
            </div>
        </div>
    );
}

export default LastProductInDb;
