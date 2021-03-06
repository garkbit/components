import React, { ReactElement } from 'react';
import clsx from 'clsx';
import Typography from '../../../Typography';
import { Props } from './types';


function PlaceholderTitle({
    className,
    children,
}: Props): ReactElement {


    const placeholderClasses = clsx(
        'brew-Placeholder__title',
        className,
    );


    return (
        <Typography className={placeholderClasses} shouldTruncate variant="h1" color="tertiary">
            {children}
        </Typography>
    );


}


export default PlaceholderTitle;
