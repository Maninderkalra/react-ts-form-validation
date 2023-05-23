import * as React from 'react';
import './formComp.css';
import '../style.css';

export default function FormComp() {
  const submitData = (e) => {
    console.log(e);
    e.preventDefault();
  };

  const obj = {
    k: '1',
    l: '2',
    m: function () {
      // console.log(this.k, this.l);
      let f = '1' + '1' + '2';
      console.log(f);
    },
  };

  obj.m();

  return (
    <form onSubmit={submitData}>
      <div className="pb-2">
        <label>First Name: </label>
        <input type="text" id="txtFName" placeholder="First Name" required />
      </div>
      <div className="pb-2">
        <label>Last Name: </label>
        <input type="text" id="txtLName" placeholder="Last Name" required />
      </div>
      <div className="pb-2">
        <label>Phone: </label>
        <input
          type="text"
          id="txtPhone"
          pattern="^[0-9]*$"
          placeholder="Phone"
          required
        />
      </div>
      <div className="pb-2">
        <label>Email: </label>
        <input
          type="text"
          id="txtEmail"
          pattern="/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/"
          placeholder="Email"
          required
        />
      </div>
      <div className="pb-2">
        <button>Submit</button>
      </div>
    </form>
  );
}
