import React from 'react';

function DatePicker(props: any): JSX.Element {

    return (
        <>
            <div className="form-group">
                <label className="form-label" htmlFor="datepicker-example1">
                    Dato for aftale
                </label>

                <div className="date-picker"><input className="form-input " required
                    id="datepicker-example1" value="2" name="appointment-date1"
                    type="text" /></div>
            </div>
        </>
    );
}

export default DatePicker;