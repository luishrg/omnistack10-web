import React, { useEffect, useState } from "react";
import api from "./services/api";

import DevItem from "./components/DevItem/index";
import DevForm from "./components/DevForm/index";

import "./Global.css";
import "./App.css";
import "./Sidebar.css";
import "./Main.css";

function App() {
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get("/devs");

      setDevs(response.data.devs);
    }

    loadDevs();
  }, []);

  async function handleAddDev(data) {
    const response = (await api.post("/devs", data)).data;

    setDevs([...devs, response]);
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev} />
      </aside>
      <main>
        <ul>
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
