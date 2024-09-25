import "./App.css";
import DataContainer from "./components/DataContainer";
import Main from "./components/Main";
import ShowData from "./components/ShowData";
import OtroComponente from "./components/OtroComponente";

const users = [
  // { UserName: "Pato", id: 1 }, // Corrige 'Username' a 'UserName' para que coincida con ShowData
  // { UserName: "Isaias", id: 2 },
];

const App = () => {
  return (
    <div>
      <Main>
        <DataContainer
          users={ users }
          show={() => <ShowData users={users} />}
          otro={()=> <OtroComponente />}
        ></DataContainer>
      </Main>
    </div>
  );
};

export default App;
