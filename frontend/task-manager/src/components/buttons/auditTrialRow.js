import React, {useEffect, useState} from 'react';


  
export default function AuditTrialRow({new_value, timestamp}) {
    return <div>
        {new_value} : {timestamp}
    </div>
}