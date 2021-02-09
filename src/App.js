import logo from './logo.svg';
import './App.css';
import { connect } from "react-redux";

function App(props) {
  const onAgeUp = () => {
    console.log('@@@@onAgeUp called');
    props.onAgeUp();
  };
  
  const  onAgeDown = () => {
    console.log('@@@@onAgeDown called');
    props.onAgeDown();
  }
  console.log('@@@props', props);
  return (
    <div className="App">
      <div className="Age-label">
        your age: <span>{props.age}</span>
      </div>
      <button onClick={()=> onAgeUp()}>Age UP</button>
      <button onClick={() => onAgeDown()}>Age Down</button>
    </div>
  );
}


const mapStateToProps = state => {
  return {
    age: state.age
  };
};

const mapDispachToProps = dispatch => {
  return {
    onAgeUp: () => dispatch({ type: "AGE_UP", value: 1 }),
    onAgeDown: () => dispatch({ type: "AGE_DOWN", value: 1 })
  };
};

export default connect(mapStateToProps, mapDispachToProps)(App);
