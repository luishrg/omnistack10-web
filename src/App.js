import React, { useEffect, useState } from "react";

import "./Global.css";
import "./App.css";
import "./Sidebar.css";
import "./Main.css";

function App() {
  const [github_username, setGithub_username] = useState("");
  const [techs, setTechs] = useState("");

  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
      },
      err => {
        console.log(err);
      },
      {
        timeout: 30000
      }
    );
  }, []);

  async function handleAddDev(e) {
    e.preventDefault();
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form onSubmit={handleAddDev}>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input
              name="github_username"
              id="github_username"
              required
              value={github_username}
              onChange={e => setGithub_username(e.target.value)}
            />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input
              name="techs"
              id="techs"
              required
              value={techs}
              onChange={e => setTechs(e.target.value)}
            />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input
                type="number"
                name="latitude"
                id="latitude"
                required
                value={latitude}
                onChange={e => setLatitude(e.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input
                name="longitude"
                id="longitude"
                type="number"
                required
                value={longitude}
                onChange={e => setLongitude(e.target.value)}
              />
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars1.githubusercontent.com/u/49236151?s=460&v=4"
                alt="Luis Rodrigues"
              />
              <div className="user-info">
                <strong>Luis Rodrigues</strong>
                <span>Angular, MongoDb, Express, NodeJS</span>
              </div>
            </header>
            <p>
              Desenvolvedor Javascript Full Stack na empresa Predict.info.
              Trabalhando atualmente com a Mean Stack
            </p>
            <a href="https://github.com/luishrg">Acessar perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img
                src="https://avatars1.githubusercontent.com/u/49236151?s=460&v=4"
                alt="Luis Rodrigues"
              />
              <div className="user-info">
                <strong>Luis Rodrigues</strong>
                <span>Angular, MongoDb, Express, NodeJS</span>
              </div>
            </header>
            <p>
              Desenvolvedor Javascript Full Stack na empresa Predict.info.
              Trabalhando atualmente com a Mean Stack
            </p>
            <a href="https://github.com/luishrg">Acessar perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img
                src="https://avatars1.githubusercontent.com/u/49236151?s=460&v=4"
                alt="Luis Rodrigues"
              />
              <div className="user-info">
                <strong>Luis Rodrigues</strong>
                <span>Angular, MongoDb, Express, NodeJS</span>
              </div>
            </header>
            <p>
              Desenvolvedor Javascript Full Stack na empresa Predict.info.
              Trabalhando atualmente com a Mean Stack
            </p>
            <a href="https://github.com/luishrg">Acessar perfil no Github</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
