import './Counter.css'
import {useState} from "react";
import PropTypes from "prop-types";
import CounterButton from './CounterButton'

export default  function Counter(){
    const [count, setCount] = useState(0)

    function incrementCounterParentFunction(by){
        setCount(count + by)
    }
    function decrementCounterParentFunction(by){
        setCount(count - by)
    }

    function resetCounter(){
        setCount(0)
    }


/*    function someMethodInParent(){
        console.log("called parent method")
    }*/

    return (
        <>
            <span className="totalCount">{count}</span>
            <CounterButton by={1}
                           incrementFunction={incrementCounterParentFunction}
                               decrementFunction={decrementCounterParentFunction}/>
            <CounterButton by={2} incrementFunction={incrementCounterParentFunction}
                           decrementFunction={decrementCounterParentFunction}/>
            <CounterButton by={3} incrementFunction={incrementCounterParentFunction}
                           decrementFunction={decrementCounterParentFunction}/>
            <button className="resetButton" onClick={resetCounter}>Reset</button>
        </>
    )
}


CounterButton.prototype = {
    by: PropTypes.number
}

CounterButton.defaultProps = {
    by: 5
}