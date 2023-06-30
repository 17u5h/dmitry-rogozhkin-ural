import React from 'react';
import styles from './styles.module.css'
import {
	companyPhone,
	companySchedule,
	companyHeaderTitle,
	telegramLink, companyAddressHeader, companyCellPhone, companyCellPhoneLink, companyPhoneLink
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
				<p><a className={styles.headerTelephone} href={companyPhoneLink}>{companyPhone}</a></p>
				<div className={styles.cellPhoneBlock}>
					<p><a className={styles.headerTelephone} href={companyCellPhoneLink}>{companyCellPhone}</a></p>
					<p><a href={telegramLink}><TelegramLogo size={40}/></a></p>
				</div>
			</div>
		</div>
	);
};

export default Header;