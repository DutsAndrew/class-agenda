import { useState, useEffect } from 'react'
import './App.css'
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import ClassAgendas from './components/ClassAgendas';

function App() {

  const [appData, setAppData] = useState({
    'agenda-items': [],
    'agendas': [],
    'classes': [],
  });

  useEffect(() => {
    verifyUserIsNotIncognito();
    mountLocalData();
  }, []);

  const verifyUserIsNotIncognito = () => {
    try {
      localStorage.setItem('test', 'test');
      localStorage.removeItem('test');
    } catch (e) {
      confirm('You are in incognito mode. Please disable it in order to use this app.');
      window.close();
    }
  };

  const mountLocalData = () => {
    const agendaItems = localStorage.getItem('agenda-items');
    const agendas = localStorage.getItem('agendas');
    const classes = localStorage.getItem('classes');

    setAppData({
      'agenda-items': agendaItems ? JSON.parse(agendaItems) : [],
      'agendas': agendas ? JSON.parse(agendas) : [],
      'classes': classes ? JSON.parse(classes) : [],
    });
  };

  return (
    <>
      <AppHeader />
      <ClassAgendas 
        agendaItems={appData['agenda-items']}
        agendas={appData.agendas}
        classes={appData.classes}
      />
      <AppFooter />
    </>
  )
}

export default App
