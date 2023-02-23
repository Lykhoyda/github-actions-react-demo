import MainContent from './components/MainContent';
import logo from './assets/images/logo.png';

function App() {
  console.log(TEST, process.env.DB_NAME);
  return (
    <>
      <header>
        <div id="logo-img">
          <img src={logo} />
        </div>
        <h1>Learn & Master GitHub Actions</h1>
      </header>
      <MainContent />
    </>
  );
}

export default App;
