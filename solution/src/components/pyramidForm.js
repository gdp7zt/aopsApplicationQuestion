import React from "react";
import './pyramidForm.css';

function PyramidForm(props) {

    function handleChange(event, row, col){
        //Build a temp pyramid that we can update with the changed value and then set our pyramid value to the new pyramid.
        const newPyramid = [...props.pyramid];
        newPyramid[row][col] = event.target.value;
        props.setPyramid(newPyramid);
    }

    function addRow(){
        //Add a row to the bottom that is 1 longer than the previous row length and autofill with 1s
        props.setPyramid([...props.pyramid, new Array(props.pyramid.length + 1).fill(1)])
    }

    function removeRow(){
        //Remove the bottom row of the pyramid
        props.setPyramid(props.pyramid.slice(0, props.pyramid.length - 1));
    }

    return (
        <div>
            <div className="pyramid">
                {props.pyramid.map((row, i) => (
                    <div className='row' key={i}>
                        {row.map((col, j) => (
                            <input type="number" key={j} value={col} onChange={(e) => handleChange(e,i,j)}/>
                        ))}
                    </div>
                ))}
            </div>
            <div className="buttons">
                <button onClick = {() => addRow()}>Add row</button>
                <button onClick = {() => removeRow()}>Remove row</button>
            </div>
            <div className="target">
                <label htmlFor='target'>Target: </label>
                <input type='number' onChange={(e) => props.setTarget(e.target.value)} id='target' defaultValue='720'></input>
            </div>
        </div>
    )
}

export default PyramidForm;