import './App.css'
import Header from './components/header/Header';

const App = ({ children }: { children: React.ReactNode }) => (
  <>
    <Header />
    <main>
      {children}
    </main>
  </>
);

export default App
