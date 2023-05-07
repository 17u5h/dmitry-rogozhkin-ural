import React from 'react';
import styles from './styles.module.css'
import {headerAddress, headerPhone, headerSchedule, headerTitle} from "../../content/contactsContent";

type Props = {
	onClick: () => void
}

const Footer = ({onClick}: Props) => {
	return (
		<div className={styles.footerContainer}>
			<p>{headerTitle}</p>
			<p className={styles.footerAddress} onClick={onClick}>{headerAddress}</p>
			<p>{headerSchedule}</p>
			<p><a className={styles.footerTelephone} href='tel:+73822211670'>{headerPhone}</a></p>
		</div>
	);
};

export default Footer;