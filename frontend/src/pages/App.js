import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import DefaultPage from "./DefaultPage";
import About from "src/content/About";
import Resources from "src/content/Resources";
import People from "src/content/People";
import Rates from "src/content/Rates";
import Contact from "src/content/Contact";
import Collections from "src/content/Collections";
import Gallery from "src/content/Gallery";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route key={"/"} path="/" element={<DefaultPage />}>
                    <Route path="/" element={<Home />}/>
                    <Route path="/about" element={<About />} />
                    <Route path="/collections" element={<Collections />} />
                    <Route path="/people" element={<People />} />
                    <Route path="/rates" element={<Rates />} />
                    <Route path="/resources" element={<Resources />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/contact" element={<Contact />} />
                </Route>
            </Routes>
            {/* </div> */}
        </BrowserRouter>
    );
}

export default App;
