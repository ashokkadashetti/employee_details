import React from 'react';
// import { TechDetails} from '../components/SidebarData'
import CommonComp from './CommonComp';

function TechDept(props) {

  const {TechDetails, obj} = props

  return (
    <div className='tech'>
      <CommonComp data={TechDetails} obj={obj}/>
    </div>
  );
}

export default TechDept;
