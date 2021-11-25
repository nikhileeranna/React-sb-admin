import FooterCard from "./FooterCard";
import Navbar from "./Navbar";
import Card from "./Card";
import Color from "./Color";
import Sidebar from "./Sidebar";
import Card1 from "./Card1";
import Footer from "./Footer"
import "./styles.css";

export default function App() {
  return (

    <div className="App" id="page-top"> 
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Navbar />
            <div className="container-fluid">
             <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                <a
                  href="#!"
                  className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
                >
                  <i className="fas fa-download fa-sm text-white-50"></i>{" "}
                  Generate Report
                </a>
              </div>
              <Card1 />
              <div className="row">
                <Card />
                <FooterCard />
              </div>
              <div className="row">
                <Color />
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}