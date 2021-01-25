import React from "react";

const Input = ({ label, name, type, value, error, onChange }) => {
  return (
    <div className="from-group mt-3">
      <label htmlFor={name}>{label}</label>
      <input
        className="form-control"
        placeholder={name}
        id={name}
        onChange={(e) => onChange(e)}
        value={value}
        type={type}
        name={name}
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
