import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';
import "@reach/dialog/styles.css";

const MobileMenu = ({ isOpen, onDismiss }) => {
    return (
        <DialogOverlay isOpen={isOpen} onDismiss={onDismiss}>
            <DialogContent>
                <p>Moldal</p>
                <button onClick={onDismiss}>Close</button>
            </DialogContent>
        </DialogOverlay>
    );
};

export default MobileMenu;
