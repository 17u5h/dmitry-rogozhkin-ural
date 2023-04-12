import React, {useEffect, useRef} from 'react';
import DG from '2gis-maps'

const DgisWidget = () => {
	const mapContainerRef = useRef()

	useEffect(() => {
		const map = DG.map(mapContainerRef.current, {
			center: [56.523881, 84.991522],
			zoom: 18,
		})
		DG.marker([56.523896, 84.991458]).addTo(map).bindLabel('Здесь!', {static: true})

		const path = [[56.524413, 84.991849],[56.523923, 84.991324],[56.523869, 84.991344],[56.52383, 84.991492]]
		DG.polyline(path, {color: '#B7483DFF'}).addTo(map)

	}, [])

	return (
		<div ref={mapContainerRef} style={{ width: '100%', height: '500px' }}/>
	);
};

export default DgisWidget;