import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-svg-core/styles.css'
import 'animate.css';
import './assets/scss/App.scss';
import './assets/scss/Custom.scss';
import AllRoutes from './routes/AllRoutes';

export default function App() {

  return (
    <div className="App custom_bg">
      <AllRoutes />
    </div>
  );
}