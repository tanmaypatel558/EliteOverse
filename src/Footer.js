import Swal from 'sweetalert2';
import './App.css';
import { useState } from 'react';
function Footer() {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "fdcf0109-c5f6-4e51-9524-c22e5b20ce75");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
            Swal.fire({
                title: "Success!",
                text: "Message Sent Successfully!!",
                icon: "success"
            });
            
            event.target.reset();
            setResult("");
        } else {
            console.log("Error", data);
        }
    };
    return (
        <>
            <footer class="footer">
                <div class="footer-content">
                    {/* <!-- About Section --> */}
                    <div class="footer-section">
                        <h3>About Us</h3>
                        <p>Leading manufacturer and exporter of premium quality tiles. With over 25 years of experience, we deliver excellence in every piece.</p>
                        <div class="social-links">
                            <a href="#"><i class="fab fa-facebook-f"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                            <a href="#"><i class="fab fa-linkedin-in"></i></a>
                            <a href="#"><i class="fab fa-instagram"></i></a>
                        </div>
                    </div>

                    {/* <!-- Quick Links --> */}
                    <div class="footer-section">
                        <h3>Quick Links</h3>
                        <ul class="footer-links">
                            <li><a href='/'><i class="fas fa-chevron-right"></i> Home</a></li>
                            <li><a href='/products'><i class="fas fa-chevron-right"></i> Products</a></li>
                            <li><a href='/About'><i class="fas fa-chevron-right"></i> About Us</a></li>
                            <li><a href='/Export'><i class="fas fa-chevron-right"></i> Export</a></li>
                            <li><a href='/Contact'><i class="fas fa-chevron-right"></i> Contact</a></li>
                        </ul>
                    </div>

                    {/* <!-- Contact Info --> */}
                    <div class="footer-section">
                        <h3>Contact Info</h3>
                        <ul class="contact-infoo">
                            <li>
                                <i class="fas fa-map-marker-alt"></i>
                                <span>Shop no-4, Nandan plaza,Near ITI College
                                    Halvad road, Mahendranagar,<br/>Morbi-363611,<br/>
                                    Gujrat, India</span>
                            </li>
                            <li>
                                <i class="fas fa-phone"></i>
                                <span>+91 9875124069</span>
                            </li>
                            <li>
                                <i class="fas fa-envelope"></i>
                                <span>export.eliteoverseas@gmail.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* <!-- Newsletter --> */}
                    <div class="footer-section">
                        <h3>Newsletter</h3>
                        <p>Subscribe to our newsletter for updates and special offers.</p>
                        <form class="newsletter-form" onSubmit={onSubmit}>
                            <input type="email" placeholder="Enter your email"  name='Newsletter Subscribe Email'/>
                            {result && <div className="form-result">{result}</div>}
                            <button type="submit">Subscribe</button>
                        </form>
                    </div>
                </div>

                {/* <!-- Copyright --> */}
                <div class="footer-bottom">
                    <p>&copy; <script>document.write(new Date().getFullYear())</script> Tiles Factory. All rights reserved. | Designed with  by YourCompany</p>
                </div>
            </footer>
        </>
    )
}
export default Footer;