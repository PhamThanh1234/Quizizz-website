import './Editprofile.css';
import React, { useState } from 'react';
import moment from 'moment';

function EditProfile() {
  const initialProfile = {
    name: '',
    password: '',
    phoneNumber: '',
    email: '',
    address: '',
    state: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  };

  const [profile, setProfile] = useState(initialProfile);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value,
    });
  };

  const handleCancel = () => {
    setProfile(initialProfile);
    setErrors({});
  };

  const handleSave = () => {
    const validationErrors = validateProfile(profile);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Thực hiện hành động lưu dữ liệu
      console.log('Profile saved', profile);
      // Reset lại errors sau khi lưu thành công
      setErrors({});
    }
  };

  const validateProfile = (profile) => {
    const errors = {};
    if (!profile.name) errors.name = 'Name is required';
    if (!profile.password) errors.password = 'Password is required';
    else if (profile.password.length < 8)
      errors.password = 'Password must be at least 8 characters';
    if (!profile.phoneNumber) errors.phoneNumber = 'Phone number is required';
    else if (!/^\d+$/.test(profile.phoneNumber))
      errors.phoneNumber = 'Phone number must be a number';
    if (!profile.email) errors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(profile.email)) errors.email = 'Email is invalid';
    if (!profile.address) errors.address = 'Address is required';
    if (!profile.state) errors.state = 'State is required';
    if (!profile.cardNumber) errors.cardNumber = 'Card number is required';
    else if (!/^\d+$/.test(profile.cardNumber)) errors.cardNumber = 'Card number must be a number';
    if (!profile.expiryDate) errors.expiryDate = 'Expiry date is required';
    else if (!moment(profile.expiryDate, 'MM/DD/YYYY', true).isValid())
      errors.expiryDate = 'Expiry date is invalid';
    if (!profile.cvv) errors.cvv = 'CVV is required';
    else if (!/^\d{3,4}$/.test(profile.cvv)) errors.cvv = 'CVV is invalid';
    return errors;
  };

  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <div className="content-editprofile">
        <div className="header-content">
          <a href="/" className="text-home">
            Home
          </a>{' '}
          <span>|</span>
          <a href="./" className="text-home">
            My profile
          </a>
        </div>
        <div className="title">
          <h2 style={{ textAlign: 'center', margin: 30 }}>My profile</h2>
        </div>
        <div className="main-content">
          <div className="container-editprofile">
            <div className="label">Name</div>
            <div>
              <input
                className="input"
                type="text"
                name="name"
                value={profile.name}
                onChange={handleChange}
              />
              {errors.name && <div className="error">{errors.name}</div>}
            </div>
            <div className="label">Password</div>
            <div>
              <input
                className="input"
                type="password"
                name="password"
                value={profile.password}
                onChange={handleChange}
              />
              {errors.password && <div className="error">{errors.password}</div>}
            </div>
            <div className="label">Phone number</div>
            <div>
              <input
                className="input"
                type="tel"
                name="phoneNumber"
                value={profile.phoneNumber}
                onChange={handleChange}
              />
              {errors.phoneNumber && <div className="error">{errors.phoneNumber}</div>}
            </div>
            <div className="label">Email</div>
            <div>
              <input
                className="input"
                type="email"
                name="email"
                value={profile.email}
                onChange={handleChange}
              />
              {errors.email && <div className="error">{errors.email}</div>}
            </div>
            <div className="label">Address</div>
            <div>
              <input
                className="input"
                type="text"
                name="address"
                value={profile.address}
                onChange={handleChange}
              />
              {errors.address && <div className="error">{errors.address}</div>}
            </div>
            <div className="label">State</div>
            <div>
              <select className="select" name="state" value={profile.state} onChange={handleChange}>
                <option value="">Select State</option>
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                {/* Thêm các tùy chọn khác ở đây */}
              </select>
              {errors.state && <div className="error">{errors.state}</div>}
            </div>
            <div className="label">Credit Card</div>
            <div>&nbsp;</div>
            <div className="label">Card number</div>
            <div>
              <input
                className="input"
                type="text"
                name="cardNumber"
                value={profile.cardNumber}
                onChange={handleChange}
              />
              {errors.cardNumber && <div className="error">{errors.cardNumber}</div>}
            </div>
            <div className="label">Expired date (MM/DD/YYYY)</div>
            <div>
              <input
                className="input"
                type="text"
                name="expiryDate"
                value={profile.expiryDate}
                onChange={handleChange}
              />
              {errors.expiryDate && <div className="error">{errors.expiryDate}</div>}
            </div>
            <div className="label">CVV</div>
            <div>
              <input
                className="input"
                type="text"
                name="cvv"
                value={profile.cvv}
                onChange={handleChange}
              />
              {errors.cvv && <div className="error">{errors.cvv}</div>}
            </div>
          </div>
        </div>
        <div className="footer-container">
          <div className="button-container">
            <button className="button" onClick={handleSave}>
              Save
            </button>
            <button className="button" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditProfile;
