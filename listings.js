
// Listings page 


'use strict';

var React = require('react-native');
var ParseJS = require('./parse.js')

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

	render() {
		var listing = parseGetAllObjectsOfClass("Service");
		return (
			<View style={styles.container}>
				<Text>{listing[0].get("name")}</Text>
				<Text>{listing[0].get("username")}</Text>
			</View>
		);
	}
}