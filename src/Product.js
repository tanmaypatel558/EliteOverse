import './App.css';
import Footer from './Footer';
function Product() {
    return (
        <>
            <section className="hero-section">
                <div className="hero-content">
                    <h1>Our Products</h1>
                    <p>Crafting Excellence in Global Marble Since 1985</p>
                </div>
            </section>
            {/* <!-- products page division1  End--> */}
            <div className="container" >
                <div className="products-grid">
                    {/* <!-- Product Card 1 --> */}
                    <div className="product-card">
                        <div className="product-image">
                            <img  src={require('./images/Bathroom1.jpg')} alt="Calacatta Gold Marble" />
                            <span className="product-badge">Luxury</span>
                        </div>
                        <div className="product-info">
                            <h3 className="product-name">Bathroom Items</h3>
                            {/* <div className="price-row">
                                <span className="price">$280/m²</span>
                                <a href="#" className="view-details">View Details</a>
                            </div> */}
                        </div>
                    </div>
                    {/* <!-- Product Card 2 --> */}
                    <div className="product-card">
                        <div className="product-image">
                            <img  src={require('./images/Quartz-Stone-.00-1.jpg')} alt="Calacatta Gold Marble" />
                            <span className="product-badge">Luxury</span>
                        </div>
                        <div className="product-info">
                            <h3 className="product-name">Quartz Stone</h3>
                            {/* <div className="price-row">
                                <span className="price">$280/m²</span>
                                <a href="#" className="view-details">View Details</a>
                            </div> */}
                        </div>
                    </div>

                    {/* <!-- Product Card 3 --> */}
                    <div className="product-card">
                        <div className="product-image">
                            <img  src={require('./images/Double Charge.jpg')} alt="Calacatta Gold Marble" />
                            <span className="product-badge">Luxury</span>
                        </div>
                        <div className="product-info">
                            <h3 className="product-name">Double Charge</h3>

                            {/* <div className="price-row">
                                <span className="price">$280/m²</span>
                                <a href="#" className="view-details">View Details</a>
                            </div> */}
                        </div>
                    </div>

                    {/* <!-- Product Card 4 --> */}
                    <div className="product-card">
                        <div className="product-image">
                            <img  src={require('./images/Parking Style.jpg')} alt="Calacatta Gold Marble" />
                            <span className="product-badge">Luxury</span>
                        </div>
                        <div className="product-info">
                            <h3 className="product-name">Parking Tiles</h3>

                                {/* <div className="price-row">
                                <span className="price">$280/m²</span>
                                <a href="#" className="view-details">View Details</a>
                            </div> */}
                        </div>
                    </div>
                    {/* <!-- Product Card 5 --> */}
                    <div className="product-card">
                        <div className="product-image">
                            <img  src={require('./images/Full Body Tiles.jpg')} alt="Calacatta Gold Marble" />
                            <span className="product-badge">Luxury</span>
                        </div>
                        <div className="product-info">
                            <h3 className="product-name">Full Body Tiles</h3>

                            {/* <div className="price-row">
                                <span className="price">$280/m²</span>
                                <a href="#" className="view-details">View Details</a>
                            </div> */}
                        </div>
                    </div>

                    {/* <!-- Product Card 6 --> */}
                    <div className="product-card">
                        <div className="product-image">
                            <img  src={require('./images/GVTPGVT Tiles.jpg')} alt="Calacatta Gold Marble" />
                            <span className="product-badge">Luxury</span>
                        </div>
                        <div className="product-info">
                            <h3 className="product-name">GVT/PGVT Tiles</h3>
{/* 
                            <div className="price-row">
                                <span className="price">$280/m²</span>
                                <a href="#" className="view-details">View Details</a>
                            </div> */}
                        </div>
                    </div>

                    {/* <!-- Product Card 7 --> */}
                    <div className="product-card">
                        <div className="product-image">
                            <img  src={require('./images/Wall1.jpg')} alt="Calacatta Gold Marble" />
                            <span className="product-badge">Luxury</span>
                        </div>
                        <div className="product-info">
                            <h3 className="product-name">Wall Tiles</h3>

                            {/* <div className="price-row">
                                <span className="price">$280/m²</span>
                                <a href="#" className="view-details">View Details</a>
                            </div> */}
                        </div>
                    </div>

                    {/* <!-- Product Card 8 --> */}

                    <div className="product-card">
                        <div className="product-image">
                            <img  src={require('./images/Slab Tiles.jpg')} alt="Calacatta Gold Marble" />
                            <span className="product-badge">Luxury</span>
                        </div>
                        <div className="product-info">
                            <h3 className="product-name">Slab Tiles</h3>

                            {/* <div className="price-row">
                                <span className="price">$280/m²</span>
                                <a href="#" className="view-details">View Details</a>
                            </div> */}
                        </div>
                    </div>
                    {/* <!-- Product Card 9 --> */}
                    <div className="product-card">
                        <div className="product-image">
                            <img  src={require('./images/Porcelain Tiles.jpg')} alt="Calacatta Gold Marble" />
                            <span className="product-badge">Luxury</span>
                        </div>
                        <div className="product-info">
                            <h3 className="product-name">Porcelain Tiles</h3>

                            {/* <div className="price-row">
                                <span className="price">$280/m²</span>
                                <a href="#" className="view-details">View Details</a>
                            </div> */}
                        </div>
                    </div>

                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Product;