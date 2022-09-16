import React from 'react';
import { DesignTeam} from '../components/SidebarData'
import CommonComp from './CommonComp';

function Design() {
  const obj = {
    Dept_name: 'Design Department',
    No_of_emp: DesignTeam.length,
    Dept_mngr: 'Abcd'
  }

  return (
    <div className='design'>
      <CommonComp data={DesignTeam} obj={obj}/>
    </div>
  );
}

export default Design;
