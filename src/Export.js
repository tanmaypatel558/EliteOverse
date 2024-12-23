import Swal from "sweetalert2";
import Footer from "./Footer";
import { useState } from "react";

function Export() {
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
         {/* <!-- Export Process --> */}
    <div className="container">
        <h2>Our Export Process</h2>
        <div className="export-process">
            <div className="process-card">
                <div className="process-number">01</div>
                <h3>Order Processing</h3>
                <p>Initial inquiry, sample approval, and order confirmation</p>
            </div>
            <div className="process-card">
                <div className="process-number">02</div>
                <h3>Quality Control</h3>
                <p>Rigorous testing and inspection before packaging</p>
            </div>
            <div className="process-card">
                <div className="process-number">03</div>
                <h3>Documentation</h3>
                <p>Export documentation and customs clearance</p>
            </div>
            <div className="process-card">
                <div className="process-number">04</div>
                <h3>Shipping</h3>
                <p>Safe and timely delivery to destination</p>
            </div>
        </div>
    </div>

    {/* <!-- Shipping Information --> */}
    <section className="shipping-info">
        <div className="container">
            <h2>Shipping Information</h2>
            <div className="info-grid">
                <div className="info-card">
                    <h3>Packaging Specifications</h3>
                    <ul>
                        <li>Standard Export Packaging</li>
                        <li>Container Load Details</li>
                        <li>Special Packaging Options</li>
                        <li>Safety Measures</li>
                    </ul>
                </div>
                <div className="info-card">
                    <h3>Shipping Methods</h3>
                    <ul>
                        <li>Sea Freight (FCL/LCL)</li>
                        <li>Air Freight</li>
                        <li>Land Transportation</li>
                        <li>Express Delivery</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    {/* <!-- Documentation Section --> */}
    <div className="container">
        <div className="documentation">
            <h2>Required Documentation</h2>
            <ul className="doc-list">
                <li className="doc-item">
                    <span className="doc-icon">📄</span>
                    <span>Commercial Invoice</span>
                </li>
                <li className="doc-item">
                    <span className="doc-icon">📦</span>
                    <span>Packing List</span>
                </li>
                <li className="doc-item">
                    <span className="doc-icon">🚢</span>
                    <span>Bill of Lading</span>
                </li>
                <li className="doc-item">
                    <span className="doc-icon">📜</span>
                    <span>Certificate of Origin</span>
                </li>
            </ul>
        </div>
    </div>

    {/* <!-- Export Contact Form --> */}
    <section className="export-contact">
        <div className="container">
            <h2>Contact Export Department</h2>
            <div className="contact-form">
                <form onSubmit={onSubmit} id="contactForm">
                {result && <div className="form-result">{result}</div>}
                    <div className="form-group">
                        <input type="text" placeholder="Company Name" name="Company Name" />
                    </div>
                    <div className="form-group">
                        <input type="email" placeholder="Email Address" name="Email Address" />
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="Country" name="Country" />
                    </div>
                    <div className="form-group">
                        <textarea rows="4" placeholder="Inquiry Details" name="Inquiry Details" />
                    </div>
                    <button type="submit" className="submit-btn">Submit Inquiry</button>
                </form>
            </div>
        </div>
    </section>
    <Footer/>
                    </>
    )
}
export default Export;