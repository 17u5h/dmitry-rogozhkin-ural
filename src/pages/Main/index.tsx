import React from 'react';
import styles from './styles.module.css'
import Header from "../../components/Header";
import ListHref from "./ListHref";
import Slider from "../../components/Slider";
import DgisWidget from "../../components/DgisWidget";


const Main = () => {

	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<Header/>
				<ListHref/>
				<Slider/>
				<DgisWidget/>

			</div>
		</div>
	);
};

export default Main;