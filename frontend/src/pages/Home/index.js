import React from "react";

import "./style.scss";

import Card from "../../components/Card";
import Header from "../../components/Header";
import Search from "../../components/Search";

import RoomIcon from "@material-ui/icons/Room";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkIcon from "@material-ui/icons/Link";
import BusinessIcon from "@material-ui/icons/Business";

const Home = () => {
  return (
    <section className="section-home">
      <Header />
      <Search />
      <Card>
        <div className="container-card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSCKK7JqSkE0iA7Lgmhcq0jUDK5ZQl_WgzKnGxTlsjAnyPXvOkCiI4YhT-a82qYxUg1c8&usqp=CAU" />
          <div>
            <div className="card-header">
              <h3>Marianne Gomes</h3>
              <label>Entrou em 2019</label>
            </div>
            <label>@annegomesm</label>
            <p>Desenvolvedora frontend júnior</p>
            <div className="card-body-rep">
              <div>
                <label>Repositórios</label>
                <label>4</label>
              </div>
              <div>
                <label>Seguidores</label>
                <label>18</label>
              </div>
              <div>
                <label>Seguindo</label>
                <label>18</label>
              </div>
            </div>
            <div className="card-body-details">
              <div>
                <RoomIcon />:<label>Fortaleza</label>
              </div>
              <div>
                <TwitterIcon />:<label>annegomesm</label>
              </div>
              <div>
                <LinkIcon />:<label>link</label>
              </div>
              <div>
                <BusinessIcon />:<label>AJAX TI</label>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
};

export default Home;
