import React, { forwardRef, useState } from 'react';
import '../css/Waitlist.css';
import { FaRocket, FaPaperPlane } from 'react-icons/fa';

const Waitlist  = forwardRef((props, ref) => {

  const [message, setMessage] = useState({ text: "", type: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name || (e.target.tagName === 'INPUT' ? 'name' : 'role')]: e.target.value
    });
  };

  // Fixed handleSubmit Logic
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://conekaa.onrender.com/api/waitlist", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Sends the entire formData object
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({ text: "Success! You've been added to the waitlist.", type: "success" });
        setFormData({ name: '', email: '', phone: '', role: '' }); // Clear form
      } else {
        // Specifically handles the unique email error from backend
        setMessage({ text: data.error || "Something went wrong.", type: "error" });
      }
    } catch (err) {
      setMessage({ text: "Connection error. Is the server running?", type: "error" });
    } finally {
      setIsSubmitting(false);
      // Hide message after 5 seconds
      setTimeout(() => setMessage({ text: "", type: "" }), 5000);
    }
  };

  return (
    <section className="waitlist-section reveal" ref={ref} id="waitlist-form">
      <div className="waitlist-container">
        <div className="waitlist-card reveal">
          <div className="launch-badge">
            <FaRocket /> <span>LAUNCHING SOON</span>
          </div>
          
          <h2>Join the Waitlist</h2>
          <p>Be the first to experience Conekta — your complete housing ecosystem.</p>

          {/* User Feedback UI */}
          {message.text && (
            <div className={`status-message ${message.type}`}>
              {message.text}
            </div>
          )}

          <form onSubmit={handleSubmit} className="waitlist-form">
            <div className="input-group">
              <div className="input-field">
                <label>Full Name *</label>
                <input 
                  name="name" 
                  type="text" 
                  placeholder="e.g. John Peter" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                />
              </div>
              <div className="input-field">
                <label>Email *</label>
                <input 
                  name="email" 
                  type="email" 
                  placeholder="john@example.com" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                />
              </div>
            </div>

            <div className="input-group">
              <div className="input-field">
                <label>Phone (optional)</label>
                <input 
                  name="phone" 
                  type="tel" 
                  placeholder="+234 800 000 0000" 
                  value={formData.phone} 
                  onChange={handleChange}
                />
              </div>
              <div className="input-field">
                <label>I'm interested as</label>
                <select name='role' value={formData.role} onChange={handleChange} >
                  <option value="">Select an option</option>
                  <option value="tenant">Tenant</option>
                  <option value="landlord">Landlord / Owner</option>
                  <option value="artisan">Artisan</option>
                  <option value="investor">Investor</option>
                </select>
              </div>
            </div>

            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              {isSubmitting ? "Joining..." : "Join the Waitlist"} <FaPaperPlane className="plane-icon" />
            </button>
          </form>
          
          <p className="privacy-note">We respect your privacy. No spam, ever.</p>
        </div>
      </div>
    </section>
  );
});

export default Waitlist;