import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from "./Home";
import About from './About';
import Unitedkingdom from './Unitedkingdom';
import Australiastudentvisa from './Australiastudentvisa';
import UnitedStateofAmerica from './UnitedStateofAmerica';
import Ukuniversities from './Ukuniversities';
import Contact from './Contact';
import USAUniversities from './USAUniversities';
import GRE from './GRE';
import GMAT from './GMAT';
import IELTS from './IELTS';
import TOEFL from './TOEFL';
import PTE from './PTE';
import SATEXAM from './SATEXAM';
import DUOLINGO from './DUOLINGO';
import OVERPILOTTRAINING from './OVERPILOTTRAINING';
import CourseCurriculum from './CourseCurriculum';
import AustraliaUniversities from './AustraliaUniversities';
import USACanada from './USACanada';
import FreeConsultation from './FreeConsultation';


const Routing = () => {
  return (
    
  <Routes>
    <Route path='/'       Component={Home} />
    <Route path='/About'  Component={About} />
    <Route path='/Unitedkingdom' Component={Unitedkingdom} />
    <Route path='/Australiastudentvisa' Component={Australiastudentvisa} />
    <Route path='/UnitedStateofAmerica' Component={UnitedStateofAmerica} />
    <Route path='/Ukuniversities' Component={Ukuniversities} />
    <Route path='/USAUniversities' Component={USAUniversities} /> 
    <Route path='AustraliaUniversities' Component={AustraliaUniversities} />
    <Route path='/GRE'  Component={GRE} />
    <Route path='/GMAT'  Component={GMAT} />
    <Route path='/IELTS'  Component={IELTS} />
    <Route path='/TOEFL'  Component={TOEFL} />
    <Route path='/PTE'  Component={PTE} />
    <Route path='/SATEXAM'  Component={SATEXAM} />
    <Route path='/DUOLINGO' Component={DUOLINGO} />
    <Route path='/OVERPIOLTTRAINING' Component={OVERPILOTTRAINING} />
    <Route path='/CourseCurriculum' Component={CourseCurriculum} />
    <Route path='/Contact'  Component={Contact} />
    <Route path='/USACanada'Component={USACanada} />
    <Route path='/FreeConsultation' Component={FreeConsultation}/>
     
 
  </Routes>   

  )
}

export default Routing