import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import theme from './ui/Theme';
import Header from '../components/ui/Header';

const  App = () => {

            return(
                <ThemeProvider theme={theme}>
                    <BrowserRouter>
                    <Header />
                    <Switch> 
                        <Route exact path="/" component={() =>(<div><h2>This is a home component</h2></div>)} />
                     <Route exact path="/services" component={() =>(<div><h2>This is a services component</h2></div>)} />
                     <Route exact path="/customsoftware" component={() =>(<div><h2>This is a customSoftware component</h2></div>)} />
                        <Route exact path="/mobileapps" component={() =>(<div><h2>This is a mobileApps component</h2></div>)} />
                        <Route exact path="/websites" component={() =>(<div><h2>This is a websites  component</h2></div>)} />
                        <Route exact path="/revolution" component={() =>(<div><h2>This is the revolution component</h2></div>)} />
                        <Route exact path="/about" component={() =>(<div><h2>This is about us component</h2></div>)} />
                        <Route exact path="/contact" component={() =>(<div><h2>This is a contact us component</h2></div>)} />
                        <Route exact path="/estimate" component={() =>(<div><h2>This is a estimate component</h2></div>)} />
                    </Switch>
                    </BrowserRouter>
            </ThemeProvider>
        );
    }

export default App;