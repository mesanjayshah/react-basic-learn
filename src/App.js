import './App.css'
// import LearningComponent from './components/learning-examples/LearningComponent'
// import LearningJavascript from "./components/learning-examples/LearningJavascript";

import Counter from "./components/counter/Counter";

function App() {
    return (
        <div className="App">
            {/*<LearningComponent/>*/}
            {/*<LearningJavascript/>*/}
            {/*<PlayingWithProps property1 = "value1" property2 = "value2"/>*/}
            <Counter/>
        </div>
    );
}

// {property1 : 'value1', property2 : 'value2'}
/*function PlayingWithProps({property1, property2}){
    console.log(property1)
    console.log(property2)
    return (
        <div>Props</div>
    )
}*/

export default App