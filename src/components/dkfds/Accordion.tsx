import exp from 'constants';
import React, { useState } from 'react';

interface AccordionProps {
    title: string,
    text: string
}

const defaultAccordionProps: AccordionProps = {
    title: "Test text",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
    do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
    ullamco laboris nisi ut aliquip ex ea commodo consequat.`
}

function Accordion(props: AccordionProps): JSX.Element {
    const { title, text } = props
    const [expanded, setExpanded] = useState(true)
    return (
        <>
            <ul className="accordion accordion-multiselectable">
                <li>
                    <h2><button
                        className="accordion-button"
                        aria-expanded={expanded}
                        aria-controls="a1"
                        onClick={(e) => setExpanded(!expanded)}>
                        { title }
                        <span className="accordion-icon">
                            <span className="icon_text">Information</span>
                            <svg className="icon-svg" aria-hidden="true"></svg>
                        </span>
                    </button></h2>
                    <div id="a1" aria-hidden={!expanded} className="accordion-content">
                        <p>{text} </p>
                    </div>
                </li>
            </ul>
        </>
    );
}

Accordion.defaultProps = defaultAccordionProps;

export default Accordion;