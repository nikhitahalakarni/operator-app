import { useContext,useRef } from "react";
import { useNavigate } from "react-router-dom";
import { OperatorContext } from "../createContext/OperatorContext";
import "./AddOperator.css";

const AddOperator = () => {

    const { addOperator } = useContext(OperatorContext);

  const nameRef = useRef();
  const networkRef = useRef();
  const phoneRef = useRef();
  const genderRef = useRef();
  const emailRef = useRef();
  const remarksRef = useRef();
   const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      id: Date.now(),
      title:`Operator${Date.now()}`,
      name: nameRef.current.value,
       gender: genderRef.current.value,
      networkname: networkRef.current.value,
        email: emailRef.current.value,
      phone: phoneRef.current.value,
      created_date: new Date().toLocaleString(),
      remarks: remarksRef.current.value,
    };

    addOperator(data);

    console.log(data);

     e.target.reset();

     navigate("/dashboard");
  };

  return (
    <div className="container mt-3">
      <div className="row justify-content-center">
        <div className="col-md-5">

          <form
            className="p-2 border rounded shadow-sm op-form"
            onSubmit={handleSubmit}
          >

            <h4 className="mb-4 text-center" style={{ color: "white" }}>
              Create Operator
            </h4>

            <div className="mb-3">
              <label className="form-label">Name</label>
              <input ref={nameRef} type="text" className="form-control" placeholder="Enter Name"/>
            </div>

            <div className="mb-3">
              <label className="form-label">Network Name</label>
              <input ref={networkRef} type="text" className="form-control" placeholder="Enter Network Name"/>
            </div>

            <div className="mb-3">
              <label className="form-label">Phone</label>
              <input ref={phoneRef} type="tel" className="form-control" placeholder="Enter Phone Number"/>
            </div>

            <div className="mb-3">
              <label className="form-label">Gender</label>
              <select ref={genderRef} className="form-select">
                <option>Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input ref={emailRef} type="email" className="form-control" placeholder="name@gmail.com"/>
            </div>

            <div className="mb-3">
              <label className="form-label">Remarks</label>
              <textarea ref={remarksRef} className="form-control" rows="3" placeholder="Remarks..."/>
            </div>

            <button type="submit" className="btn btn-primary w-100 submit-btn">
              Submit
            </button>

          </form>

        </div>
      </div>
    </div>
  );
};

export default AddOperator;