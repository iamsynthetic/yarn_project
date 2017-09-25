import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import promise from 'redux-promise';
import multi from 'redux-multi';
import thunk from 'redux-thunk';	

import reducers from './reducers';
import TopNavbar from './components/top_navbar';
import MainNavigation from './components/main_navigation';
import Routes from './components/routes';
import { Container, Row, Col } from 'reactstrap';
import { Nav, NavItem, NavLink, Navbar, Button } from 'reactstrap';
import styles from './style/styles.css';

const createStoreWithMiddleware = applyMiddleware(promise, multi, thunk)(createStore);

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<BrowserRouter>
			
			<Container fluid>
         		<Row>
         			<TopNavbar />
         		</Row>
         		<Row>
		          	<Col className={ styles.mainNavigation } sm="2">
		          		<MainNavigation/>
		          	</Col>
		          	<Col className={ styles.mainContentArea } sm="10">
		          		<Routes/>
		          		{/*<Switch>
							<Route path="/photos/new" component={PhotosNew} />
							<Route path="/photos/:id" component={PhotosShow} />
							<Route path="/" component={HomePage} />
						</Switch>
						*/}
		          	</Col>
		        </Row>
         	</Container>
          
		</BrowserRouter>
	</Provider>
	, document.querySelector('.app-container'));