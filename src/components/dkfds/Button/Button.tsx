import React from 'react'
import {IconsProvider, Icon} from '../../Icons';


export enum ButtonVariantType {
    primary="button-primary",
    secondary="button-secondary",
    tertiary="button-tertiary",
    unstyled="button-quaternary",
}
  
interface ButtonProps {
    variant: ButtonVariantType
    icon: string,
    iconOnly: boolean,
    children: any
}

export const Button = ({variant=ButtonVariantType.primary, icon, iconOnly=false, children}: ButtonProps) => {

return (
    <>
    <IconsProvider/>
    <button className={"button " + (iconOnly ? ButtonVariantType.unstyled : variant)}>
        {
            icon ? <Icon icon={icon} /> : <></>
        }
        {
            iconOnly ? <span className="sr-only">icon</span> : children
        }
        
    </button>
    </>
    );
}
