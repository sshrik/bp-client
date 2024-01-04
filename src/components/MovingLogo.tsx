import React from 'react';
import styled from 'styled-components';
import stopLogo from 'assets/app-logo.png';
import MoveLogo from 'assets/app-move.svg';

interface MovingLogoInterface {
  clicked: boolean;
  setClicked: (clicked: boolean) => void;
}

const Container = styled.div`
  .imgSize {
    width: 512px;
    height: 512px;
  }

  .cursor {
    cursor: pointer;
  }
`;

const MovingLogo: React.FC<MovingLogoInterface> = (
  props: MovingLogoInterface
) => {
  const { clicked, setClicked } = props;

  const handleClicked = () => {
    setClicked(true);
    setTimeout(() => {
      setClicked(false);
    }, 3000);
  }

  return (
    <Container>
      {clicked ? (
        <MoveLogo className="imgSize" />
      ) : (
        <img
          className="cursor imgSize"
          src={stopLogo}
          alt="project logo"
          onClick={handleClicked}
        />
      )}
    </Container>
  );
}

export default MovingLogo;
