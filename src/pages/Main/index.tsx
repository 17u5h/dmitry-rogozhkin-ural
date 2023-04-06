import React from 'react';
import styles from './styles.module.css'
import backgroundImage from "../../img/main-background.jpg"
import Header from "./Header";
import ListHref from "./ListHref";

const Main = () => {
	const mainBackground = {background: `#8396c3 url("${backgroundImage}") no-repeat center`, backgroundSize: 'cover'}

	return (
		<div className={styles.wrapper} style={mainBackground}>
			<div className={styles.container}>
				<Header/>
				<ListHref/>
			</div>
		</div>
	);
};

export default Main;