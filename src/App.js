
import React, { Component } from 'react';
import './App.css';

import LiUserTable from './source_js_redux/licontainers/liUserTable'; 

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
    render() {
        return (
			<MuiThemeProvider>
				<div>
					<LiUserTable tableHeading="List of users" myKey="table_1" />
				</div>
			</MuiThemeProvider>
        );
    }
}

export default App;
