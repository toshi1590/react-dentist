import styled from "styled-components";

const Content = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
`;

const Container = styled.div`
  display: flex;
`;

const Item = styled.div`
  flex-grow: 1;
  border: double 1px red;
`;

const HomePage = () => {
  return (
    <>
      <h1>Iris</h1>
      <Content>
        <div>
          <Container>
            <Item>logo</Item>
            <Item>logo</Item>
            <Item>logo</Item>
          </Container>
        </div>
        <div>
          Sidebar
        </div>
      </Content>
    </>
  );
}

export default HomePage;