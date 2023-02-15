
export default function CounterButton({by, incrementFunction, decrementFunction}) {

/*    function incrementCounterFunction(){
        incrementFunction(by)
    }

    function decrementCounterFunction(){
        decrementFunction(by)
    }*/

    return(
        <div className="Counter">
            <button className="counterButton" onClick={() => incrementFunction(by)}>+{by}</button>
            <button className="counterButton" onClick={() => decrementFunction(by)}>-{by}</button>
        </div>
    )
}
