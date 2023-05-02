import React from 'react';
import styles from './styles.module.css'
import {headerAddress, headerPhone, headerSchedule, headerTitle} from "../../content/headerContent";
import TelegramLogo from "../TelegramLogo/TelegramLogo";

type Props = {
	onClick: () => void
}

const Header = ({onClick}: Props) => {

	return (
		<div className={styles.headerContainer}>
			<p className={styles.headerTitle}>{headerTitle}</p>
			<p className={styles.headerAddress} onClick={onClick}>{headerAddress}</p>
			<p className={styles.headerSchedule}>{headerSchedule}</p>
			<div className={styles.headerContacts}>
				<p><a className={styles.headerTelephone} href='tel:+73822211670'>{headerPhone}</a></p>
				<p><a href='https://t.me/DmitriyTomsk'><TelegramLogo/></a></p>
			</div>
		</div>
	);
};

export default Header;