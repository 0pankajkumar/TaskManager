import React, {useState} from 'react';
import CustomButton from './buttons/buttons';
  
  export default function TaskCard(props) {
    const [taskCardData, taskCardDataModifier] = useState(
        {
            "id": "null",
            "title": null,
            "eta": null,
            "status": null
        }
    );

    taskCardDataModifier({
      ...taskCardData
    });

    return (
      <div>
        
        ID : {props.task.id}<br></br>
        Title: {props.task.title}<br></br>
        ETA: {props.task.eta}<br></br>
        status: {props.task.status}<br></br>
        <CustomButton props={{buttonType:"Update", task:props.task, handler:taskCardDataModifier}}/>
        <CustomButton props={{buttonType:"AuditTrial", task:props.task}}/>
        <br></br><br></br>
      </div>
    );
  }