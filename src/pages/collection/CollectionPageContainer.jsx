import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { selectIsCollectionsLoaded } from '../../redux/selectors/shop';

import WithSpinner from '../../components/with-spinner/WithSpinner';
import CollectionsOverview from './CollectionPage';

const mapStateToProps = createStructuredSelector({
	isLoading: selectIsCollectionsLoaded,
});

const CollectionPageContainer = compose(
	connect(mapStateToProps),
	WithSpinner
)(CollectionsOverview);

export default CollectionPageContainer;
