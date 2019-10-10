import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../collection-preview/CollectionPreview';

import { selectCollectionsForPreview } from '../../redux/selectors/shop';

import { CollectionsOverviewContainer } from './collections-overview.styles';

const CollectionsOverview = ({ collections, history, match }) => (
	<CollectionsOverviewContainer>
		{collections.map(({ id, ...otherCollectionProps }) => (
			<CollectionPreview
				key={id}
				history={history}
				match={match}
				{...otherCollectionProps}
			/>
		))}
	</CollectionsOverviewContainer>
);

const mapStateToProps = createStructuredSelector({
	collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
