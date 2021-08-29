import React, { useEffect, useState } from "react";

import "./style.scss";
import HomeServices from "./services";

import Card from "../../components/Card";
import Header from "../../components/Header";
import LottieFile from "../../components/LottieFile";

import SearchIcon from "@material-ui/icons/Search";
import RoomIcon from "@material-ui/icons/Room";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkIcon from "@material-ui/icons/Link";
import BusinessIcon from "@material-ui/icons/Business";

const Home = () => {
  const [user, setUser] = useState("");

  const [dataUser, setDataUser] = useState(null);

  const searchUser = async () => {
    const response = await HomeServices.user(user);
    console.log(response.data);
    setDataUser(response.data);
  };

  return (
    <section className="section-home">
      <Header />
      <div className="card-search">
        <div>
          <span>
            <SearchIcon className="icon" />
          </span>
          <input
            type="text"
            placeholder="Encontre um usuário no github..."
            onChange={(event) => setUser(event.target.value)}
          />
        </div>
        <button onClick={() => searchUser()}>Pesquisar</button>
      </div>
      <Card>
        {dataUser ? (
          <div className="container-card">
            <img src={dataUser?.avatar_url} />
            <div>
              <div className="card-header">
                <h3>{dataUser?.name}</h3>
                <label>Entrou em 2019</label>
              </div>
              <label>@{dataUser?.login}</label>
              <p>{dataUser?.bio}</p>
              <div className="card-body-rep">
                <div>
                  <label>Repositórios</label>
                  <label>{dataUser?.public_repos}</label>
                </div>
                <div>
                  <label>Seguidores</label>
                  <label>{dataUser?.followers}</label>
                </div>
                <div>
                  <label>Seguindo</label>
                  <label>{dataUser?.following}</label>
                </div>
              </div>
              <div className="card-body-details">
                <div>
                  <RoomIcon />
                  <label>{dataUser?.location}</label>
                </div>
                <div>
                  <TwitterIcon />
                  <label>{dataUser?.twitter_username}</label>
                </div>
                <div>
                  <LinkIcon />
                  <label>
                    {dataUser?.blog?.length > 20
                      ? dataUser?.blog.slice(0, 20) + "..."
                      : dataUser?.blog}
                  </label>
                </div>
                <div>
                  <BusinessIcon />
                  <label>{dataUser?.company}</label>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="section-no-user">
            <LottieFile name="github" />
            <h3>Para iniciar, pesquise um usuário</h3>
            <label>Ex: annegomesm</label>
          </div>
        )}
      </Card>
    </section>
  );
};

export default Home;
