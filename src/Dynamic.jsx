import React from 'react'
const Dynamic = () => {
    let test = {
        name: "",
        shareholders: [{ name: "" }]
    }
    const [state, setState] = React.useState(test)
    const handleNameChange = evt => {
        setState({ name: evt.target.value });
    };

    const handleShareholderNameChange = idx => evt => {
        const newShareholders = state.shareholders.map((shareholder, sidx) => {
            if (idx !== sidx) return shareholder;
            return { ...shareholder, name: evt.target.value };
        });

        setState({ shareholders: newShareholders });
    };

    const handleSubmit = evt => {
        console.log(state)
        const { name, shareholders } = state;
        evt.preventDefault()
        // alert(`Incorporated: ${name} with ${shareholders.length} shareholders`);
    };

    const handleAddShareholder = () => {
        setState({
            shareholders: state.shareholders.concat([{ name: "" }])
        });
    };

    const handleRemoveShareholder = idx => () => {
        setState({
            shareholders: state.shareholders.filter((s, sidx) => idx !== sidx)
        });
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder=""
                    value={state.name}
                    onChange={handleNameChange}
                />

                <h4>Textfiled</h4>

                {state.shareholders.map((shareholder, idx) => (
                    <div className="shareholder">
                        <input
                            type="text"
                            placeholder={`Textfield #${idx + 1} name`}
                            value={shareholder.name}
                            onChange={handleShareholderNameChange(idx)}
                        />
                        <button
                            type="button"
                            onClick={handleRemoveShareholder(idx)}
                            className="small"
                        >
                            -
            </button>
                    </div>
                ))}
                <button
                    type="button"
                    onClick={handleAddShareholder}
                    className="small"
                >
                    Add text
        </button>
                <button>Submit</button>
            </form>
        </div>
    )
}
export default Dynamic