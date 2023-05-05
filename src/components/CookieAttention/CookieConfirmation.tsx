import React from 'react';
import styles from './styles.module.css'
import CookieAcceptButton from "./CookieAcceptButton";
import UiCloseButton from "../UI/UICloseButton";


type Props = {
	onClick: () => void
	onMouseLeave: () => void
}

const CookieConfirmation = ({onClick, onMouseLeave}: Props) => {
	return (
		<div className={styles.cookieConfirmation} onClick={onClick} onMouseLeave={onMouseLeave}>
			<CookieAcceptButton/>
			<UiCloseButton onClick={onClick}/>
		</div>
	);
};

export default CookieConfirmation;