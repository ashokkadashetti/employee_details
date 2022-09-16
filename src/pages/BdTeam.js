import React from 'react';
import { BDDetails} from '../components/SidebarData'
import CommonComp from './CommonComp';

function BDTeam() {
  const obj = {
    Dept_name: 'BD Department',
    No_of_emp: BDDetails.length,
    Dept_mngr: 'Abcd'
  }

  return (
    <div className='bdteam'>
      <CommonComp data={BDDetails} obj={obj}/>
    </div>
  );
}

export default BDTeam;
