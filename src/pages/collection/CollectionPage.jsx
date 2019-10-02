import React from 'react';
import { connect } from 'react-redux';

import { selectCollection } from '../../redux/selectors/shop';

import CollectionItem from '../../components/collection-item/CollectionItem';

import './collection-page.scss';

const CollectionPage = ({ collection: { title, items } }) => {
	return (
		<div className="collection-page">
			<h2 className="title">{title}</h2>
			<div className="items">
				{items.map(item => (
					<CollectionItem key={items.id} item={item} />
				))}
			</div>
		</div>
	);
};

const mapStateToProps = (state, ownProps) => ({
	collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
