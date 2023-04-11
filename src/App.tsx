import { Navigate, Route, Routes } from 'react-router-dom';

import { Sidebar } from './Components/Sidebar';
import { Wrapper } from './Components/Wrapper';
import { CreatePage } from './Pages/CreatePage';
import { ExercisePage } from './Pages/ExercisePage';
import { Main } from './Pages/MainPage';

import './App.scss';

function App() {
  return (
    <Wrapper>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="/exercise" element={<ExercisePage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </Wrapper>
  );
}

export default App;
