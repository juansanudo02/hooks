// import logo from './logo.svg';
import React from 'react';
import './App.css';
// import CounterOneCustom from './components/CounterOneCustom';
// import CounterTwoCustom from './components/CounterTwoCustom';
import UserForm from './components/UserForm';
// import ClassTimer from './components/ClassTimer';
// import DocTitleOne from './components/DocTitleOne';
// import HookTimer from './components/HookTimer';
// import FocusInput from './components/FocusInput';
// import Counter from './components/Counter';
// import ParentComponent from './components/ParentComponent';
// import ComponentAA  from './components/ComponentAA';
// import ComponentBB  from './components/ComponentBB';
// import ComponentCC  from './components/ComponentCC';
// import DataFetchingOne from './components/DataFetchingOne';
// import DataFetchingTwo from './components/DataFetchingTwo';
// import CounterThree from './components/CounterThree';
// import CounterTwo from './components/CounterTwo';
// import ComponentC from './components/ComponentC';
// import CounterOne from './components/CounterOne';
// import DataFetching from './components/DataFetching';
// import IntervalHookCounter from './components/IntervalHookCounter';
// import IntervalClassCounter from './components/IntervalClassCounter';
// import ClassMouse from './components/ClassMouse';
// import MouseContainer from './components/MouseContainer';
// import ClassCounter from './components/ClassCounter';
// import HookCounterOne from './components/HookCounterOne';
// import HookCounterFour from './components/HookCounterFour';
// import HookCounterThree from './components/HookCounterThree';
// import HookCounter from './components/HookCounter';
// import HookCounterTwo from './components/HookCounterTwo';
// import ClassCounterOne from './components/ClassCounterOne';

// export const UserContext = React.createContext()
// export const ChannelContext = React.createContext()
// export const CountContext = React.createContext()

// const initialState = 0
// const reducer = (state, action) =>{
//   switch(action){
//       case 'increment': 
//       return state + 1
//       case 'decrement': 
//       return state - 1
//       case 'reset': 
//       return initialState
//       default: 
//       return state
//   }
// }

function App() {
//  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    // <CountContext.Provider 
      // value={{countState: count, countDispatch: dispatch}}
    // >
        <div className="App">

          <UserForm/>
          {/* <CounterOneCustom/>
          <CounterTwoCustom/> */}
          {/* <DocTitleOne/> */}
          {/* <HookTimer/> */}
          {/* <FocusInput /> */}
          {/* <ClassTimer/> */}

          {/* <Counter/> */}
          {/* <ParentComponent /> */}
          {/* <DataFetchingTwo/> */}

          {/* <DataFetchingOne/> */}
              {/* Count -{count} */}
              {/* <ComponentAA/>
              <ComponentBB/>
              <ComponentCC/> */}
              {/* <CounterThree/> */}
              {/* <CounterTwo/> */}
              {/* <CounterOne/> */}
              {/* <UserContext.Provider value={'Juan'}>
                <ChannelContext.Provider value={'Codevolution'}>          
                  <ComponentC/>
                </ChannelContext.Provider>
              </UserContext.Provider> */}
            
              {/* <DataFetching/> */}
              {/* <IntervalHookCounter />
              <IntervalClassCounter/> */}
              {/* <MouseContainer/> */}
              {/* <ClassMouse/> */}

              {/* <ClassCounterOne /> */}

              {/* <HookCounterTwo/> */}
              {/* <HookCounter/> */}
            {/* <ClassCounter/> */}
            {/* <HookCounterThree/> */}
            {/* <HookCounterFour/> */}
            {/* <ClassCounter/> */}
            {/* <HookCounterOne/> */}
        </div>



    // </CountContext.Provider>
   

  );
}

export default App;
