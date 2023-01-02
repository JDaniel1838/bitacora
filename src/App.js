import Navbar from "./components/Navbar";
import "./App.css";
import ContentActivities from "./components/ContentActivities";
import { ActivitiesProvider } from "./context/ActivitiesContext";

function App() {
  return (
    <ActivitiesProvider>
      <div className="App">
        <Navbar />
        <ContentActivities />
      </div>
    </ActivitiesProvider>
  );
}

export default App;
