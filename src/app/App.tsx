import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import StorySubmissionPage from './pages/StorySubmissionPage';
import AvatarCreationPage from './pages/AvatarCreationPage';
import ConfirmationPage from './pages/ConfirmationPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/story-submission" element={<StorySubmissionPage />} />
        <Route path="/avatar-creation" element={<AvatarCreationPage />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
      </Routes>
    </BrowserRouter>
  );
}
