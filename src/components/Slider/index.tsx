import React from 'react';
import styles from './styles.module.css'
import {topic1, topic2, topic3, topic4, topic5, topic6} from "../../content/bodyContent";
import uralPic1 from '../../assets/1655288998_2-celes-club-p-ural-gruzovik-mashini-krasivo-foto-2.jpg'
import uralPic2 from '../../assets/1655289001_4-celes-club-p-ural-gruzovik-mashini-krasivo-foto-4.jpg'
import uralPic3 from '../../assets/1655289033_13-celes-club-p-ural-gruzovik-mashini-krasivo-foto-14.jpg'
import uralPic4 from '../../assets/1655289076_1-celes-club-p-ural-gruzovik-mashini-krasivo-foto-1.jpg'
import uralPic5 from '../../assets/1655289080_6-celes-club-p-ural-gruzovik-mashini-krasivo-foto-6.jpg'
import uralPic6 from '../../assets/1655289097_16-celes-club-p-ural-gruzovik-mashini-krasivo-foto-17.jpg'
import {Carousel} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'


const Slider = () => {
	return (
		<div className={styles.container}>
			<Carousel interval={4000}>
				<Carousel.Item>
					<img className={styles.carouselImage} src={uralPic1} alt='ural'/>
					<Carousel.Caption>
						<h1 className={styles.itemText}>{topic1}</h1>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img className={styles.carouselImage} src={uralPic2} alt='ural'/>
					<Carousel.Caption>
						<h1 className={styles.itemText}>{topic2}</h1>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img className={styles.carouselImage} src={uralPic3} alt='ural'/>
					<Carousel.Caption>
						<h1 className={styles.itemText}>{topic3}</h1>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img className={styles.carouselImage} src={uralPic4} alt='ural'/>
					<Carousel.Caption>
						<h1 className={styles.itemText}>{topic4}</h1>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img className={styles.carouselImage} src={uralPic5} alt='ural'/>
					<Carousel.Caption>
						<h1 className={styles.itemText}>{topic5}</h1>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img className={styles.carouselImage} src={uralPic6} alt='ural'/>
					<Carousel.Caption>
						<h1 className={styles.itemText}>{topic6}</h1>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</div>
	);
};

export default Slider;