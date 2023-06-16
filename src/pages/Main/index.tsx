import React, {useRef, useState} from 'react';
import styles from './styles.module.css'
import Header from "../../components/Header";
import ListHref from "./ListHref";
import Slider from "../../components/Slider";
import DgisWidget from "../../components/DgisWidget";
import backgroundImage from '../../assets/backgroung-blurred.jpg'
import CookieAttention from "../../components/CookieAttention";
import CookieConfirmation from "../../components/CookieAttention/CookieConfirmation";
import Footer from "../../components/Footer";
import AboutCompany from "../../components/AboutCompany";


const Main = () => {
	const dgisRef = useRef<HTMLDivElement>(null)
	const [isCookieAttentionVisible, setIsCookieAttentionVisible] = useState(true)
	const [isCookieConfirmationVisible, setIsCookieConfirmationVisible] = useState(false)

	const hideCookieAttention = () => {
		setIsCookieAttentionVisible(false)
		setIsCookieConfirmationVisible(false)
	}
	const showCookieConfirmation = () => {
		setIsCookieAttentionVisible(false)
		setIsCookieConfirmationVisible(true)
	}
	const hideCookieConfirmation = () => {
		setIsCookieAttentionVisible(true)
		setIsCookieConfirmationVisible(false)
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
				<ListHref/>
				<AboutCompany/>
			</div>
			<Footer onClick={focusDgisHandler}/>
			{isCookieAttentionVisible &&
				<CookieAttention onClick={hideCookieAttention} onMouseEnter={showCookieConfirmation}/>}
			{isCookieConfirmationVisible &&
				<CookieConfirmation onClick={hideCookieAttention} onMouseLeave={hideCookieConfirmation}/>}
		</div>
	);
};

export default Main;