import { useEffect, useState } from 'react';
import './App.css';
import { ThemProvider } from './context/theme';
import ThemeBtn from './component/ThemButton';
import Card from './component/Card';

function App() {
  const [themMode, setThemMode] = useState('light');

  const lightTheme = () => {
    setThemMode("light")
  }
  const darkTheme = () => {
    setThemMode("dark")
  }
  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark");
    document.querySelector('html').classList.add(themMode);
  }, [themMode]);

  return (
    <ThemProvider value={{ themMode, lightTheme, darkTheme }}>
      <div className="flex flex-wrap min-h-screen item-center" >
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>
          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemProvider>
  );
}

export default App;
