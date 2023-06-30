import React from 'react';
import styles from './styles.module.css'
import {
	companyPhone,
	companySchedule,
	companyFooterTitle, companyAddressFooter, companyCellPhone, telegramLink, companyCellPhoneLink, companyPhoneLink
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
			<p><a className={styles.footerTelephone} href={companyPhoneLink}>{companyPhone}</a></p>
			<div className={styles.cellPhoneBlock}>
				<p><a className={styles.footerTelephone} href={companyCellPhoneLink}>{companyCellPhone}</a></p>
				<p><a href={telegramLink}><TelegramLogo size={20}/></a></p>
			</div>
		</div>
	);
};

export default Footer;