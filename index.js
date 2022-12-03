import React, { useState } from 'react';
import { render } from 'react-dom';
import Cron from 'react-js-cron';
import 'antd/dist/antd.css';
// import './style.css';

const App = () => {
  const [name] = useState('Pingpongs Cron Generator');
  const [cron, setCron] = useState('');

  return (
    <div>
      <h3>Simple , {name}</h3>
      <div style={{ margin: '20px' }}>
        <h5>Cron Expression - {cron} </h5>
        <Cron
          className="my-project-cron"
          setValue={(event) => setCron(event)}
          leadingZero="always"
        />
      </div>
    </div>
  );
};

render(<App />, document.getElementById('root'));
