import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

const MobileMenu = ({ isOpen, onDismiss }) => {
    return (
        <DialogOverlay>
            <DialogContent></DialogContent>
        </DialogOverlay>
    );
};

export default MobileMenu;
