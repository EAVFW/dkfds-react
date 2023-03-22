import React, {useState} from 'react'

interface RadioButtonProps {
    options: string[]
    label: string,
    setChoice: React.Dispatch<React.SetStateAction<string>>
}

function Radio(props: RadioButtonProps) {
    const { options, label, setChoice } = props

    const formId = Math.floor(Math.random()*99999);
    const [chosenOption, setChosenOption] = useState("None chosen");
    let safeString = (s: string) => s.replaceAll(" ", "-");

    return (
        <>
            <div className="form-group">
                <fieldset>
                    <legend className="form-label">{ label }</legend>
                    <ul className="nobullet-list">
                        {options.map( option => 
                        (
                        <li key={safeString(option)}>
                            <div className="form-group-radio">
                                <input id={safeString(option)} type="radio" name={"radio" + formId}
                                    value={safeString(option)} className="form-radio radio-large " 
                                    onChange={(e) => setChoice(e.target.value)} />
                                <label htmlFor={safeString(option)} id="form-label-radio-1"
                                    className="">{option}</label>

                            </div>
                        </li>
                        ))}
                    </ul>
                </fieldset>
            </div>
        </>
    );
}

export default Radio;