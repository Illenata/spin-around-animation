import ScrubAnimation from './pages/scrub'
import AnimationOnTrigger from './pages/trigger'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import { Header } from './component/page-component.styled'

const App = (): JSX.Element => (
  <Router>
    <div>
      <Header>
        <Link to="/">Scrub animation</Link>
        <Link to="/animation-on-trigger">Animation on trigger</Link>
      </Header>
      <Routes>
        <Route path="/" element={<ScrubAnimation />} />
        <Route path="/animation-on-trigger" element={<AnimationOnTrigger />} />
      </Routes>
    </div>
  </Router>
)

export default App
