import React from 'react';


interface TextInputProps {
    label: string,
    hintText: string | undefined
}

function TextInput(props: TextInputProps): JSX.Element {
    const {label, hintText} = props;

    return (
        <>
            <div className="form-group">
                <label className="form-label" htmlFor="input-type-text">
                    { label }
                </label>
                {hintText !== undefined &&
                    <span className="form-hint" id="input-type-help-text-hint">
                        { hintText }
                    </span>
                }
                <input className="form-input" id="input-type-text" name="input-type-text"
                    type="text" required/>
            </div>
        </>
    );
}

export default TextInput;