import React from 'react';
import { Image } from 'react-bootstrap';

function GroupCard({cover, group_name}) {
  return (
    <div>
      <div>
        <Image src={cover} className="GroupItemCoverImage img-fluid rounded" atl="cover image"/>
      </div>
      <div className="mt-2">
        <h6>{group_name}</h6>
      </div>
    </div>
  )
}

export default GroupCard