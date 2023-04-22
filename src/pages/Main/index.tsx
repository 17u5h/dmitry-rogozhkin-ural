import React, {useRef} from 'react';
import styles from './styles.module.css'
import Header from "../../components/Header";
import ListHref from "./ListHref";
import Slider from "../../components/Slider";
import DgisWidget from "../../components/DgisWidget";
import backgroundImage from '../../assets/backgroung1.jpg'
import {NOOP} from "../../lib/NOOP";


const Main = () => {
	const dgisRef = useRef<HTMLDivElement>(null)
	const focusDgisHandler = () => {

		dgisRef.current?.scrollIntoView({block: "center", inline: "nearest", behavior: "smooth"})
	}
	return (
		<div className={styles.wrapper} style={{background: `#111 url("${backgroundImage}") no-repeat center`, backgroundSize: 'cover'}}>
			<Header onClick={focusDgisHandler}/>
			<div className={styles.container}>

				<Slider/>
				<DgisWidget ref={dgisRef}/>
				<ListHref />

			</div>
		</div>
	);
};

export default Main;