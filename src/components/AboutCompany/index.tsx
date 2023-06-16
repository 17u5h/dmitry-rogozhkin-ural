import React from 'react';
import styles from './styles.module.css'
import {aboutCompany} from "../../content/bodyContent";


const AboutCompany = () => {
	return (
		<div className={styles.aboutContainer}>
			{aboutCompany.map(el => (
				<p className={styles.aboutTopic}>{el.topic}</p>
			))}
		</div>
	);
};

export default AboutCompany;