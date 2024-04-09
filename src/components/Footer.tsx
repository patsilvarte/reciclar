import styled from "styled-components";

const Container = styled.footer`
  background-color: #282c34;
  color: grey;
  font-size: 10px;
  display: flex;
  gap: 20px;
  justify-content: center;
  padding: 4px;
`;

const Footer = () => {
  return (
    <Container>
      <span>
        seaside PNG Designed By 58pic from{" "}
        <a href="https://pngtree.com/freepng/beach-and-seaside-tranquil-background-illustration_7459500.html?sol=downref&id=bef">
          pngtree
        </a>
      </span>
      <span>|</span>
      <span>
        road clipart PNG Designed By 徽锦 from{" "}
        <a href="https://pngtree.com/freepng/black-winding-road-road-city-street-hand-drawn-illustration_5546467.html?sol=downref&id=bef">
          pngtree
        </a>
      </span>
      <span>|</span>
      <span>
        bin PNG Designed By Sunset from{" "}
        <a href="https://pngtree.com/freepng/rubbish-bin_6947990.html?sol=downref&id=bef">
          pngtree
        </a>
      </span>
    </Container>
  );
};
export default Footer;
