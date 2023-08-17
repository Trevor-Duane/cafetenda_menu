import React from 'react';
import cover from '../../assets/bf.jpg'
import { Image } from 'react-bootstrap';

function GroupCard({cover, group_name}) {
  return (
    <div>
      <div>
        <Image src={cover} className="GroupItemCoverImage img-fluid" atl="cover image"/>
      </div>
      <div>
        <h6>{group_name}</h6>
      </div>
    </div>
  )
}

export default GroupCard