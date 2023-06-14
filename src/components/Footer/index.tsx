import React from 'react';
import styles from './styles.module.css'
import {
	companyPhone,
	companySchedule,
	companyFooterTitle, companyAddressFooter, companyCellPhone, telegramLink
} from "../../content/contactsContent";
import TelegramLogo from "../TelegramLogo";

type Props = {
	onClick: () => void
}

const Footer = ({onClick}: Props) => {
	return (
		<div className={styles.footerContainer}>
			<p>{companyFooterTitle}</p>
			<p className={styles.footerAddress} onClick={onClick}>{companyAddressFooter}</p>
			<p>{companySchedule}</p>
			<p><a className={styles.footerTelephone} href='tel:+73822211670'>{companyPhone}</a></p>
			<div className={styles.cellPhoneBlock}>
				<p><a className={styles.footerTelephone} href='tel:+7'>{companyCellPhone}</a></p>
				<p><a href={telegramLink}><TelegramLogo/></a></p>
			</div>
		</div>
	);
};

export default Footer;