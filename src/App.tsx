import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import './App.css';
import DetailsView from './components/details-view/DetailsView';
import ListView from './components/list-view/ListView';
import { ROUTES } from './enums/routes.enum';

function App() {
  return (
    <div className="app">
      <div className="app-header">
        <BrowserRouter>
          <Routes>
            <Route path={ROUTES.LIST_VIEW} element={<ListView />} />
            <Route path={ROUTES.DETAILS_VIEW} element={<DetailsView />} />
            <Route
              path="*"
              element={<Navigate to={ROUTES.LIST_VIEW} />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
