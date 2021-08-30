import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';
import '@reach/dialog/styles.css';
import { NavLink } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import { X } from 'react-feather';
import { refreshPage } from '../utility';
import { COLORS } from '../constants';

const MobileMenu = (props) => {
    return (
        <DialogOverlay
            isOpen={props.isOpen}
            onDismiss={props.onDismiss}
            style={{ background: 'rgba(255, 255, 255, 0.8)' }}
        >
            <StyledDialogContent aria-label="Modal">
                <StyledX
                    size={'1.5rem'}
                    strokeWidth={2}
                    onClick={props.onDismiss}
                    tabIndex={0}
                />
                <NavLinkWrapper>
                    <StyledNavLink
                        activeStyle={{ borderBottom: '1px solid' }}
                        exact
                        to="/"
                    >
                        Home
                    </StyledNavLink>
                    <StyledNavHashLink
                        smooth
                        activeStyle={{ borderBottom: '1px solid' }}
                        to="/#about"
                    >
                        About
                    </StyledNavHashLink>
                    {!props.mainActivated ? (
                        <StyledNavLink
                            activeStyle={{ borderBottom: '1px solid' }}
                            to="/main_color"
                        >
                            MainColor
                        </StyledNavLink>
                    ) : (
                        <FakeStyledNavLink
                            onClick={() => {
                                props.onDismiss();
                                refreshPage(
                                    props.setPreviewPic,
                                    props.setBackgroundColor,
                                    props.setPicSrc,
                                    props.setColorData
                                );
                            }}
                        >
                            MainColor
                        </FakeStyledNavLink>
                    )}

                    {!props.anyActivated ? (
                        <StyledNavLink
                            activeStyle={{ borderBottom: '1px solid' }}
                            to="/any_color"
                        >
                            AnyColor
                        </StyledNavLink>
                    ) : (
                        <FakeStyledNavLink
                            onClick={() => {
                                props.onDismiss();
                                refreshPage(
                                    props.setPreviewPic,
                                    props.setBackgroundColor,
                                    props.setPicSrc,
                                    props.setColorData,
                                    props.setColorArray,
                                    props.setAjustment,
                                    props.setOriginalColor
                                );
                            }}
                        >
                            AnyColor
                        </FakeStyledNavLink>
                    )}
                </NavLinkWrapper>{' '}
            </StyledDialogContent>
        </DialogOverlay>
    );
};

const StyledDialogContent = styled(DialogContent)`
    width: 70%;
    height: 100%;
    position: fixed;
    top: 0;
    right: 0;
    margin-top: 0;
    padding: 48px;
    padding-bottom: 120px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    background: white;
    color: ${COLORS.Blue};
    font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir,
        segoe ui, helvetica neue, helvetica, Ubuntu, roboto, noto, arial,
        sans-serif;
`;

const StyledNavLink = styled(NavLink)`
    width: fit-content;
    text-decoration: none;
    color: inherit;
`;

const FakeStyledNavLink = styled.div`
    width: fit-content;
    border-bottom: 1px solid;
    cursor: PointerEvent;
`;

const StyledNavHashLink = styled(NavHashLink)`
    width: fit-content;
    text-decoration: none;
    color: inherit;
`;

const StyledX = styled(X)`
    position: fixed;
    top: 8px;
    right: 8px;
`;

const NavLinkWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 48px;
    font-size: 1.2rem;
`;

export default MobileMenu;
