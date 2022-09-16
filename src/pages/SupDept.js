import React from 'react';
import { SupportTeam} from '../components/SidebarData'
import CommonComp from './CommonComp';

function SupDept() {
  const obj = {
    Dept_name: 'Support Department',
    No_of_emp: SupportTeam.length,
    Dept_mngr: 'Abcd'
  }

  return (
    <div className='support'>
      <CommonComp data={SupportTeam} obj={obj}/>
    </div>
  );
}

export default SupDept;
