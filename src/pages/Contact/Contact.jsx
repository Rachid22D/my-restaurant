
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <section className={`section1 contact-section py-5 ${styles.contactSection}`}>
      <div className="container">
        <h1 className="text-center mb-5">Get in Touch</h1>
        <div className="row">
          {/* نموذج الاتصال */}
          <div className="col-md-6 mb-4">
            <form action="#" method="post" className={`contact-form ${styles.contactForm}`}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="form-control"
                  placeholder="Enter subject"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-control"
                  rows="5"
                  placeholder="Your message"
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-warning">
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* معلومات الاتصال */}
          <div className="col-md-6 mb-4">
            <div className={`contact-info ${styles.contactInfo}`}>
              <h2>Contact Information</h2>
              <p>
                <strong>Address:</strong> 123 Main Street, City<br />
                <strong>Phone:</strong> +123 456 789<br />
                <strong>Email:</strong> info@eatmore.com
              </p>
              {/* صورة لخريطة الموقع */}
              <div className="map">
                <img
                  src="images/map-placeholder.jpg"
                  alt="Our Location"
                  className="img-fluid rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
