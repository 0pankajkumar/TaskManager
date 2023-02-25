import React, {useState} from 'react';
import CustomButton from './buttons';
  
  export default function TaskCard(props) {
    const [taskCardData, taskCardDataModifier] = useState(
        {
            "id": "null",
            "title": null,
            "eta": null,
            "status": null
        }
    );

    // taskCardDataModifier({
    //         "id": null,
    //         "title": null,
    //         "eta": null,
    //         "status": null
    //     }
    // );

    // console.log("Reached taskcard", task);
    return (
      <div>
        
        ID : {props.task.id}<br></br>
        Title: {props.task.title}<br></br>
        ETA: {props.task.eta}<br></br>
        status: {props.task.status}<br></br>
        <CustomButton props={{buttonType:"Update", task:props.task}}/>
        <CustomButton props={{buttonType:"AuditTrial", task:props.task}}/>
        <br></br><br></br>
      </div>
    );
  }