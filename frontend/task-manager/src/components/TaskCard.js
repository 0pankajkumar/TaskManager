import React, {useState} from 'react';
import CustomButton from './buttons/buttons';
  
  export default function TaskCard(props) {
    const [taskCardData, taskCardDataModifier] = useState(
        {
            "id": props.task.id,
            "title": props.task.title,
            "eta": props.task.eta,
            "status": props.task.status
        }
    );

    function updateTaskCard(task){
      console.log("Main card update called", task);
      taskCardDataModifier(task);
    }

    

    return (
      <div>
        ID : {taskCardData.id}<br></br>
        Title: {taskCardData.title}<br></br>
        ETA: {taskCardData.eta}<br></br>
        status: {taskCardData.status}<br></br>
        <CustomButton buttonType={"Update"} task={props.task} updateTaskCard={updateTaskCard}/>
        <CustomButton buttonType={"AuditTrial"} task={props.task}/>
        <br></br><br></br>
      </div>
    );
  }