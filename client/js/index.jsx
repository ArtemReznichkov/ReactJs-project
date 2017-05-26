import React from 'react';
import ReactDOM from 'react-dom';

import Menu from './components/menu.jsx';
import Home from './components/home.jsx';
import Options from './components/options.jsx';
import Services from './components/services.jsx';
import CompanyRouter from './components/company.jsx';
import Portfolio from './components/portfolio.jsx';
import Team from './components/team.jsx';
import Counter from './components/counters.jsx';
import News from './components/news.jsx';
import Contacts from './components/contact.jsx';
import Footer from './components/footer.jsx';
import Feedback from './components/feedback.jsx';

ReactDOM.render(
    <div id = 'wraper'>
        <Menu />
        <Home />
        <Options />
        <Services />
        <CompanyRouter />
        <Portfolio />
        <Team />
        <Counter />
        <News />
        <Feedback />
        <Contacts />
        <Footer />
    </div>,
    document.getElementById('main-wraper')
    );