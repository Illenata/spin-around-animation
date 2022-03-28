import ScrubAnimation from './pages/scrub'
import AnimationOnTrigger from './pages/trigger'
import HorizontalAnimation from './pages/horizontal-animation'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import { Header } from './component/page-component.styled'

const App = (): JSX.Element => (
  <Router>
    <Header>
      <Link to="/">Scrub animation</Link>
      <Link to="/animation-on-trigger">Animation on trigger</Link>
      <Link to="/horizontal-animation">Horizontal animation</Link>
    </Header>
    <Routes>
      <Route path="/" element={<ScrubAnimation />} />
      <Route path="/animation-on-trigger" element={<AnimationOnTrigger />} />
      <Route path="/horizontal-animation" element={<HorizontalAnimation />} />
    </Routes>
  </Router>
)

export default App
