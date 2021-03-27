import React,{PureComponent} from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {

    static getDerivedStateFromProps(props, state){
        console.log("[Persons.js] getDerivedStatefromProps");
        
        return state; 
    }

    // shouldComponentUpdate(nextProps, nextState){
    //     console.log("[Persons.js] shouldComponentUpdate");
    //     console.log(nextProps.persons !== this.props.persons);
    //     return (nextProps.persons !== this.props.persons);
    // }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("[Persons.js ] getSnapshotBeforeUpdate");
        return {message: "SnapShot"};
    }

    componentDidUpdate(pervProps, prevState, snapshot){
        console.log("[Persons.js ] componentDidUpdate");
        console.log(snapshot);
    }

    componentWillUnmount(){
        console.log("[personsss.js]componentWillUnmount");
        
    }
    render(){

        console.log("[Persons.js] rendering..");

        return this.props.persons.map( ( person, index ) => {
            
            return <Person
                   
                    click={() => this.props.clicked( index )}
                    name={person.name}
                    age={person.age}
                    key={person.id}
                    changed={( event ) => this.props.changed( event, person.id )} />
              } );

    }

 

};

      export default Persons;