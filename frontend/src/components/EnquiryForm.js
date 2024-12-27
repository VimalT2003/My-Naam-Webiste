import React, { useState } from 'react';
import Enquiry from './Enquiry';
// import 'bootstrap/dist/css/bootstrap.min.css';

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    address: '',
    contactPerson: '',
    phone: '',
    email: '',
    country: '',
    requirements: '',
    file: null,
    verification: ''
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  const handleReset = () => {
    setFormData({
      companyName: '',
      address: '',
      contactPerson: '',
      phone: '',
      email: '',
      country: '',
      requirements: '',
      file: null,
      verification: ''
    });
  };

  return (
    <>
      <style>
        {`
          .form-container {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            // background-color: #f8f9fa;
            padding: 20px;
          }
          
          .form-card {
            background: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
            width: 100%;
            max-width: 800px;
          }
          
          .form-title {
            color: #333;
            text-align: center;
            margin-bottom: 20px;
          }
          
          .form-subtitle {
            text-align: center;
            color: #666;
            font-size: 0.9rem;
            margin-bottom: 30px;
          }
          
          .verification-number {
            background-color: #333;
            color: white;
            padding: 8px 15px;
            display: inline-block;
            border-radius: 4px;
            margin-top: 10px;
          }
          
          .btn-submit {
            background-color: #333;
            color: white;
            border: none;
            padding: 10px 30px;
          }
          
          .btn-submit:hover {
            background-color: #444;
            color: white;
          }
          
          .btn-reset {
            background-color: #e2e2e2;
            color: #333;
            border: none;
            padding: 10px 30px;
          }
          
          .btn-reset:hover {
            background-color: #d4d4d4;
          }
        `}
      </style>

      <Enquiry/>

      <div className="form-container my-5">
        <div className="form-card">
          <h2 className="form-title">Enquiry Form</h2>
          <p className="form-subtitle">
            Please fill Enquiry Form for your any type of requirement / question within our whole activity range
          </p>
          
          <form onSubmit={handleSubmit}>
            <div className="row mb-3">
              <div className="col-md-6 mb-3 mb-md-0">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name of Company *"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Address / City / Location *"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6 mb-3 mb-md-0">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name of Contact Person *"
                  name="contactPerson"
                  value={formData.contactPerson}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <input
                  type="tel"
                  className="form-control"
                  placeholder="Tel. No. / Cell No. *"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6 mb-3 mb-md-0">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email *"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6">
                <select
                  className="form-select"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                >
                  <option value="">Select a country</option>
                  <option value="us">United States</option>
                  <option value="uk">United Kingdom</option>
                  <option value="ca">Canada</option>
                  <option value="au">Australia</option>
                </select>
              </div>
            </div>

            <div className="mb-3">
              <textarea
                className="form-control"
                rows="4"
                placeholder="Requirements Details *"
                name="requirements"
                value={formData.requirements}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <input
                type="file"
                className="form-control"
                name="file"
                onChange={handleChange}
              />
            </div>

            <div className="mb-4">
              <label className="form-label">
                Please Enter Below Verification Numbers here:
              </label>
              <input
                type="text"
                className="form-control mb-2"
                name="verification"
                value={formData.verification}
                onChange={handleChange}
                required
              />
              <div className="verification-number">225155</div>
            </div>

            <div className="text-center">
              <button type="submit" className="btn btn-submit me-2">
                Submit
              </button>
              <button
                type="button"
                className="btn btn-reset"
                onClick={handleReset}
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EnquiryForm;