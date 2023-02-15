import FirstComponent, {FifthComponent} from './FirstComponent'
import SecondComponent from './SecondComponent'
import ThirdComponent from './ThirdComponent'

export default function App() {
    return (
        <div className="App">
            My Todo App
            <FirstComponent></FirstComponent>
            <SecondComponent></SecondComponent>
            <ThirdComponent></ThirdComponent>
            <FifthComponent></FifthComponent>
        </div>
    );
}
