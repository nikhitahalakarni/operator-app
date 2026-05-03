import { createContext,useState,useEffect } from "react";

export const OperatorContext=createContext();

const data = [
  { id: 1, title:"Operator1",name: "John", gender:"male",networkname:"John Network",email: "john@mail.com",phone:9898989800,created_date:'2025-02-02 00:09:01',remarks:""},
  { id: 2, title:"Operator2",name: "Jane", gender:"female",networkname:"Jane Network",email: "jane@mail.com", phone:9898989801,created_date:'2025-02-02 00:09:01',remarks:""},
  { id: 3, title:"Operator3",name: "Sam", gender:"male",networkname:"Sam Network",email: "sam@mail.com",phone:9898989802,created_date:'2025-02-02 00:09:01',remarks:""},
  { id: 4, title:"Operator4",name: "Alex", gender:"male",networkname:"Alex Network",email: "alex@mail.com",phone:9898989803,created_date:'2025-02-02 00:09:01',remarks:""},
  { id: 5, title:"Operator5",name: "Mike", gender:"male",networkname:"Mike Network",email: "mike@mail.com",phone:9898989804,created_date:'2025-02-02 00:09:01',remarks:""},
  { id: 6, title:"Operator6",name: "Sara", gender:"male",networkname:"Sara Network",email: "sara@mail.com",phone:9898989805,created_date:'2025-02-02 00:09:01',remarks:""},
];

export const OperatorProvider = ({ children }) => {
 const [operators, setOperators] = useState(() => {
  const saved = localStorage.getItem("operators");

  if (saved) {
    const parsed = JSON.parse(saved);
    return parsed.length > 0 ? parsed : data;   // ✅ check length
  }

  return data;
});

  const addOperator = (data) => {
    setOperators((prev) => [...prev, data]);
  };

  useEffect(() => {
    localStorage.setItem("operators", JSON.stringify(operators));
  }, [operators]);

  return (
    <OperatorContext.Provider value={{ operators,setOperators,addOperator }}>
      {children}
    </OperatorContext.Provider>
  );
};