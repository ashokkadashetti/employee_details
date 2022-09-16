import React from 'react';
import { HrDetails} from '../components/SidebarData'
import CommonComp from './CommonComp';

function Hrdept() {
  const obj = {
    Dept_name: 'HR Department',
    No_of_emp: HrDetails.length,
    Dept_mngr: 'Abcd'
  }

  return (
    <div className='teamhr'>
      <CommonComp data={HrDetails} obj={obj}/>
    </div>
  );
}

export default Hrdept;
