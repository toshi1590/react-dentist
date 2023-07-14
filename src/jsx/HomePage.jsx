import styled from "styled-components";
import HomePageModule from "../module_css/HomePage.module.css";

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
`

const HomePage = () => {
  return (
    <>
      <h1>Iris</h1>
      <Container>
        <div className={HomePageModule.card}>
          <img className={HomePageModule.card_img} src="https://cdn-icons-png.flaticon.com/512/2815/2815428.png" alt="" />  
          <div>
            aaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          </div>
        </div>
        <div className={HomePageModule.card}>
          <img className={HomePageModule.card_img} src="https://cdn-icons-png.flaticon.com/512/2815/2815428.png" alt="" /> 
          <div>
            aaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          </div> 
        </div>
        <div className={HomePageModule.card}>
          <img className={HomePageModule.card_img} src="https://cdn-icons-png.flaticon.com/512/2815/2815428.png" alt="" />  
          <div>
            aaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          </div>
        </div>
      </Container>
    </>
  );
}

export default HomePage;