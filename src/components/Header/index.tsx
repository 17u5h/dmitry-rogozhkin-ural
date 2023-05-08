import React from 'react';
import styles from './styles.module.css'
import {companyAddress, companyPhone, companySchedule, companyHeaderTitle} from "../../content/contactsContent";
import TelegramLogo from "../TelegramLogo";

type Props = {
	onClick: () => void
}

const Header = ({onClick}: Props) => {

	return (
		<div className={styles.headerContainer}>
			<p className={styles.headerTitle}>{companyHeaderTitle}</p>
			<p className={styles.headerAddress} onClick={onClick}>{companyAddress}</p>
			<p className={styles.headerSchedule}>{companySchedule}</p>
			<div className={styles.headerContacts}>
				<p><a className={styles.headerTelephone} href='tel:+73822211670'>{companyPhone}</a></p>
				<p><a href='https://t.me/DmitriyTomsk'><TelegramLogo/></a></p>
			</div>
		</div>
	);
};

export default Header;