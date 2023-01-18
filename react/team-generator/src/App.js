import logo from './logo.svg';
import './App.css';
import ClassComponent from './components/ClassComponent';
import FunctionalComponent from './components/FunctionalComponent';
import Hello from "./components/Hello";
import { ConditionalComponet } from './components/ConditionalComponet';
import { Lists } from './components/Lists';
import { HandleEvents } from './components/HandleEvents';
import { Props } from './components/Props';
import { PropsChildren } from './components/PropsChildren';
import { Styles } from './components/Styles';
import { StylesModule } from './components/StylesModule';
import { StateHook } from './components/StateHook';
import { EffectHook } from './components/EffectHook';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <EffectHook/>
        <StateHook/>
        <StylesModule/>
        <Styles/>
        <PropsChildren>{<p>I'm a child</p>}</PropsChildren>
        <Props str={"I'm a prop"}/>
        <HandleEvents/>
        <Lists/>
        <ConditionalComponet/>
        <Hello/>
        <FunctionalComponent/>
        <ClassComponent/>
      </header>
    </div>
  );
}

export default App;
