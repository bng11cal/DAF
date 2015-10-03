
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
		padding: 10,
		backgroundColor: '#6b0000'
	}
});


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