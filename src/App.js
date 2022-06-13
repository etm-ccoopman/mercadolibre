import React from 'react';
import './assets/scss/App.scss';
import './assets/scss/Custom.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import AllRoutes from './routes/AllRoutes';
import '@fortawesome/fontawesome-svg-core/styles.css'

export default function App() {

  return (
    <div className="App custom_bg">
      <AllRoutes />
    </div>
  );
}