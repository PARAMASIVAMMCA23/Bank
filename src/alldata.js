import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function Alldata() {
  const [data, setData] = useState([]);
  const [delTrigger, setDelTrigger] = useState(false);

  // Function to handle delete button click
  function delClick(id) {
    axios.delete(`https://server-6tcs.onrender.com/delete/${id}`)
      .then(() => setDelTrigger(true));
  }

  // Fetch data from the server when delTrigger state changes
  useEffect(() => {
    axios.get("https://server-6tcs.onrender.com/data")
      .then((item) => {
        setData(item.data);
        setDelTrigger(false);
      });
  }, [delTrigger]);

  return (
    <>
      {/* Table to display data */}
      <table>
        <thead>
          <tr>
            {/* Table headers */}
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Amount</th>
            <th>Delete Account</th>
          </tr>
        </thead>
        <tbody>
          {/* Map over data array to display each item */}
          {data.map((item) => (
            <tr key={item._id}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.password}</td>
              <td>{item.amount}</td>
              {/* Button to delete account */}
              <td>
                <button onClick={() => delClick(item._id)} className="btn-del">X</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Alldata;
