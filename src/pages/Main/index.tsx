import React, {useRef, useState} from 'react';
import styles from './styles.module.css'
import Header from "../../components/Header";
import ListHref from "./ListHref";
import Slider from "../../components/Slider";
import DgisWidget from "../../components/DgisWidget";
import backgroundImage from '../../assets/backgroung1.jpg'
import CookieAttention from "../../components/CookieAttention";


const Main = () => {
	const dgisRef = useRef<HTMLDivElement>(null)
	const [isCookieAttentionVisible, setIsCookieAttentionVisible] = useState(true)

	const hideCookieAttention = () => {
		setIsCookieAttentionVisible(false)
	}

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
			{isCookieAttentionVisible && <CookieAttention onClick={hideCookieAttention}/>}

		</div>
	);
};

export default Main;