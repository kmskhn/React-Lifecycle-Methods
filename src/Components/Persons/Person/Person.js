import React,{Component} from 'react';
import classes from './Person.css';
import  withClass from '../../../hoc/withClass'
import PropTypes from 'prop-types'
import AuthContext from '../../../context/auth-context';

class Person extends Component {
    // constructor(props){
    //     super(props);
    //     // = React.createRef();
    // }

    static contextType = AuthContext;
    
    componentDidMount(){
        // console.log(this.abcdef);
        
        this.inputElement.focus();
        // document.querySelector('input').focus();
    }

    render(){

        console.log("[person.js] rendring person")
        

        return (
            
            <div>
                
                    {this.context.isAuthenticated ? <p>AUTHENTICATED</p> : <p>PLEASE LOGIN</p>}
                
                    <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                    <p>{this.props.children}</p>
                    <input 
                        type="text" 
                        ref={(inputEl) => {this.inputElement = inputEl}}
                        onChange={this.props.changed} 
                        value={this.props.name} />
             
            </div>
        ) 
    
        
    }
};


Person.propTypes = {

    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func

}; 

export default withClass(Person, classes.Person);