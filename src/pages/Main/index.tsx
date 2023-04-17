import React from 'react';
import styles from './styles.module.css'
import Header from "../../components/Header";
import ListHref from "./ListHref";
import Slider from "../../components/Slider";
import DgisWidget from "../../components/DgisWidget";
import backgroundImage from '../../assets/backgroung1.jpg'


const Main = () => {


	return (
		<div className={styles.wrapper} style={{background: `#111 url("${backgroundImage}") no-repeat center`, backgroundSize: 'cover'}}>
			<Header/>
			<div className={styles.container}>

				<Slider/>
				<DgisWidget/>
				<ListHref/>

			</div>
		</div>
	);
};

export default Main;