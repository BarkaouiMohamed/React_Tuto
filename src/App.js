import './App.css';
import React, { Component } from 'react';
import { Greet } from './Components/Greet';
import Welcome from './Components/Welcome';
import Hello from './Components/Hello';
import Message from './Components/Message';
import Counter from './Components/Counter';
import FunctionClick from './Components/FunctionClick';
import ClassClick from './Components/ClassClick';
import EventBind from './Components/EventBind';
import ParentComponent from './Components/ParentComponent';
import UserGreeting from './Components/UserGreeting';
import NameList from './Components/NameList';
import StyleSheet from './Components/StyleSheet';
import Inline from './Components/Inline';
import styles from './appStyles.module.css'
import Form from './Components/Form';
import LifeCycleA from './Components/LifeCycleA';
import FragmentDemo from './Components/FragmentDemo';
import './appStyles.css'
import Table from './Components/Table';
import PureComp from './Components/PureComp';
import ParentComp from './Components/ParentComp';
import RefsDemo from './Components/RefsDemo';
import FocusInput from './Components/FocusInput';
function App() {
  return (
    <div className="App">
      <FocusInput/>
      {/* 
      <RefsDemo/>
      <ParentComp/>
      <Table/>
      <FragmentDemo/>
      <LifeCycleA/>
      <Form/>
      <h1 className='error'>Error</h1> {/* Regular StyleSheet *
      <h1 className={styles.success}>Success</h1> {/* Module styleSheet *
      <Inline/>
      <StyleSheet primary={true}/>
      <NameList/>
      <UserGreeting/>
      <ParentComponent/>
      <EventBind/>  
        <FunctionClick/>
        <ClassClick/>
         <Greet name="Mohamed" heroName="Batman">
          <p>This is Children props</p>
        </Greet>
        <Welcome name="Asma" heroName="Wonder Woman"/> 

          
          <Counter/>
        <Greet name="Asma" heroName="Wonder Woman"/>
          <button>Action</button>
        <Greet name="Youssef" heroName="SuperMan"/>

        <Welcome name="Mohamed" heroName="Batman"/> 
                <Welcome name="Youssef" heroName="SuperMan"/> 
        <Hello/>
        <Message/>*/}
    </div>
  );
}

export default App;
