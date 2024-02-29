import React, { useState } from 'react';

const AddDataForm = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    FName: '',
    LName: '',
    email: '',
    Phone: '',
    Job: '',
    Salary: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(formData);
    setFormData({FName: '',LName: '',email: '',Phone: '',Job: '',Salary: ''});
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="FName"
        value={formData.FName}
        onChange={handleChange}
        placeholder="First Name"
        className="input input-bordered"
      />
      <input
        type="text"
        name="LName"
        value={formData.LName}
        onChange={handleChange}
        placeholder="LastName"
        className="input input-bordered"
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        className="input input-bordered"
      />
      <input
        type="text"
        name="Phone"
        value={formData.Phone}
        onChange={handleChange}
        placeholder="Phone"
        className="input input-bordered"
      />
      <input
        type="text"
        name="Job"
        value={formData.Job}
        onChange={handleChange}
        placeholder="Job"
        className="input input-bordered"
      />
      <input
        type="number"
        name="Salary"
        value={formData.Salary}
        onChange={handleChange}
        placeholder="Salary"
        className="input input-bordered"
      />
      <button type="submit" className="btn btn-primary">
        Add Data
      </button>
    </form>
  );
};

export default AddDataForm;
