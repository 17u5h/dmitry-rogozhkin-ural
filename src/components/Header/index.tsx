import React from 'react';
import styles from './styles.module.css'
import headerImage from "../../assets/header.jpg"
import {headerAddress, headerPhone, headerSchedule, headerTitle} from "../../content/headerContent";

type Props = {
	onClick: () => void
}

const Header = ({onClick}: Props) => {
	const background = {backgroundImage: `url("${headerImage}")`, backgroundSize: 'cover'}

	return (
		<div className={styles.headerContainer} >

				<p className={styles.headerTitle}>{headerTitle}</p>
				<p className={styles.headerCity} onClick={onClick}>{headerAddress}</p>
				<p className={styles.headerContacts}>{headerSchedule}</p>
				<p><a className={styles.headerTelephone} href='tel:+73822211670'>{headerPhone}</a></p>
		</div>
	);
};

export default Header;