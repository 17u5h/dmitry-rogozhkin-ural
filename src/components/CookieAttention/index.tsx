import React from 'react';
import styles from './styles.module.css'
import {cookieAttentionContent} from "../../content/cookieAttentionContent";
import UiCloseButton from "../UI/UICloseButton";

type Props = {
	onClick: () => void
}

const CookieAttention = ({onClick}: Props) => {
	return (
		<div className={styles.container}>
			<p className={styles.text}>{cookieAttentionContent}</p>
			<UiCloseButton onClick={onClick}/>
		</div>
	);
};

export default CookieAttention;