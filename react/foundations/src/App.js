import logo from './logo.svg';
import './App.css';
import ClassComponent from './components/ClassComponent';
import FunctionalComponent from './components/FunctionalComponent';
import Hello from './components/Hello';
import { FragmentComponent } from './components/FragmentComponent';
import { ConditionalComponet } from './components/ConditionalComponet';
import { Lists } from './components/Lists';
import { HandleEvents } from './components/HandleEvents';
import { Props } from './components/Props';
import { PropsChildren } from './components/PropsChildren';
import { Styles } from './components/Styles';
import { StylesModule } from './components/StylesModule';
import { StateHook } from './components/StateHook';
import { Lifecycle } from './components/Lifecycle';
import { EffectHook } from './components/EffectHook';
import { CustomHook } from './components/CustomHook';
import { ContextHook } from './components/ContextHook';
import { RefHook } from './components/RefHook';
import { MemosParent } from './components/MemosParent';
import { ReducerHook } from './components/ReducerHook';
import { CallbackHook } from './components/CallbackHook';
import { Portals } from './components/Portals';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { PageA } from './components/PageA';
import { PageB } from './components/PageB';
import { PageC } from './components/PageC';
import { ApiCalls } from './components/ApiCalls';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/page-a'>Page A</Link>
        <Link to='/page-b'>Page B</Link>
        <Link to='/page-c'>Page C</Link>
        <Link to={'/api-calls'}>API Calls</Link>
      </nav>
      <Routes>
        <Route path='/' />
        <Route path='/page-a' element={<PageA />} />
        <Route path='/page-b' element={<PageB />} />
        <Route path='/page-c' element={<PageC />} />
        <Route path='/api-calls' element={<ApiCalls />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
/*
<Portals />
<CallbackHook />
<ReducerHook />
<MemosParent />
<RefHook />
<ContextHook />
<CustomHook />
<EffectHook />
<Lifecycle />
<StateHook />
<StylesModule />
<Styles />
<PropsChildren>{<p>I'm a child</p>}</PropsChildren>
<Props str={"I'm a prop"} />
<HandleEvents />
<Lists />
<ConditionalComponet />
<FragmentComponent />
<Hello />
<FunctionalComponent />
<ClassComponent />
*/
