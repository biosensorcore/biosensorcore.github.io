import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import DefaultPage from "./DefaultPage";
import Pages from "../util/pages.json";

function App() {
    
    return (
        <HashRouter>
            
            <Routes>
                
                <Route key={"/"} path="/" element={<Home />} />
                {Pages.pages.map((page) => (
                    <Route key={page.url} path={`/${page.url}`} element={<DefaultPage page={page}/>}/>
                ))}
               
            </Routes>
            {/* </div> */}
        </HashRouter>
    );
}

export default App;
