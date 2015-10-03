
// Listings page 


'use strict';

var React = require('react-native');

var {
	AppRegistry,
	StyleSheet,
	Text,
	ListView,
	View
} = React;

var styles = StyleSheet.create({
	ListView: {
		paddingTop: 20,
		backgroundColor: '#6b0000'
	}
});

var MOCK_LISTING_DATA = [
	{rating: 'Rating', price: '$18'}}
]; 

class listings extends Component {
	getInitialState() {
		return {
			dataSource: new ListView.DataSource({
				rowHasChanged: (row1, row2) => row1 !== 2,
			}),
			loaded: false,
		};
	}
}