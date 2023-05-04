import React from 'react';
import styles from './styles.module.css'
import CookieAcceptButton from "./CookieAcceptButton";


type Props = {
	onClick: () => void
	onMouseLeave: () => void
}

const CookieConfirmation = ({onClick, onMouseLeave}: Props) => {
	return (
		<div className={styles.cookieConfirmation} onClick={onClick} onMouseLeave={onMouseLeave}>
			<CookieAcceptButton/>
		</div>
	);
};

export default CookieConfirmation;