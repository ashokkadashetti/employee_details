import React from 'react';
import {DeptDetails} from '../components/SidebarData'

function Dept() {
  return (
    <div>
       <div className='dept-data'>
      <h2>Department List</h2>
      <table>
        <tr>
          <th>Dept_Id</th>
          <th>Dept_Name</th>
        </tr>
        {DeptDetails.map((val, key) => {
          return (
            <tr key={key}> 
              <td>{val.id}</td>
              <td>{val.title}</td>
            </tr>
          )
        })}
      </table>
      </div>
    </div>
  );
}

export default Dept;
