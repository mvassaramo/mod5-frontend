import React, { Component } from 'react';
import './App.css';
import HomePage from './HomePage'

import { Route, Link } from 'react-router-dom'

import RequestsContainer from './containers/RequestsContainer'
import StylistsContainer from './containers/StylistsContainer'
import StylistProfile from './components/StylistProfile'
import RequestDetails from './components/RequestDetails'
import Header from './components/Header'
import AddRequestForm from './components/AddRequestForm'
import MuasContainer from './containers/MuasContainer'
import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm'



const API = 'http://localhost:3000/api/v1/'

export default class App extends React.Component {

  state = {
    stylists: [],
    requests: [],
    currentUser: window.localStorage.getItem('currentUser') ? JSON.parse(window.localStorage.getItem('currentUser')) : undefined,
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
  }

  signOut = () => {
    this.setState({currentUser: undefined})
    localStorage.removeItem('currentUser')
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

  componentDidMount() {
    this.getRequests()
    this.getStylists()
  }

  render () {
    const {requests, stylists, currentUser, addRequestForm} = this.state

    return(
      <React.Fragment>
        <div className="App">
        <Header currentUser={currentUser} signIn={this.signIn} signOut={this.signOut}/>

        <Route exact path='/' render={props => <HomePage {...props} stylists={stylists} />} />
        <Route exact path='/muas' render={props => <MuasContainer {...props} stylists={stylists} />} />
        <Route exact path='/stylists' render={props => <StylistsContainer {...props} stylists={stylists}  currentUser={currentUser} />} />
        <Route exact path='/stylists/:id' render={props => <StylistProfile {...props} stylist={stylists.find(s => s.id === parseInt(props.match.params.id, 10) )} currentUser={currentUser}/>} />
        <Route exact path='/requests' render={props => <RequestsContainer {...props} requests={requests} />} />
        <Route exact path='/requests/:id' render={props => <RequestDetails {...props} request={requests.find(r => r.id === parseInt(props.match.params.id, 10) )} />} />
        <Route exact path='/requests/addRequest' render={props => <AddRequestForm {...props} />} />
        <Route exact path='/signin' render={props => <LoginForm {...props} signIn={this.signIn}/>} />
        <Route exact path='/signup' render={props => <SignupForm {...props} />} />

      </div>
      </React.Fragment>
    )
  }

}
