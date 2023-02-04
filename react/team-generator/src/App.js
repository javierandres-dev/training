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

function App() {
  return <Portals />;
}

export default App;
/*
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
