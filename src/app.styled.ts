import styled from 'styled-components';
import Globe from './images/illustration-ecosystem-noicon.svg';

export const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
`

export const Container = styled.div<{ color: string }>`
  display: flex;
  margin: 0 auto;
  padding: 100px 40px;
  max-width: 1200px;
  width: 100%;
  background-color: ${({ color }) => color};
`

export const GlobeBackground = styled.div`
  position: sticky;
  top: 100px;
  width: 577px;
  height: 504px;
  background: transparent url(${Globe}) no-repeat left center;
  background-attachment: cover;
  background-size: 462px 504px;
`

export const ShopersIcon = styled.img`
  position: absolute;
  top: 38%;
  left: 38%;
  width: 116px;
  height: 116px;
  transform: translate(-100px, -170px);
`

export const IndependentIcon = styled.img`
  position: absolute;
  top: 38%;
  left: 38%;
  width: 116px;
  height: 116px;
  transform: translate(190px, 0) scale(1.354);
`

export const EmployersIcon = styled.img`
  position: absolute;
  top: 38%;
  left: 38%;
  width: 116px;
  height: 116px;
  transform: translate(-100px, 170px);
`

export const TextPart = styled.div`
  width: 45%;
  margin-left: auto;
`

export const Text = styled.p`
  margin: 0;
  box-sizing: border-box;

  &:not(:first-child) {
    padding-top: 150px;
  }

  &:not(:last-child) {
    padding-bottom: 150px;
  }
`
