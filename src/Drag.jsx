import React from 'react';
import Dynamic from './Dynamic'
const Drag = () => {
    const [test, setTest] = React.useState([]);
    React.useEffect(() => {
        setTest([<div style={{ color: 'green' }}>Hello World</div>])
    }, [])

    const TextField = <div style={{ marginTop: '25px', fontWeight: '600' }}>
        <input ></input>
        <span style={{ color: '#888' }}>(required)</span>
        <div className="textbox">
            <input type="text" class="form-control" placeholder="Title" aria-label="Username" aria-describedby="basic-addon1" />
        </div>
    </div>

    const addtextField = () => {
        let text = test.slice();
        text.push(TextField)
        setTest(text)
    }
    const [sub, setSub] = React.useState();
    const submitData = () => {
        setSub(test)
    }
    return (
        <div>
            <Dynamic />
            {/* {test.map((i) => {
                return <div> {i}</div>
            })}
            <button onClick={addtextField}>
                Add Text  field
            </button>
            <button onClick={submitData}>submit</button>
            {
                sub &&
                <div>{sub.map((j) => {
                    return <div>{j}</div>
                })} </div>
            } */}

        </div>
    )
}
export default Drag

