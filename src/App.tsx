import React, { useState } from 'react';
import './App.css';

import Scheduler, { Resource } from "devextreme-react/scheduler";
import { Popup } from "./popup/Popup";

const views = ["workWeek"];

export const rooms = [
  {
    text: 'Room 1',
    id: 1,
    color: '#00af2c',
  }, {
    text: 'Room 2',
    id: 2,
    color: '#56ca85',
  }, {
    text: 'Room 3',
    id: 3,
    color: '#8ecd3c',
  },
];

function App() {
  const currentDate = new Date();
  const [shown, setShown] = useState(false);
  return (
    <div className="App">
      <button onClick={() => {
        setShown(true);
      }}>Show in popup
      </button>
      {shown && <div style={{position: 'absolute', top: 10, left: 200, padding: 10, background:'blue', width: 400, height: 500, zIndex: 100}}><Popup onClose={() => {
        setShown(false)
      }
      }></Popup></div>}
      <div style={{width: '500px', height: '400px'}}>
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
    </div>
  );
}

export default App;
