import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`;

export const ContainerTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 1rem;

  h2{
    margin-bottom: 2.5rem;

    @media screen and (min-width: 300px) and (max-width: 640px) {
      margin-bottom: 1.5rem;
  }
}

`

