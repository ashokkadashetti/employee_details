import React from 'react';
import { AccDetails} from '../components/SidebarData'
import CommonComp from './CommonComp';

function AccDept() {
  const obj = {

                Dept_name: 'Account Department',
                No_of_emp: AccDetails.length,
                Dept_mngr: 'Abcd'
              }
  return (
    <div className='account'>
      <CommonComp data={AccDetails} obj={obj}/>
    </div>
  );
}

export default AccDept;
