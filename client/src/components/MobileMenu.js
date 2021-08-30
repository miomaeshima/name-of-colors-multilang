import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';
import '@reach/dialog/styles.css';
import { NavLink } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import { X } from 'react-feather';
import { refreshPage } from '../utility';
import { COLORS } from '../constants';

const MobileMenu = (props) => {
    let url = window.location.href;
    let isHome = !(
        url.includes('#about') ||
        url.includes('main_color') ||
        url.includes('any_color')
    );
    let styles;
    if (isHome) {
        styles = { borderBottom: '1px solid' };
    }

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
                    <StyledNavHashLink
                        style={styles}
                        smooth
                        to="/#"
                        onClick={props.onDismiss}
                    >
                        Home
                    </StyledNavHashLink>
                    <StyledNavHashLink
                        activeStyle={{ borderBottom: '1px solid' }}
                        smooth
                        to="/#about"
                        onClick={props.onDismiss}
                    >
                        About
                    </StyledNavHashLink>
                    {!props.mainActivated ? (
                        <StyledNavLink
                            activeStyle={{ borderBottom: '1px solid' }}
                            to="/main_color"
                            onClick={props.onDismiss}
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
                            onClick={props.onDismiss}
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
