import './scss/app.scss';

import { Header } from './components';
import { AppRouter } from './components/AppRouter';

function App() {
  return (
    <div className="wrapper">
        <Header/>
        <div className="content">
          <div className="container">
            <AppRouter/>
          </div>
        </div>
    </div>
  );
}

export default App;