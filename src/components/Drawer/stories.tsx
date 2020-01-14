import React, { ReactElement } from 'react';
import { boolean, select } from '@storybook/addon-knobs';
import Drawer from './index';


export default {
    Component: Drawer,
    title: 'Components|Display/Drawer',
};


export const general = (): ReactElement => {
    const anchorFrom = select('anchorFrom', ['top', 'right', 'bottom', 'left'], 'left');
    const isOpen = boolean('isOpen', false);


    return (
        <Drawer anchorFrom={anchorFrom} isOpen={isOpen}>
            <div>
                <div>Example Title</div>
                <div>Example SubTitle</div>
            </div>
            <div>item</div>
        </Drawer>
    );
};
