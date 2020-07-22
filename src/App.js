import React,{useEffect,useState} from 'react';

import GlobalStyle from './styles/globalStyle';
import { Layout, Wrapper } from './components/Layout'
import Navbar from './components/Navbar';

export default function App() {
  return <>
    <Layout>
      <Navbar/>
    </Layout>
    <GlobalStyle />
  </>
}
