
// Listings page 


'use strict';

var React = require('react-native');
var {
	AppRegistry,
	StyleSheet,
	Text,
	View
} = React;

class listingResults extends Component {
	constructor(props) {
		super(props);
		var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.state = {ds: ds.cloneWithRows(this.props.listings)};
	}

	renderRow(rowData, SectionID, rowID) {
		return(
			<TouchableHighlight underlayColor='#dddddd'>
				<View>
					<Text>{rowData.title}</Text>
				</View>
			</TouchableHighlight>
		);
	}

	render() {
		return (
			<ListView
				ds={this.state.ds}
				renderRow={this.renderRow.bind(this)}/>
		);
	}
	}
}
