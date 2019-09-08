import React, { useState } from 'react'

import SHOP_DATA from './shopData'
import PreviewCollection from '../../components/preview-collection/PreviewCollection'

const ShopPage = () => {
	const [collections] = useState(SHOP_DATA)

	return (
		<div className="shop-page">
			{collections.map(({ id, ...otherCollectionProps }) => (
				<PreviewCollection key={id} {...otherCollectionProps} />
			))}
		</div>
	)
}

export default ShopPage
