import React, {useState, useEffect} from "react";
import {
  Main,
  Timeline,
  Expertise,
  Project,
  Contact,
  Navigation,
  Footer,
} from "./components";
import FadeIn from './components/FadeIn';
import './index.scss';

function App() {
    const [mode, setMode] = useState<string>('dark');
    
    const handleModeChange = () => {
        if (mode === 'dark') {
            setMode('light');
        } else {
            setMode('dark');
        }
    }

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, []);

    return (
        <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
            <div className="layout-wrapper">
                <Navigation parentToChild={{mode}} modeChange={handleModeChange}/>
                <div className="content-wrapper">
                    <FadeIn transitionDuration={700}>
                        <div id="main">
                            <Main/>
                        </div>
                        <div id="expertise">
                            <Expertise/>
                        </div>
                        <div id="history">
                            <Timeline/>
                        </div>
                        <div id="project">
                            <Project/>
                        </div>
                    </FadeIn>
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default App;