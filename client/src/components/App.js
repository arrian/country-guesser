import React from 'react'
import WorldHighlight from '../components/WorldHighlight'
// import Planets from '../components/Planets'
import Header from '../components/Header'
// import Options from '../components/Options'
// import { Header } from 'semantic-ui-react'
// import { Parallax } from 'react-parallax'

const App = () => (
  <div>
  	<WorldHighlight />
    <Header />
  </div>
)

// <Parallax bgImage="images/header.jpg" strength={-400}>
// <Header style={{ fontWeight: 100, fontSize: '40pt', textAlign: 'center', paddingTop: 200 }} inverted as='h1'>Planet Search</Header>
// 	<Search />
// </Parallax>
// <Options />
// <Planets />

export default App
