import React from 'react';
import styles from './styles.module.css'
import {cookieAttentionContent} from "../../content/cookieAttentionContent";
import UiCloseButton from "../UI/UICloseButton";

type Props = {
	onClick: () => void
	onMouseEnter: () => void
}

const CookieAttention = ({onClick, onMouseEnter}: Props) => {
	return (
		<div className={styles.cookieAttention} onMouseEnter={onMouseEnter}>
			<p className={styles.text}>{cookieAttentionContent}</p>
			<UiCloseButton onClick={onClick}/>
		</div>
	);
};

export default CookieAttention;