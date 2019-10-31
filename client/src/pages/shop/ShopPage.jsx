import React, { useEffect, lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchCollectionsStart } from '../../redux/actions/shop';

import Spinner from '../../components/spinner/Spinner';

const CollectionsOverviewContainer = lazy(() =>
	import('../../components/collections-overview/CollectionsOverviewContainer')
);
const CollectionPageContainer = lazy(() =>
	import('../collection/CollectionPageContainer')
);

const ShopPage = ({ match, fetchCollectionsStart }) => {
	useEffect(() => {
		fetchCollectionsStart();
	}, [fetchCollectionsStart]);

	return (
		<div className="shop-page">
			<Suspense fallback={<Spinner />}>
				<Route
					exact
					path={`${match.path}`}
					component={CollectionsOverviewContainer}
				/>
				<Route
					exact
					path={`${match.path}/:collectionId`}
					component={CollectionPageContainer}
				/>
			</Suspense>
		</div>
	);
};

export default connect(
	null,
	{ fetchCollectionsStart }
)(ShopPage);
