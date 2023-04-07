import React from 'react';
import styles from './styles.module.css'
import headerImage from "../../assets/header.jpg"
import {headerAddress, headerPhone, headerSchedule, headerTitle} from "../../content/headerContent";

const Header = () => {
	const background = {backgroundImage: `url("${headerImage}")`, backgroundSize: 'cover'}

	return (
		<div className={styles.headerContainer} style={background}>
			<div className={styles.headerDescription}>
				<p className={styles.headerTitle}>{headerTitle}</p>
				<p className={styles.headerCity}>{headerAddress}</p>
				<p className={styles.headerContacts}>{headerSchedule}</p>
				<p className={styles.headerContacts}>{headerPhone}</p>
			</div>
		</div>
	);
};

export default Header;