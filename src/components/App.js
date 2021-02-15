import React, {useState} from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import theme from './ui/Theme';
import Header from '../components/ui/Header';
import Footer from './ui/Footer';
import LandingPage from '../components/LandingPage';

const  App = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [value, setValue] = useState(0);
    
            return(
                <ThemeProvider theme={theme}>
                    <BrowserRouter>
                    <Header value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
                    <Switch> 
                        <Route exact path="/" 
                        render={(props) =>
                        <LandingPage 
                        {...props}
                        setValue={setValue} 
                        setSelectedIndex={setSelectedIndex} />} />
                     <Route exact path="/services" component={() =>(<div><h2>This is a services component</h2></div>)} />
                     <Route exact path="/customsoftware" component={() =>(<div><h2>This is a customSoftware component</h2></div>)} />
                        <Route exact path="/mobileapps" component={() =>(<div><h2>This is a mobileApps component</h2></div>)} />
                        <Route exact path="/websites" component={() =>(<div><h2>This is a websites  component</h2></div>)} />
                        <Route exact path="/revolution" component={() =>(<div><h2>This is the revolution component</h2></div>)} />
                        <Route exact path="/about" component={() =>(<div><h2>This is about us component</h2></div>)} />
                        <Route exact path="/contact" component={() =>(<div><h2>This is a contact us component</h2></div>)} />
                        <Route exact path="/estimate" component={() =>(<div><h2>This is a estimate component</h2></div>)} />
                    </Switch>
                   {/* footer component injection*/}
                    <Footer value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
                    </BrowserRouter>
            </ThemeProvider>
        );
    }

export default App;