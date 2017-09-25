import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import HomePage from './home_page';
import PhotosIndex from './photos_index';
import PhotosNew from './photos_new';
import PhotosShow from './photos_show';

class Routes extends Component {

	render(){
		return (
		  <Switch>
        <Route exact path="/photos" component={PhotosIndex} />
        <Route exact path="/photos/new" component={PhotosNew} />
        <Route path="/photos/:id" component={PhotosShow} />
        <Route path="/" component={HomePage} />
      </Switch>
		)
	}
}

function mapStateToProps(state){
	return { photos: state.photos }
}

export default Routes;