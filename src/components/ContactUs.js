import React from 'react';

const ContactUs = () => {
    return (
    <div className="parallax-content contact-content" id="contact-us">
    <div className="container">
        <div className="row">
        <div className="col-md-6">
            <div className="contact-form">
            <div className="row">
                <form id="contact" action method="post">
                <div className="row">
                    <div className="col-md-12">
                    <fieldset>
                        <input name="name" type="text" className="form-control" id="name" placeholder="Your name..." required />
                    </fieldset>
                    </div>
                    <div className="col-md-12">
                    <fieldset>
                        <input name="email" type="email" className="form-control" id="email" placeholder="Your email..." required />
                    </fieldset>
                    </div>
                    <div className="col-md-12">
                    <fieldset>
                        <textarea name="message" rows={6} className="form-control" id="message" placeholder="Your message..." required defaultValue={""} />
                    </fieldset>
                    </div>
                    <div className="col-md-12">
                    <fieldset>
                        <button type="submit" id="form-submit" className="btn">Send Message</button>
                    </fieldset>
                    </div>
                </div>
                </form>
            </div>
            </div>
        </div>
        <div className="col-md-6">
            <div className="map">
            {/* How to change your own map point
                1. Go to Google Maps
                2. Click on your location point
                3. Click "Share" and choose "Embed map" tab
                4. Copy only URL and paste it within the src="" field below
            */}
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d10802.834681429815!2d0.6643965000000024!3d47.39811684999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2sfr!4v1580112612290!5m2!1sfr!2sfr" width="100%" height={450} frameborder={0} style={{border:0}} allowfullscreen="" />
            </div>
        </div>
        </div>
    </div>
    </div>

    )
}

export default ContactUs;
