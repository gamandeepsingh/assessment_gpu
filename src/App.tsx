import { AppProvider } from './context';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import Feed from './components/Feed';

const App = () => {
  return (
    <AppProvider>
      <div className="flex h-screen bg-background overflow-hidden">
        <Sidebar />
        <MainContent />
        <Feed />
      </div>
    </AppProvider>
  );
};

export default App;
