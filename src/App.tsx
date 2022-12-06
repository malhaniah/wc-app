import { ReactNode, useEffect, useState } from "react";
import styled from "styled-components";
import Head from "./assets/Header.png";
import Foot from "./assets/Footer.png";
import Tables from "./components/Tables";
import { StandingsResponseTypes } from "./types";
import axios from "axios";

const App = () => {
  const [data, setData] = useState<StandingsResponseTypes | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:3000/");

      setData(response.data);
    };
    fetchData();
  }, []);

  const table: ReactNode[] = [];

  data?.standings.forEach((standing) => {
    table.push(<Tables standing={standing} />);
  });

  return (
    <Container>
      <Header>
        <Image src={Head} />
      </Header>
    <Main>
      {table}
    </Main>
      <Footer>
        <Image src={Foot} />
      </Footer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: auto;
  background: var(--secondary-color);
  overflow: hidden;
`;
const Header = styled.header`
  width: 100%;
  height: auto;
  display: block;
`;

const Main = styled.main`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(auto, 1fr);
  gap: 10px 10px;
  place-items: center;
  margin: 50px 0 50px 0;
`

const Footer = styled.footer`
  width: 100%;
  height: auto;
  display: block;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

export default App;
