import React from 'react'
import data from './data'
import Product from './components/Product'

function App(props) {
    return (
        <div className="grid-container">
            <header className="row">
                <div>
                    <a className="brand" href="/"> La "Y" </a>
                </div>
                <div>
                    <a href="/cart">Cesta</a>
                    <a href="/signin">Loguearse</a>
                </div>
            </header>
            <main>
                <div className="row center">
                    {
                        data.products.map((product) => (
                            <Product key={product._id} product={product} />
                        ))
                    }
                </div>
            </main>
            <footer className="row center">
                All right reserved
            </footer>
        </div>
    );
}

export default App;
