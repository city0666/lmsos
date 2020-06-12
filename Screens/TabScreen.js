import React, { Component } from 'react';
import { Container, Header, Content,Left, Body, Right, Title, Tab, Tabs } from 'native-base';
import NewFaverite from './NewFaverite';

export default class TabsExample extends Component {
  render() {
    return (
      <Container>
        <Header style={{backgroundColor:'#009387'}} hasTabs>
            <Left/>
          <Body>
            <Title style={{color:'white'}}>News App</Title>
          </Body>
          <Right />
        </Header>
        <Tabs tabBarUnderlineStyle={{backgroundColor:'white'}}>
          <Tab tabStyle={{backgroundColor:'#009387'}} activeTabStyle={{backgroundColor:'#009387'}} textStyle={{color:'white'}} activeTextStyle={{color:'white'}} heading="General">
            <Tab1 />
          </Tab>
          <Tab tabStyle={{backgroundColor:'#009387'}} activeTabStyle={{backgroundColor:'#009387'}} textStyle={{color:'white'}} activeTextStyle={{color:'white'}} heading="Business">
            <Tab2 />
          </Tab>
          <Tab tabStyle={{backgroundColor:'#009387'}} activeTabStyle={{backgroundColor:'#009387'}} textStyle={{color:'white'}} activeTextStyle={{color:'white'}} heading="Technology">
            <Tab3 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}