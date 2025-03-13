import styles from './Reservation.module.css';

// Component for the reservation page
const Reservation = () => {
  return (
    <section className={`section1 reservation-section py-5 ${styles.reservationSection}`}>
      <div className="container">
        <h1 className="text-center mb-5">Make a Reservation</h1>
        <div className="row justify-content-center">
          <div className="col-md-8">
            {/* Reservation form */}
            <form action="#" method="post" className={`reservation-form ${styles.reservationForm}`}>
              <div className="row mb-3">
                <div className="col-md-6">
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
                <div className="col-md-6">
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
              </div>
              <div className="row mb-3">
                <div className="col-md-6">
                  <label htmlFor="phone" className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="form-control"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="date" className="form-label">Reservation Date</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    className="form-control"
                    required
                  />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-6">
                  <label htmlFor="time" className="form-label">Time</label>
                  <input
                    type="time"
                    id="time"
                    name="time"
                    className="form-control"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="guests" className="form-label">Number of Guests</label>
                  <input
                    type="number"
                    id="guests"
                    name="guests"
                    className="form-control"
                    min="1"
                    max="20"
                    required
                  />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Additional Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-control"
                  rows="4"
                  placeholder="Your message (optional)"
                ></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-warning">
                  Reserve Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
