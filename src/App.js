import React, { Component } from 'react';
import './App.css';
import HomePage from './HomePage'

import { Route, Link } from 'react-router-dom'
import {NotificationContainer, NotificationManager} from 'react-notifications'

import RequestsContainer from './containers/RequestsContainer'
import StylistsContainer from './containers/StylistsContainer'
import StylistProfile from './components/StylistProfile'
import RequestDetails from './components/RequestDetails'
import Header from './components/Header'
import AddRequestForm from './components/AddRequestForm'
import MuasContainer from './containers/MuasContainer'
import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm'
import BecomeStylistForm from './components/BecomeStylistForm'
import MyAccount from './components/MyAccount'
import Success from './components/Success'
import Footer from './components/Footer'
import About from './components/About'
import MyStylistProfile from './components/MyStylistProfile'
import PersonalDetails from './components/PersonalDetails'





const API = 'http://localhost:3000/api/v1/'

export default class App extends React.Component {

  state = {
    stylists: [],
    requests: [],
    services: [],
    currentUser: window.localStorage.getItem('currentUser') ? JSON.parse(window.localStorage.getItem('currentUser')) : undefined
  }


  createNotification = (type) => {
    return () => {
    switch (type) {
        case 'loggedin':
          NotificationManager.success('Login successful');
          break;
        case 'signin':
          NotificationManager.error('Error message', 'Click me!', 5000, () => {
            alert('callback');
            });
          break;
        case 'newsignup':
          NotificationManager.success('Your account has been created! Please log in.');
          break;
        case 'newstylist':
          NotificationManager.success('Your stylist profile has been created!');
          break;
        case 'needsignin':
          NotificationManager.success('Please sign in to book');
          break;
      }
    }
  }

  getUser = (user) => {
      fetch(`http://localhost:3000/users/${user.id}`)
      .then(resp => resp.json())
      .then(data => this.setState({currentUser: data},
        () => localStorage.setItem('currentUser', data.id)
      ))
    }

  signIn = (email) => {
    fetch(`http://localhost:3000/api/v1/signin/`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email
        })
      }
    )
      .then(resp => resp.json())
      .then(data => this.setState({currentUser: data},
        () => localStorage.setItem('currentUser', JSON.stringify(data))
      ))
      .then(this.createNotification('loggedin'))

  }


  signOut = () => {
    this.setState({currentUser: undefined})
    localStorage.removeItem('currentUser')
    window.location = window.location.origin
  }

  addRequest = () => this.setState({ addRequestForm: true })

  getStylists = () => {
    return fetch(`${API}/stylist_listings`)
    .then(resp => resp.json())
    .then(stylists => this.setState({ stylists }))
  }

  getRequests = () => {
    return fetch(`${API}/requests`)
    .then(resp => resp.json())
    .then(requests => this.setState({ requests }))
  }
  getServices = () => {
    return fetch(`${API}/services`)
    .then(resp => resp.json())
    .then(services => this.setState({ services }))
  }

  componentDidMount() {
    this.getRequests()
    // this.getStylists()
    this.getServices()
  }

  render () {
    const {requests, stylists, services, currentUser } = this.state

    return(
      <React.Fragment>
        <Header currentUser={currentUser} signIn={this.signIn} signOut={this.signOut} />
        <div className="App">
          <Route exact path='/muas' render={props => <MuasContainer {...props} stylists={stylists} />} />
          <Route exact path='/stylists' render={props => <StylistsContainer {...props} getStylists={this.getStylists} stylists={stylists}  currentUser={currentUser} services={services} />} />
          <Route exact path='/stylists/:id' render={props => <StylistProfile {...props} createNotification={this.createNotification} stylist={stylists.find(s => s.id === parseInt(props.match.params.id, 10) )} currentUser={currentUser}/>} />
          <Route exact path='/requests' render={props => <RequestsContainer {...props} requests={requests} />} />
          <Route exact path='/requests/:id' render={props => <RequestDetails {...props} request={requests.find(r => r.id === parseInt(props.match.params.id, 10) )} />} />
          <Route exact path='/addRequest' render={props => <AddRequestForm {...props}  currentUser={currentUser}/>} />
          <Route exact path='/signin' render={props => <LoginForm {...props} signIn={this.signIn} createNotification={this.createNotification}/>} />
          <Route exact path='/signup' render={props => <SignupForm {...props} services={services} createNotification={this.createNotification}/>} />
          <Route exact path='/newstylist' render={props => <BecomeStylistForm {...props} createNotification={this.createNotification} currentUser={currentUser} services={services}/>} />
          <Route exact path='/myaccount' render={props => <MyAccount {...props} currentUser={currentUser} stylists={stylists} />} />
          <Route exact path='/About' render={props => <About {...props} />} />
          <Route exact path='/mystylistprofile' render={props => <MyStylistProfile {...props} createNotification={this.createNotification} currentUser={currentUser}/>} />
          <Route exact path='/mydetails' render={props => <PersonalDetails {...props} createNotification={this.createNotification} currentUser={currentUser}/>} />


      </div>
        <Route exact path='/' render={props => <HomePage {...props} stylists={stylists} />} />
        <NotificationContainer/>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <Footer/>
      </React.Fragment>
    )
  }

}
