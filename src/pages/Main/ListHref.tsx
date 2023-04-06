import React from 'react';
import styles from './styles.module.css'


const ListHref = () => {
	return (
		<div className={styles.listHrefContainer}>
			<a href={require('../../content/Price.xls')} className={styles.listHref}>Скачать перечень товаров</a>
		</div>
	);
};

export default ListHref;