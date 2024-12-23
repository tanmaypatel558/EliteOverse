import Footer from "./Footer";

function About() {
    return(
        <>
        <section className="hero-section">
        <div className="hero-content">
            <h1>Our Legacy in Stone</h1>
            <p>Crafting Excellence in Global Marble Since 1985</p>
        </div>
    </section>

    {/* <!-- About Section --> */}
    <section className="container">
        <div className="about-grid">
            <div className="about-text">
                <h2>About Our Company</h2>
                <p>With over three decades of experience in the global marble industry, we have established ourselves as a leading provider of premium marble and natural stone products worldwide. Our journey began in the historic quarries of Italy and has expanded to operations across multiple continents.</p>
                <br/>
                <p>We take pride in combining traditional craftsmanship with modern technology to deliver exceptional quality marble products to our international clientele. Our extensive network of quarries and processing facilities ensures we can meet diverse project requirements while maintaining the highest standards of quality.</p>
            </div>
            <img  src={require('./images/About2.jpg')} alt="Marble Processing Facility" className="about-image"/>
        </div>
    </section>

    {/* <!-- Stats Section --> */}
    <section className="stats-section">
        <div className="container">
            <div className="stats-grid">
                <div className="stat-item">
                    <h3>35+</h3>
                    <p>Years of Experience</p>
                </div>
                <div className="stat-item">
                    <h3>50+</h3>
                    <p>Countries Served</p>
                </div>
                <div className="stat-item">
                    <h3>1000+</h3>
                    <p>Projects Completed</p>
                </div>
                <div className="stat-item">
                    <h3>25+</h3>
                    <p>Quarry Locations</p>
                </div>
            </div>
        </div>
    </section>

    {/* <!-- Values Section --> */}
    <section className="values-section">
        <div className="container">
            <h2>Our Core Values</h2>
            <div className="values-grid">
                <div className="value-card">
                    <i className="fas fa-gem"></i>
                    <h3>Quality</h3>
                    <p>We maintain the highest standards in marble selection and processing</p>
                </div>
                <div className="value-card">
                    <i className="fas fa-globe"></i>
                    <h3>Sustainability</h3>
                    <p>Committed to environmentally responsible quarrying practices</p>
                </div>
                <div className="value-card">
                    <i className="fas fa-handshake"></i>
                    <h3>Innovation</h3>
                    <p>Continuously improving our processes and technologies</p>
                </div>
            </div>
        </div>
    </section>
    <Footer/>
        </>
    )
}
export default About;