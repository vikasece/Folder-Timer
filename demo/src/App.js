
import './App.css';
import Folder from './components/folder';
import Timer from './components/timer';
import { explorer } from './data/folderData';

function App() {
 
  return (
    <div className="App">
   
    {/* <Timer /> */}
    <Folder explorer={explorer}  />
    </div>
  );
}

export default App;
