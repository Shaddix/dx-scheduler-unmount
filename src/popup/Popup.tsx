import Scheduler, { Resource } from "devextreme-react/scheduler";
import React from "react";
import { rooms } from "../App";

export const Popup:React.FC<{onClose: ()=>void}> = (props)=>{
  const currentDate = new Date();
  return <div style={{width: '100%', height: '100%'}}>
    <button onClick={()=>props.onClose()}>Close</button>
    <Scheduler
      timeZone="America/Los_Angeles"
      defaultCurrentView="timelineWeek"
      defaultCurrentDate={currentDate}
      startDayHour={9}
      endDayHour={19}
      height={600}
      cellDuration={1440}
    >
      <Resource
        dataSource={rooms}
        fieldExpr="roomId"
        label="Room"
      />

    </Scheduler>
  </div>
}
