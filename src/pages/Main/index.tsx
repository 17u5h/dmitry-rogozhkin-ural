import React from 'react';
import styles from './styles.module.css'
import backgroundImage from "../../assets/main-background.jpg"
import Header from "../../components/Header";
import ListHref from "./ListHref";
import Slider from "../../components/Slider";

const Main = () => {
	const mainBackground = {background: `#8396c3 url("${backgroundImage}") no-repeat center`, backgroundSize: 'cover'}

	return (
		<div className={styles.wrapper} style={mainBackground}>
			<div className={styles.container}>
				<Header/>
				<ListHref/>
				<Slider/>
			</div>
		</div>
	);
};

export default Main;