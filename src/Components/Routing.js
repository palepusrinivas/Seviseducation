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
import Immigration from './Immigration';
import Blogs from './Blogs';
import UnitedArabEmiratesstudentvisa from './UnitedArabEmiratesstudentvisa';
import UnitedArabEmiratesUniversities from './UnitedArabEmiratesUniversities';
import TermsOfService from './TermsOfService';
import PrivacyPolicy from './PrivacyPolicy';


const Routing = () => {
  return (
    
  <Routes>
    <Route path='/'       element={<Home />} />
    <Route path='/About'  element={<About />} />
    <Route path='/about'  element={<About />} />
    <Route path='/Unitedkingdom' element={<Unitedkingdom />} />
    <Route path='/Australiastudentvisa' element={<Australiastudentvisa />} />
    <Route path='/UnitedStateofAmerica' element={<UnitedStateofAmerica />} />
    <Route path='/Ukuniversities' element={<Ukuniversities />} />
    <Route path='/USAUniversities' element={<USAUniversities />} /> 
    <Route path='/AustraliaUniversities' element={<AustraliaUniversities />} />
    <Route path='/UnitedArabEmiratesstudentvisa' element={<UnitedArabEmiratesstudentvisa />} />
    <Route path='/UnitedArabEmiratesUniversities' element={<UnitedArabEmiratesUniversities />} />
    <Route path='/GRE'  element={<GRE />} />
    <Route path='/GMAT'  element={<GMAT />} />
    <Route path='/IELTS'  element={<IELTS />} />
    <Route path='/TOEFL'  element={<TOEFL />} />
    <Route path='/PTE'  element={<PTE />} />
    <Route path='/SATEXAM'  element={<SATEXAM />} />
    <Route path='/DUOLINGO' element={<DUOLINGO />} />
    <Route path='/OVERPIOLTTRAINING' element={<OVERPILOTTRAINING />} />
    <Route path='/CourseCurriculum' element={<CourseCurriculum />} />
    <Route path='/Contact'  element={<Contact />} />
    <Route path='/USACanada' element={<USACanada />} />
    <Route path='/FreeConsultation' element={<FreeConsultation />}/>
    <Route path='/Immigration' element={<Immigration />} />
    <Route path='/Blogs' element={<Blogs />} />
    <Route path='/terms' element={<TermsOfService />} />
    <Route path='/TermsOfService' element={<TermsOfService />} />
    <Route path='/privacy' element={<PrivacyPolicy />} />
    <Route path='/PrivacyPolicy' element={<PrivacyPolicy />} />
     

  </Routes>   

  )
}

export default Routing