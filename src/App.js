import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Collection from "./components/Collection/Collection";
import Old from "./components/Old/Old";
import New from "./components/New/New";
import Brands from "./components/Brands/Brands";
import About from "./components/About/About";

function App() {
    return (
        <div className="App">
            <Header />
            <Navbar />
            <Hero />
            <Collection />
            <Old />
            <New />
            <Brands />
            <About />
        </div>
    );
}

export default App;
