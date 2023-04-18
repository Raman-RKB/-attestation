/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React, { useContext, useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import "uikit/dist/css/uikit.min.css";
import {
    ActiveItemPopup,
    ButtonPopupItemContainer,
    FilterButtonContainer,
    UkBadge,
    ButtonPopup,
    FilterButton,
    LabelPopup
} from '../css/centerBlockStyle';
import { ThemeContext } from '../../../ThemeContext';

const Filterbutton = (props) => {
    const { theme } = useContext(ThemeContext);
    const [activePopup, setActivePopup] = useState(null);
    const [selectedItems, setSelectedItems] = useState(0);
    const [activePosition, setActivePosition] = useState([]);
    const [selectedButton, setSelectedButton] = useState("");

    const buttonRef = useRef(null);
    const popupRef = useRef(null);

    const handlePopupItemClick = (index) => {

        if (activePosition.includes(index)) {
            setActivePosition(activePosition.filter((pos) => pos !== index));
            setSelectedItems(selectedItems - 1);
        } else {
            setActivePosition([...activePosition, index]);
            setSelectedItems(selectedItems + 1);
        }
    };


    const handleClick = (e) => {
        const propsText = props.text
        const popupId = e.target.dataset.popupId;
        if (popupId === activePopup) {
            setActivePopup(null);
            setSelectedButton(propsText);
        } else {
            setActivePopup(popupId);
        }
    };

    const handleDocumentClick = (e) => {
        if (activePopup &&
            popupRef.current &&
            !popupRef.current.contains(e.target) &&
            e.target !== buttonRef.current) {
            setActivePopup(null);
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleDocumentClick);

        return () => {
            document.removeEventListener("click", handleDocumentClick);
        };
    }, [activePopup]);

    const renderModal = () => {
        if (activePopup) {
            const buttonRect = buttonRef.current.getBoundingClientRect();
            const popupHeight = 305;

            let top = buttonRect.bottom;
            if (top + popupHeight > window.innerHeight) {
                top = buttonRect.top - popupHeight;
            }

            const style = {
                position: "absolute",
                top: `${top + 4}px`,
                left: `${buttonRect.left}px`,
                zIndex: "999"
            };

            let content;
            if (props.class.includes("button-author")) {
                content = (
                    <ButtonPopupItemContainer theme={theme === 'dark' ? '#FFFFFF' : '#000000'}>
                        <ActiveItemPopup
                            color={activePosition.includes(0) ? '#ad61ff' : ''}
                            underline={activePosition.includes(0) ? 'underline' : ''}
                            onClick={() => handlePopupItemClick(0)}>Michael Jackson</ActiveItemPopup>
                        <ActiveItemPopup
                            color={activePosition.includes(1) ? '#ad61ff' : ''}
                            underline={activePosition.includes(1) ? 'underline' : ''}
                            onClick={() => handlePopupItemClick(1)}>Frank Sinatra</ActiveItemPopup>
                        <ActiveItemPopup
                            color={activePosition.includes(2) ? '#ad61ff' : ''}
                            underline={activePosition.includes(2) ? 'underline' : ''}
                            onClick={() => handlePopupItemClick(2)}>Calvin Harris</ActiveItemPopup>
                        <ActiveItemPopup
                            color={activePosition.includes(3) ? '#ad61ff' : ''}
                            underline={activePosition.includes(3) ? 'underline' : ''}
                            onClick={() => handlePopupItemClick(3)}>Zhu</ActiveItemPopup>
                        <ActiveItemPopup
                            color={activePosition.includes(4) ? '#ad61ff' : ''}
                            underline={activePosition.includes(4) ? 'underline' : ''}
                            onClick={() => handlePopupItemClick(4)}>Arctic Monkeys</ActiveItemPopup>
                    </ButtonPopupItemContainer >
                );
            } else if (props.class.includes("button-genre")) {
                content = (
                    <ButtonPopupItemContainer theme={theme === 'dark' ? '#FFFFFF' : '#000000'}>
                        <ActiveItemPopup
                            color={activePosition.includes(5) ? '#ad61ff' : ''}
                            underline={activePosition.includes(5) ? 'underline' : ''}
                            onClick={() => handlePopupItemClick(5)}>Рок</ActiveItemPopup>
                        <ActiveItemPopup
                            color={activePosition.includes(6) ? '#ad61ff' : ''}
                            underline={activePosition.includes(6) ? 'underline' : ''}
                            onClick={() => handlePopupItemClick(6)}>Hip-Hop</ActiveItemPopup>
                        <ActiveItemPopup
                            color={activePosition.includes(7) ? '#ad61ff' : ''}
                            underline={activePosition.includes(7) ? 'underline' : ''}
                            onClick={() => handlePopupItemClick(7)}>Поп-музыка</ActiveItemPopup>
                        <ActiveItemPopup
                            color={activePosition.includes(8) ? '#ad61ff' : ''}
                            underline={activePosition.includes(8) ? 'underline' : ''}
                            onClick={() => handlePopupItemClick(8)}>Техно</ActiveItemPopup>
                        <ActiveItemPopup
                            color={activePosition.includes(9) ? '#ad61ff' : ''}
                            underline={activePosition.includes(9) ? 'underline' : ''}
                            onClick={() => handlePopupItemClick(9)}>Инди</ActiveItemPopup>
                    </ButtonPopupItemContainer>
                );
            } else if (props.class.includes("button-year")) {
                content = (
                    <>
                        <input type="radio" name="year" />
                        <LabelPopup
                            htmlFor="new"
                            theme={theme === 'dark' ? '#ffffff' : '#000000'}
                        >Более новые</LabelPopup >

                        <input type="radio" name="year" />
                        <LabelPopup
                            htmlFor="old"
                            theme={theme === 'dark' ? '#ffffff' : '#000000'}
                        >Более старые</LabelPopup>
                    </>
                );
            }

            return ReactDOM.createPortal(
                <ButtonPopup
                    theme={theme === 'dark' ? '#313131' : '#B1B1B1'}
                    width={props.class.includes("button-year") ? '403px' : '248px'}
                    height={props.class.includes("button-year") ? '92px' : '305px'}
                    fontsize={props.class.includes("button-year") ? '20px' : ''}
                    display={props.class.includes("button-year") ? 'flex' : ''}
                    alignitems={props.class.includes("button-year") ? 'center' : ''}
                    justifycontent={props.class.includes("button-year") ? 'space-around' : ''}
                    ref={popupRef} style={style}>
                    {content}
                </ButtonPopup>,
                document.body
            );
        }
        return null;
    };

    return (
        <FilterButtonContainer>
            <FilterButton
                theme={theme === 'dark' ? '#FFFFFF' : '#000000'}
                themeHover={theme === 'dark' ? '#D9B6FF' : '#580EA2'}
                themeActive={theme === 'dark' ? '#AD61FF' : '#AD61FF'}
                onClick={handleClick}
                data-popup-id={props.popupId}
                ref={buttonRef}>
                {props.text}
                {selectedItems > 0 ? (
                    <UkBadge className="uk-badge">
                        {selectedItems}
                    </UkBadge>
                ) : null}
            </FilterButton>
            {renderModal()}
        </FilterButtonContainer>
    );
};

export default Filterbutton;
