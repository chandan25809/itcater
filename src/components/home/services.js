import React from "react";
import "./services.css";
import image1 from '../../assets/images/sap.jpeg';
import image2 from '../../assets/images/digitalwf.jpg';
import image3 from '../../assets/images/ATC.jpg';
function Services() {
return (
<div id="services" className="main-aboutus">
<div className="titleHolder">
        <h2>Services</h2>
        <p>We’re in the business of making your business better</p>
    </div>
<div className="who-we-are">
    <div className="aboutus-text">
        <h2>SAP SOLUTIONS</h2>
        <h2>BUILDING AN INTELLIGENT AND CONNECTED ENTERPRISE</h2>
        <span>
        Especially experience with complex projects and implementations. That’s where we come in. Your SAP implementation deserves a partner with end-to-end experience in on-prem and cloud-based SAP Solutions.
        At ITCATER, we help you create the experience you want others to have when interacting with your company. With more than 200 years of combined experience in SAP implementations, ITCATER brings a wealth of knowledge and tools to every project and client engagement to help fast-track your implementation while ensuring it stays on time and on budget.

An experienced partner contributes significantly to a successful implementation. Connect with us to hear how our experience has helped companies like yours.

        </span>
    </div>
    <img src={image1} alt="" />
    </div>

    <div className="about-dental-industry">
    <img src={image2} alt="" />
    <div className="aboutus-text">
        <h2>DIGITAL WORKFORCE SOLUTIONS</h2>
        <h2>CONNECTING PEOPLE</h2>
        <span>
        We create people-focused solutions for your business, ensuring you have the right person for your needs in the right place at the right time. As experts in engaging the talent you need when you need it, we find the people who help make your business successful – onsite, offsite, or offshore.

Whether you need supplemental resources to augment a team for a specific project/time or a primary supplier to help you find your next functional or technical consultant, we can help. With 400+ years of combined experience in professional services and staff augmentation for more than 40 industries, our team of talent-acquisition professionals understands your business needs.

Whether you want to reduce implementation times or deliver projects under budget, we can tailor a solution for you.
        </span>
    </div>
    </div>
    <div className="who-we-are">
    <div className="aboutus-text">
        <h2>APPLICATION TRANSFORMATION & SUPPORT</h2>
        <h2>REDUCE YOUR OPERATIONAL EXPENSES</h2>
        <span>
        Selecting the best-fit managed service model and partner is critical to delivering the value our clients require. ITCATER’s Application Transformation & Support (ATS) services for SAP provide a flexible structure that assists businesses in fine-tuning application management services to their IT and business objectives.

Using artificial intelligence in ATS, ITCATER can help clients overcome challenges to improve application performance and achieve better business results. Our full application support lifecycle gets more from your investments by going beyond the traditional AMS model and focusing on business optimization and innovation.

ATS’ value comes from automation and artificial intelligence. This technology allows us to automate routine application maintenance and support activities. Human intervention is applied only for complex problem-solving situations, saving our clients time and money.
        </span>
    </div>
    <img src={image3} alt="" />
    </div>
</div>
);
}

export default Services;