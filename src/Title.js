import React, { Component, PropTypes } from 'react';
// import ReactRichEditor from 'react-rich-text-editor'

const Title = () => {
    return (
        <div>
            <div style={{ marginTop: '25px', fontWeight: '600' }}>Title <span style={{ color: '#888' }}>(required)</span>
                <div className="textbox">
                    <input type="text" class="form-control" placeholder="Title" aria-label="Username" aria-describedby="basic-addon1" />

                </div>
                {/* <div>
                    <ReactRichEditor
                        value="hello"
                    // onChange={this.onChange}
                    />
                </div> */}
            </div>
            <div style={{ marginTop: '25px', fontWeight: '600' }}>Describe your contribution in one sentence <span style={{ color: '#888' }}>(required)</span>
                <div className="textbox">
                    <input type="text" class="form-control" placeholder="Title" aria-label="Username" aria-describedby="basic-addon1" />

                </div>
            </div>
            <div style={{ marginTop: '25px', fontWeight: '600' }}>Solution Title <span style={{ color: '#888' }}>(required)</span>
                <div className="textbox">
                    <input type="text" class="form-control" placeholder="Title" aria-label="Username" aria-describedby="basic-addon1" />

                </div>
            </div>
            <div style={{ marginTop: '25px', fontWeight: '600' }}>Solution Summary <span style={{ color: '#888' }}>(required)</span>
                <div className="textbox">
                    <input type="text" class="form-control" placeholder="Title" aria-label="Username" aria-describedby="basic-addon1" />

                </div>
            </div>
        </div>
    )
}
export default Title;