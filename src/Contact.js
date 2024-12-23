import React, { useState } from 'react';
import Swal from 'sweetalert2';
import Footer from './Footer';


function Contact(){
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
    return(
        <>
        {/* <!-- Main Navigation --> */}
    {/* <!-- Main Navigation  End--> */}
    {/* <!-- Hero Section --> */}
    <section class="hero-section">
        <div class="hero-content">
            <h1>Contact Us</h1>
            <p>We're here to help with your tile needs</p>
        </div>
    </section>

    {/* <!-- Main Contact Section --> */}
    <div class="container">
        <div class="contact-grid">
            {/* <!-- Contact Information --> */}
            <div class="contact-info">
                <div class="info-item">
                    <div class="info-icon">📍</div>
                    <div class="info-content">
                        <h3>Factory Address</h3>
                        <p>Shop no-4, Nandan plaza,Near ITI College <br/>Halvad road, Mahendranagar,Morbi-363611<br/>Gujrat, India </p>
                    </div>
                </div>

                <div class="info-item">
                    <div class="info-icon">📞</div>
                    <div class="info-content">
                        <h3>Phone Numbers</h3>
                        <p>Sales:  +91 98751 24069<br/></p>
                    </div>
                </div>

                <div class="info-item">
                    <div class="info-icon">✉️</div>
                    <div class="info-content">
                        <h3>Email Address</h3>
                        <p>Sales:  export.eliteoverseas@gmail.com <br/>
                           {/* Support: support@tilesfactory.com<br/>
                           Export: export@tilesfactory.com  */}</p>
                    </div>
                </div>
            </div>

            {/* <!-- Contact Form --> */}
            <div class="contact-form">
                <h2>Send Us a Message</h2>
                {result && <div className="form-result">{result}</div>}
                <form id="contactForm"  onSubmit={onSubmit}>
                    <div class="form-row">
                        <div class="form-group">
                            <label>First Name</label>
                            <input type="text" required name='First Name' style={{backgroundColor: 'bisque'}}/>
                        </div>
                        <div class="form-group">
                            <label>Last Name</label>
                            <input type="text" required name='Last Name' style={{backgroundColor: 'bisque'}}/>
                        </div>
                    </div>

                    <div class="form-group">
                        <label>Email</label>
                        <input type="email" name='Email' required style={{backgroundColor: 'bisque'}}/>
                    </div>

                    <div class="form-group">
                        <label>Phone</label>
                        <input type="tel" required name='Phone NO' style={{backgroundColor: 'bisque'}}/>
                    </div>

                    <div class="form-group">
                        <label>Message</label>
                        <textarea rows="5" required name='Message' style={{backgroundColor: 'bisque'}}></textarea>
                    </div>

                    <button type="submit" class="submit-btn">Send Message</button>
                </form>
            </div>
        </div>

        {/* <!-- Map Section --> */}
        <div className="map-section">
            <h2>Our Location</h2>
            <div className="map-container">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3669.1123643124397!2d70.83931067535283!3d23.13862131146699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3950d3c7f2a3e5d9%3A0x1e7c2c2e1c9d9c9f!2sNandan%20Plaza%2C%20Halvad%20Road%2C%20Mahendranagar%2C%20Morbi%2C%20Gujarat%20363641!5e0!3m2!1sen!2sin!4v1629789456789!5m2!1sen!2sin"
                    width="100%" 
                    height="450" 
                    style={{border:0}} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Elite Overseas Location"
                >
                </iframe>
            </div>
        </div>
    </div>

    {/* <!-- Business Hours Section --> */}
    <section class="business-hours">
        <div class="container">
            <h2>Business Hours</h2>
            <div class="hours-grid">
                <div class="hours-card">
                    <h3>Factory Hours</h3>
                    <p>Monday - Friday: 8:00 AM - 6:00 PM<br/>
                       Saturday: 8:00 AM - 2:00 PM<br/>
                       Sunday: Closed</p>
                </div>
                <div class="hours-card">
                    <h3>Showroom Hours</h3>
                    <p>Monday - Saturday: 9:00 AM - 7:00 PM<br/>
                       Sunday: 10:00 AM - 4:00 PM</p>
                </div>
                <div class="hours-card">
                    <h3>Support Hours</h3>
                    <p>24/7 Online Support<br/>
                       Phone Support: 8:00 AM - 8:00 PM</p>
                </div>
            </div>
        </div>
    </section>
    <Footer/>
    </>
    )
}
export default Contact;