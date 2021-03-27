import React,{ useEffect,useRef, useContext } from 'react';
import classes from './Cockpit.css'
import AuthContext from '../../context/auth-context'


const cockpit = (props) => {

  const toggleButtonRef = useRef(null);
  const authContext = useContext(AuthContext);
console.log(props);
  useEffect(() => {

    toggleButtonRef.current.click();
    setTimeout(function () {alert("cloe me !!!!!!!!!!!!!!!!!!!!!!!!")},1000);
    
    console.log("[Cockpit.js] useEffect");
    return () => {
      // clearTimeout(timer);
      console.log("[Cpockpit] cleanup in use effect")
    }
    
  }, [])

  useEffect(() => {
    console.log("[cockpit] 2nd useEffect");
    return () => {
      console.log('[cockpit] clean up from 2nd use effect');
    }
  })

    const assignedClasses = [];
    let btnClass='';
    if(props.showPersons ) { 
        btnClass = classes.Red;
    }
     
   

    if ( props.personsLength <= 2 ) {
      assignedClasses.push( classes.red ); // classes = ['red']
    }
    if ( props.personsLength <= 1 ) {
      assignedClasses.push( classes.bold ); // classes = ['red', 'bold']
    }

    return (
        <div className={classes.Cockpit}>
          {/* <button onClick={props.delete}>delete cockpit</button> */}
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button
            ref={toggleButtonRef}
            className={btnClass}
            onClick={props.toggle}>Toggle Persons</button>
            {<button onClick={authContext.login}>Login</button>}
            
        </div>
    );
};



export default React.memo(cockpit);