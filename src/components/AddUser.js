import React from "react";

const AddUser = ({ onAdd }) => {

const handleOnSubmit = (e) => {
    e.preventDefault();
    onAdd(e.target.name.value,e.target.email.value);
    e.target.name.value = "";
    e.target.email.value = "";
}

  return (
    <div className="add">
      <form onSubmit={handleOnSubmit}>
        <h3>Students Details </h3>
        <input placeholder="Name" name="name" />
        <input placeholder="Email" name="email" />
        <button onSubmit={handleOnSubmit}>Add</button>
        <hr />
      </form>
    </div>
  );
};

export default AddUser;