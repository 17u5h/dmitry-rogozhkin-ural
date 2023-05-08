import React from 'react';
import styles from './styles.module.css'
import {
	companyAddress,
	companyPhone,
	companySchedule,
	companyFooterTitle
} from "../../content/contactsContent";

type Props = {
	onClick: () => void
}

const Footer = ({onClick}: Props) => {
	return (
		<div className={styles.footerContainer}>
			<p>{companyFooterTitle}</p>
			<p className={styles.footerAddress} onClick={onClick}>{companyAddress}</p>
			<p>{companySchedule}</p>
			<p><a className={styles.footerTelephone} href='tel:+73822211670'>{companyPhone}</a></p>
		</div>
	);
};

export default Footer;