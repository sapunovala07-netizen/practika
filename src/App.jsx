import { Header } from "./components/Header/Header";
import { Banner } from "./components/Banner/Banner";
import { Sub } from "./components/Sub/Sub";
import { Footer } from "./components/Footer/Footer";

export function App() {
  return (
    <div className="layout">
      <Header/>
      <Banner/>
      <Sub/>
      <Footer/>
    </div>
  )
}

