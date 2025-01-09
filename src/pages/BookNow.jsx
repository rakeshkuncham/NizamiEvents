import React from 'react';
import './BookNow.css';

const eventPackages = {
  weddings: {
    basic: {
      name: "Classic Wedding",
      price: "₹3,50,000",
      features: [
        "Venue decoration",
        "Basic catering (100 people)",
        "Photography",
        "Sound system",
        "Basic invitation cards"
      ]
    },
    premium: {
      name: "Royal Wedding",
      price: "₹7,50,000",
      features: [
        "Premium venue decoration",
        "Luxury catering (200 people)",
        "Photography & Videography",
        "Live music",
        "Premium invitations",
        "Wedding coordinator",
        "Bridal makeup"
      ]
    }
  },
  birthday: {
    kids: {
      name: "Kids Birthday Bash",
      price: "₹45,000",
      features: [
        "Theme decoration",
        "Games & activities",
        "Magic show",
        "Birthday cake",
        "Return gifts",
        "Basic catering (30 kids)"
      ]
    },
    adult: {
      name: "Adult Celebration",
      price: "₹75,000",
      features: [
        "Elegant decoration",
        "DJ & music",
        "Photography",
        "Cake",
        "Catering (50 people)"
      ]
    }
  },
  corporate: {
    conference: {
      name: "Corporate Conference",
      price: "₹2,50,000",
      features: [
        "Professional setup",
        "Audio/Visual equipment",
        "Corporate catering",
        "Registration desk",
        "Event coordination"
      ]
    }
  },
  cultural: {
    festival: {
      name: "Cultural Festival",
      price: "₹1,50,000",
      features: [
        "Traditional decoration",
        "Stage setup",
        "Sound system",
        "Cultural performances",
        "Traditional catering"
      ]
    }
  }
};

const BookNow = () => {
  return (
    <div className="book-now-page">
      <div className="book-header">
        <h1>Book Your Event</h1>
        <p>Choose from our carefully curated packages or customize your own</p>
      </div>

      <div className="packages-container">
        {Object.entries(eventPackages).map(([category, packages]) => (
          <div key={category} className="category-section">
            <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
            <div className="packages-grid">
              {Object.values(packages).map((pkg) => (
                <div key={pkg.name} className="package-card">
                  <h3>{pkg.name}</h3>
                  <div className="price">{pkg.price}</div>
                  <ul>
                    {pkg.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                  <button className="book-btn">Book Now</button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="custom-package">
        <h2>Need a Custom Package?</h2>
        <p>Contact us to create a personalized package that fits your needs perfectly</p>
        <button className="contact-btn">Contact Us</button>
      </div>
    </div>
  );
};

export default BookNow;