"use client";
import React from 'react';

const HospitalInfoForm = ({ hospital, onChange, onSave }) => {
    const handleInputChange = (field, value) => {
        onChange(hospital.id, field, value);
    };

    return (
        <div className="form-content w-100 position-relative p-0">
            <div className="box">
                <fieldset className="box-fieldset">
                    <label htmlFor="hospital-name">Hospital Name</label>
                    <input type="text" value={hospital.name} className="form-control mb-2" onChange={(e) => handleInputChange('name', e.target.value)} />
                </fieldset>
                <fieldset className="box-fieldset">
                    <label htmlFor="address">Address</label>
                    <input type="text" value={hospital.address} className="form-control mb-2" onChange={(e) => handleInputChange('address', e.target.value)} />
                </fieldset>
                <fieldset className="box-fieldset">
                    <label htmlFor="contact">Contact</label>
                    <input type="text" value={hospital.contact} className="form-control mb-2" onChange={(e) => handleInputChange('contact', e.target.value)} />
                </fieldset>
                <fieldset className="box-fieldset mb-0">
                    <legend className="mb-10 fw-6">Is Open 24 Hours</legend>
                    <div className="form-check">
                        <input
                            type="radio"
                            id={`open24Hours-yes-${hospital.id}`}
                            name={`open24Hours-${hospital.id}`}
                            className="form-check-input"
                            checked={hospital.open24Hours === true}
                            onChange={() => handleInputChange('open24Hours', true)}
                        />
                        <label htmlFor={`open24Hours-yes-${hospital.id}`} className="form-check-label fw-5 m-0">
                            Yes
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            type="radio"
                            id={`open24Hours-no-${hospital.id}`}
                            name={`open24Hours-${hospital.id}`}
                            className="form-check-input"
                            checked={hospital.open24Hours === false}
                            onChange={() => handleInputChange('open24Hours', false)}
                        />
                        <label htmlFor={`open24Hours-no-${hospital.id}`} className="form-check-label fw-5 m-0">
                            No
                        </label>
                    </div>
                </fieldset>
            </div>
            <div className="position-absolute bottom-0 end-0 p-2 pe-0">
                <button type="button" className="btn btn-success btn-sm" onClick={() => onSave(hospital.id)}>Save</button>
            </div>
        </div>
    );
};

export default HospitalInfoForm;
