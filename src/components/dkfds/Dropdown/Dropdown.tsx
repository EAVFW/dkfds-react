import React from 'react'

interface DropdownProps {
    label: string
}

function Dropdown(props: any) {
    const { label } = props
    return (
        <>
            <form noValidate className="form mb-7 input-width-m">
                <div className="form-group ">
                    <label className="form-label" htmlFor="options">
                        { label }
                    </label>
                    <select className=" form-select" name="options" id="options">
                        <option value="option1">Mulighed 1</option>
                        <option value="option2">Mulighed 2</option>
                        <option value="option3">Mulighed 3</option>
                    </select>
                </div>
            </form>
        </>
    )
}

export default Dropdown;