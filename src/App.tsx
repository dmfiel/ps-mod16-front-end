import './App.css';
import { useContext } from 'react';
import ThemeProvider, {
  BG_DARK,
  BG_LIGHT,
  ThemeButton,
  ThemeContext
} from './context/ThemeContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/Home';
import RegisterPage from './pages/Register';
import LoginPage from './pages/Login';
import Navbar from './components/Navbar';
import FeedPage from './pages/FeedPage';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <ThemeWrapper />
      </ThemeProvider>
    </BrowserRouter>
  );
}

function ThemeWrapper() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      id="all"
      className={`${theme} w-full h-full bg-[${BG_LIGHT}] dark:bg-[${BG_DARK}] text-black dark:text-white flex flex-col min-h-screen px-5 pt-5`}
    >
      <header className="grid grid-cols-3">
        <div></div>
        <h1 className="text-3xl font-bold text-center">The Social App</h1>
        <div className="text-end">
          <ThemeButton />
        </div>
      </header>
      <Navbar />
      <main className="mx-auto my-5 flex-1 flex flex-col gap-5 items-center">
        <Routes>
          <Route
            path={`${import.meta.env.VITE_FRONTEND_BASE}/`}
            element={<HomePage />}
          />
          <Route
            path={`${import.meta.env.VITE_FRONTEND_BASE}/register`}
            element={<RegisterPage />}
          />
          <Route
            path={`${import.meta.env.VITE_FRONTEND_BASE}/signin`}
            element={<LoginPage />}
          />
          <Route
            path={`${import.meta.env.VITE_FRONTEND_BASE}/feed`}
            element={<FeedPage />}
          />
        </Routes>
      </main>
      <footer role="contentinfo">
        <a
          href="https://www.flaticon.com/free-icons/letter-f"
          title="letter f icons"
          target="_blank"
          className="text-center text-xs text-gray-500"
        >
          <p>Letter f icons created by rashedul.islam - Flaticon</p>{' '}
        </a>{' '}
      </footer>{' '}
    </div>
  );
}
export default App;
