import React from 'react';
import styles from './styles.module.css'
import {contentForSlider} from "../../content/bodyContent";
import {Carousel} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'


const Slider = () => {
	return (
		<div className={styles.container}>
			<Carousel interval={5000}>
				{contentForSlider.map(el => (
					<Carousel.Item>
						<img className={styles.carouselImage} src={el.picture} alt='картинка грузовика Урал'/>
						<Carousel.Caption>
							<h1 className={styles.itemTitleText}>{el.title}</h1>
							<h3 className={styles.itemText}>{el.text}</h3>
						</Carousel.Caption>
					</Carousel.Item>
				))}
			</Carousel>
		</div>
	);
};

export default Slider;