import React from 'react';

function TextAreaInput(props: any): JSX.Element {

    return (
        <>
            <div className="form-group">
                <label className="form-label" htmlFor="input-area">
                    Tekstområde med label
                </label>
                <textarea className="form-input" id="input-area" name="input-area" ></textarea>

            </div>
        </>
    );
}

export default TextAreaInput;