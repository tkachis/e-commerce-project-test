import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { fetchCollectionsStartAsync } from '../../redux/actions/shop';
import {
	selectIsCollectionFetching,
	selectIsCollectionsLoaded,
} from '../../redux/selectors/shop';

import WithSpinner from '../../components/with-spinner/WithSpinner';
import CollectionOverview from '../../components/collections-overview/CollectionsOverview';
import CollectionPage from '../collection/CollectionPage';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage = ({
	match,
	fetchCollectionsStartAsync,
	isFetchingCollections,
	isCollectionsLoaded,
}) => {
	useEffect(() => {
		let unsubscribeFromSnapshot = fetchCollectionsStartAsync();

		// component will unmount
		return () => unsubscribeFromSnapshot();
	}, [fetchCollectionsStartAsync]);

	return (
		<div className="shop-page">
			<Route
				exact
				path={`${match.path}`}
				render={props => (
					<CollectionOverviewWithSpinner
						isLoading={isFetchingCollections}
						{...props}
					/>
				)}
			/>
			<Route
				exact
				path={`${match.path}/:collectionId`}
				render={props => (
					<CollectionPageWithSpinner
						isLoading={!isCollectionsLoaded}
						{...props}
					/>
				)}
			/>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	isFetchingCollections: selectIsCollectionFetching,
	isCollectionsLoaded: selectIsCollectionsLoaded,
});

export default connect(
	mapStateToProps,
	{ fetchCollectionsStartAsync, selectIsCollectionsLoaded }
)(ShopPage);
