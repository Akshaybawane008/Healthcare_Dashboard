import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import DashboardMainContent from "./components/DashboardMainContent";
import "./styles/App.css";

function App() {
  return (
    <>
      <div className="app-container">
        <Header />
      <div className="main-content">
        <Sidebar />
        <DashboardMainContent />
      </div>
     </div>
    </>
  );
}

export default App;
