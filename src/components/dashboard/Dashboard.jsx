import { useContext, useState } from "react";
import './Dashboard.css';
import maleOp from './Images/maleOp.jpg';
import femaleOp from './Images/femaleOp.jpg';
import EmptyMessage from "./EmptyMessage";
import { OperatorContext } from "../createContext/OperatorContext";


const Dashboard=()=>{

       
        const [search, setSearch] = useState("");
        const [currentPage, setCurrentPage] = useState(1);
        const [rowsPerPage, setRowsPerPage] = useState(3);
        // const [operators, setOperators] = useState(data);
        const {operators,setOperators}=useContext(OperatorContext);

    //  Filter
    const filteredData = operators.filter(item =>{
        // item.name.toLowerCase().includes(search.toLowerCase())
         const searchTerm = search.toLowerCase();

            return (
                item.name.toLowerCase().includes(searchTerm) ||
                item.networkname.toLowerCase().includes(searchTerm) ||
                item.email.toLowerCase().includes(searchTerm) ||
                item.gender.toLowerCase().includes(searchTerm) ||
                item.phone.toString().includes(searchTerm) ||
                item.created_date.toLowerCase().includes(searchTerm)
            );
        }
    );

    //  Pagination
    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentRows = filteredData.slice(indexOfFirstRow, indexOfLastRow);

    const totalPages = Math.ceil(filteredData.length / rowsPerPage);

    const handleDelete=(id)=>{
        const updated=operators.filter((operator)=>operator.id!==id);
        setOperators(updated);

        if (currentPage > Math.ceil(updated.length / rowsPerPage)) {
            setCurrentPage(1);
        }

    }

    return (
        
        <div className="container mt-4">
        <h2>View Operators</h2>
        {operators.length === 0 ? <EmptyMessage /> :
        <div className="d-flex justify-content-between mb-3">
            <select
                className="form-select w-auto"
                value={rowsPerPage}
                onChange={(e) => setRowsPerPage(Number(e.target.value))}
                >
                <option value={3}>3</option>
                <option value={5}>5</option>
                <option value={10}>10</option>
            </select>
            <input
            type="text"
            className="form-control w-25"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            />

        </div>
        }
        {/* Table */}
        <div className="table-container">
            <table className="table table-bordered table-striped">

            <tbody>
            {currentRows.map((row) => (
                <tr key={row.id}>
                <td> 
                    <div className="card" style={{width: "100%",backgroundColor:"lightgrey" }}>
                        <div className="card-body">
                            <h5 className="card-title">{row.title}</h5>
                        <div className="container">
                                <div className="row">
                                    <div className="col-md-8">
                                        <p><strong>Name:</strong> {row.name}</p>
                                        <p><strong>Network Name:</strong> {row.networkname}</p>
                                        <p><strong>Phone:</strong> {row.phone}</p>
                                        <p><strong>Email:</strong> {row.email}</p>
                                        <p><strong>Created Date:</strong> {row.created_date}</p>
                                    </div>
                                    <div className="col-md-4 d-flex justify-content-end p-4">
                                        <div className="image-container">
                                            <img 
                                                src={row.gender==="male" ?maleOp:femaleOp} 
                                                alt="profile"
                                                className="img-fluid rounded"
                                            />
                                        </div>
                                    </div>
                                </div>
                                </div>
                            <div className="d-flex justify-content-end">
                                {/* <a href="#" className="btn btn-success me-2">Edit</a> */}
                                <button className="btn btn-danger" onClick={()=>handleDelete(row.id)}>Delete</button>
                            </div>
                        </div>
                    </div>
                </td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>

        {/*  Pagination */}
        <nav className="d-flex justify-content-end m-2">
            <ul className="pagination">
            {[...Array(totalPages)].map((_, i) => (
                <li
                key={i}
                className={`page-item ${currentPage === i + 1 ? "active" : ""}`}
                onClick={() => setCurrentPage(i + 1)}
                >
                <button className="page-link">{i + 1}</button>
                </li>
            ))}
            </ul>
        </nav>
  

        </div>
  )
}

export default Dashboard;