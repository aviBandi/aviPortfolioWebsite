import './index.css';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Services from './pages/Services';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}/>
          <Route path="/home" element={<Home />} />
          <Route path="/portfolio" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;



{/* <BrowserRouter>
<Routes>
    <Route index element={<Home />} />
    <Route path="/home" element={<Home />} />
    <Route path='/contact' element={<Contact />} />
    <Route path='/mentors' element={<MentorsAndCoaches />} />
    <Route path='/students' element={<Students />} />
    <Route path='/outreach' element={<OutReach />} />
    <Route path='/events' element={<Events />} />
    <Route path='/sponsors' element={<Sponsors />} />
    <Route path="*" element={<NoPage />}></Route>
    <Route path= "/news" element={<News />}></Route>
    <Route path="/aboutUs" element={<AboutUs />}/>
    <Route path="/article/:index" element={<ArticlePage />} />
</Routes>
</BrowserRouter> */}