import React, { Component } from 'react';
import classes from './App.css';
// import Person from '../Components/Persons/Person/Person';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit';
import withClass from '../hoc/withClass'
import AuthContext from '../context/auth-context'

class App extends Component {
  constructor(props){
    super(props);
    console.log('[App.js] Constructor function ');
    this.state = {
      persons: [
        { id: 'asfa1', name: 'Foo', age: 28 },
        { id: 'vasdf1', name: 'Bar', age: 29 },
        { id: 'asdf11', name: 'Baz', age: 26 }
      ],
      otherState: 'some other value',
      showPersons: false ,
      showCockpit: true,
      chnageCounter: 0,
      isAuthenticated: false
      
    }
  }

  

  componentDidMount() {
    console.log('[App.js] Component did mount')
    
    
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log("[App.js] shouldComponentUpdate");
    return true;
  }

  componentDidUpdate(){
    console.log("[App.js] componentDidUpdate");
   
    
  }

  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id; 
    } );

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState((prevState, props) => { 
      return {
        persons: persons ,
        chnageCounter: prevState.chnageCounter +1
      };
    });

  }
      

  deletePersonHandler = ( personIndex ) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice( personIndex, 1 );
    this.setState( { persons: persons } );
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( { showPersons: !doesShow } );
  }

  loginHandler = () => {
    this.setState({

      isAuthenticated: true

    })
  }

  render () {

    console.log("React Version",React.version);

    console.log("[App.js] render");

    let persons = null;
    

    if ( this.state.showPersons ) {
      persons = <Persons 
            persons = {this.state.persons}
            clicked = {this.deletePersonHandler}
            changed = {this.nameChangedHandler}
            // isAuthenticated = {this.state.isAuthenticated}
             />;
    }

    return (
      <div>
        <button
          onClick={() => {
            this.setState({
              showCockpit: !this.state.showCockpit
            })
          }}>
            remove Cockpit
        </button>
        <AuthContext.Provider 
          value={{
          isAuthenticated: this.state.isAuthenticated, 
          login: this.loginHandler
        }}
        >
          {this.state.showCockpit ? (<Cockpit
   
            title = {this.props.appTitle}
            showPersons = {this.state.showPersons}
            personsLength = {this.state.persons.length}
            toggle = {this.togglePersonsHandler}
          />) : null
          }
          {persons}
        </AuthContext.Provider>
        </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default withClass(App, classes.App);
