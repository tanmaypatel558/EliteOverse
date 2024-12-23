import './App.css';
import Footer from './Footer';
// import bathroom from './images/bathroom.jpg';

function Home() {
    return (
        <>
    {/*Main Navigation */}
    {/* <Header/> */}
     {/* Main Navigation  End */}

    {/* /*main page section 1 start --> */}
    <section className="hero-section">
        <div className="hero-content">
            <h1>Join Our Team</h1>
            <p>Be part of our innovative tile manufacturing journey</p>
        </div>
    </section>

    {/* /*About Section --> */}
    <div className="container">
        <div className="about-section">
            <div className="about-image">
                {/* <img src="company-facade.jpg" alt="Inspire Overseas Building"/> */}
                {/* <img src={bathroom} alt="Inspire Overseas Building"/> */}
                <img src={require('./images/Home1.jpg')} alt="Inspire Overseas Building"/>
                {/* <img src={require('./src/Images/bathroom.jpg')} alt="Inspire Overseas Building"/> */}
            </div>
            <div className="about-content">
                <h2>About Inspire Overseas</h2>
                <p>Inspire Overseas has accumulated over 9 years of experience in the tiles manufacturing and exporting industry. Specializing in ceramic tiles and porcelain slabs, we have developed a reputation for our defined and highly specialized customization work.</p>
                <p>Our journey over nearly a decade is marked by a dedication to excellence and a drive to inspire others. We combine technical expertise with innovation to make a significant impact in the industry.</p>
                <p>Join us in our mission to revolutionize the tile manufacturing industry!</p>
            </div>
        </div>
    </div>

    {/* /*Stats Section --> */}
    <section className="stats-section">
        <div className="container">
            <div className="stats-grid">
                <div className="stat-item">
                    <h3>9+</h3>
                    <p>Years of Excellence</p>
                </div>
                <div className="stat-item">
                    <h3>100+</h3>
                    <p>Team Members</p>
                </div>
                <div className="stat-item">
                    <h3>50+</h3>
                    <p>Global Partners</p>
                </div>
                <div className="stat-item">
                    <h3>1000+</h3>
                    <p>Projects Completed</p>
                </div>
            </div>
        </div>
    </section>

    {/* /*CTA Section --> */}
    <section className="cta-section">
        <div className="container">
            <div className="cta-content">
                <h2>COME WORK WITH US!</h2>
                <p>Join our dynamic team and be part of our success story</p>
                <a href="#" className="cta-btn">View Open Positions</a>
            </div>
        </div>
    </section>
    {/* /*Main page section 1 End--> */}
    <Footer/>
     </>
    );
  }
  export default Home;