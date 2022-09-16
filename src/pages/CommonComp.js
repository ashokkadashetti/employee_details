import React from 'react';

function CommonComp(props) {

  const { data, obj} = props

  return (
    <div>
       <div className='tech-data'>
      <div className='acc-dept-head'>
        <h2>Department Details</h2>
          <h3>Dept_name : {obj.Dept_name}</h3>
          <h3>No_of_emp : {obj.No_of_emp}</h3>
          <h3>Dept_mngr : {obj.Dept_mngr}</h3>
      </div>
      <h2>Employee List</h2>
      <table>
        <tr>
          <th>EmpId</th>
          <th>Name</th>
          <th>DOJ</th>
          <th>Tech</th>
        </tr>
        {data.map((val, key) => {
          return (
            <tr key={key}> 
              <td>{val.emp_id}</td>
              <td>{val.name}</td>
              <td>{val.doj}</td>
              <td>{val.tech ? val.tech : ''}</td>
            </tr>
          )
        })}
      </table>
      </div>
    </div>
  );
}

export default CommonComp;
