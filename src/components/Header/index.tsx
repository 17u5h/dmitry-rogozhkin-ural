import React from 'react';
import styles from './styles.module.css'
import {
	companyPhone,
	companySchedule,
	companyHeaderTitle,
	telegramLink, companyAddressHeader
} from "../../content/contactsContent";
import TelegramLogo from "../TelegramLogo";
import companyLogo from "../../assets/company-logo.png";

type Props = {
	onClick: () => void
}

const Header = ({onClick}: Props) => {

	return (
		<div className={styles.headerContainer}>
			<div className={styles.companyLogoContainer}>
				<img src={companyLogo} alt='company logo' className={styles.companyLogoPicture}/>
				<p className={styles.headerTitle}>{companyHeaderTitle}</p>
			</div>

			<p className={styles.headerAddress} onClick={onClick}>{companyAddressHeader}</p>
			<p className={styles.headerSchedule}>{companySchedule}</p>
			<div className={styles.headerContacts}>
				<p><a className={styles.headerTelephone} href='tel:+73822211670'>{companyPhone}</a></p>
				<p><a href={telegramLink}><TelegramLogo/></a></p>
			</div>
		</div>
	);
};

export default Header;