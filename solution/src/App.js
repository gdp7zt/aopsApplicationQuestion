import './App.css';
import React, {useState} from "react";
import PyramidForm from "./components/pyramidForm";
import solvePyramid from './components/solvePyramid';

function App() {
  const [pyramid, setPyramid] = useState([[2], [4,3],[3,2,6],[2,9,5,2],[10,5,2,15,5]]);
  const [path, setPath] = useState([]);
  const [target, setTarget] = useState(720);

  return (
    <div>
      <PyramidForm pyramid={pyramid} setPyramid={setPyramid} setTarget={setTarget}/>
      <div className="solve"><button onClick = {() => setPath(solvePyramid(pyramid, target, path, setPath))} id='solveButton'>Solve!</button></div>
      <div className="solution">
        <div className='hidden'>Solution: {path}</div>
      </div>
    </div>
  );
}

export default App;
