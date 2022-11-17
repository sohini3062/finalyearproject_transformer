import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Datatable from "../../components/datatable/Datatable";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import { Calendar } from "react-calendar";
import fusioncharts from "../../components/FusionCharts/fusioncharts";
import { Button} from "@mui/material";
const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
      
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <Datatable />
        <fusioncharts />
      </div>
    </div>
  );
};

export default Home;
