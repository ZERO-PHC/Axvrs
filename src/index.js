import ReactDOM from 'react-dom'
import { Logo } from '@pmndrs/branding'
import './styles.css'
import { Text } from '@react-three/drei'
import Rive from 'rive-react'

import App from './App'

function Overlay() {
  return (
    <>
      <div style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none', width: '100%', height: '100%' }}>
        <div style={{ position: 'absolute', top: '50%', left: '23%', transform: 'translate3d(-50%,-50%,0)' }}>
          <h1 style={{ margin: 0, padding: 0, fontSize: '3em', fontWeight: 500, letterSpacing: '-0.05em' }}>
            Welcome <br /> to the <br /> Axoverse
          </h1>
        </div>
        <div style={{ position: 'absolute', top: 55, left: '10%', fontSize: '13px' }}>LOGO—</div>
        <nav style={{ display: 'flex', position: 'absolute', top: 46, left: '50%', transform: 'translate(-50%, 0)', fontSize: '13px' }}>
          <div style={{ fontWeight: 900, fontSize: '1.4em' }}> MINTER</div>
          <div style={{ fontWeight: 900, fontSize: '1.4em', marginRight: '1.4rem', marginLeft: '1.4rem' }}> MARKETPLACE</div>
          <div style={{ fontWeight: 900, fontSize: '1.4em' }}> PROJECTS</div>
        </nav>
        <section style={{ display: 'flex', position: 'absolute', top: 40, right: '10%', fontSize: '13px' }}>
          <button class="button">CONNECT WALLET</button>
        </section>

        <div style={{ position: 'absolute', bottom: 14, right: 36, fontSize: '13px' }}>MADE BY THE</div>
        <div
          style={{
            transform: 'rotate(-90deg)',
            transformOrigin: 'left top 0',
            position: 'absolute',
            bottom: 2,
            right: -110,
            padding: 0,
            margin: 0,
            fontSize: '13px',
            textDecoration: 'underline'
          }}>
          PIXEL HACKERS CREW
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: 14, left: 30, fontSize: '13px' }}>
        <img src={'https://res.cloudinary.com/do4mactw0/image/upload/v1649354231/icons_kk2hzt.svg'} alt="icons" />
      </div>
      <section style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translate(-50%, 0)', fontSize: '13px' }}>
        <Rive src="scroll.riv" />
      </section>
    </>
  )
}

ReactDOM.render(
  <>
    <App /> <Overlay />
  </>,
  document.getElementById('root')
)
