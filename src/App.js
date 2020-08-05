import React, { Fragment } from 'react';
import {Footer, FooterDropDownSection, FooterLinkList, FooterSection} from 'react-mdl'

import './App.css';
import {Grid, Cell, Layout, Header, Navigation} from 'react-mdl'
import {Link, Switch, Route} from 'react-router-dom'
import Home from './components/home'
import About from './components/about';
import MyProjects from './components/MyProjects';
import Testimonials from './components/testimonials';
import Skills from './components/Skills'

function App() {
  return (
    <Fragment>
    <div className="demo-grid-ruler" style={{height: '950px', position: 'relative'}}>
      <Layout className="body" >
        <Grid className="demo-grid-ruler" style={{width:'100%'}}>
          <Cell col={12} className="title" >
            <Header className="demo-grid-ruler" title="Mbulelo Pani" style={{marginTop:'-1%',fontWeight: "bold",color: 'black', background: 'lightyellow', position: 'fixed', opacity: '0.9'}}>
              <Navigation className="link-dir" style={{width:'100%',marginLeft: '10em'}}>
                  <Link to="/home" className="animate">Home</Link>
                  <Link to="/about" className="animate">About me</Link>
                  <Link to="/MyProjects" className="animate">My Projects</Link>
                  <Link to="/testimonials" className="animate">Testimonials</Link>
                  <Link to="/Skills" className="animate">Skills</Link>
              </Navigation>
            </Header>
          </Cell>  
        </Grid>
          <div>
            <div className='page-content' />
            <Switch>
              <Route exact path='/my-portfolio' component={Home}/>
              <Route exact path="/home" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/MyProjects" component={MyProjects} />
              <Route path="/testimonials" component={Testimonials} />
              <Route path="/Skills" component={Skills} />
            </Switch>
          </div>
      </Layout>
    </div>
    <Footer  style={{opacity:'0.9', height:'150px', paddingTop:'0em'}}>
    <FooterSection type="middle">
        <FooterDropDownSection title="Navigation">
            <FooterLinkList>
              <Link to="/home">Home</Link>
              <Link to="/about">About me</Link>
              <Link to="/MyProjects">My Projects</Link>
            </FooterLinkList>
        </FooterDropDownSection>
        
        <FooterDropDownSection title="">
            <FooterLinkList style={{paddingLeft:'13em'}}>
              <div style={{width:'240px'}}>
                <h4>Made by Mbulelo Pani</h4>
              </div>
            </FooterLinkList>
        </FooterDropDownSection>
        
    </FooterSection>
    
</Footer>
  </Fragment>

    
  );
}

export default App;
