import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faJsSquare,
  faReact,
  faHtml5,
} from '@fortawesome/free-solid-svg-icons'
import Loader from 'react-loaders'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            {' '}
            I am a vey ambitious front-end web developer looking for a role in
            an established IT company with the opprtunity to work with the
            latest technologies on challenging and diverse projects.
          </p>

          <p>
            {' '}
            I am confident, naturally curious and perpetually working on
            improving my chops one design problem at a time
          </p>
          <p>
            If Shamalamamoo moo i dont know what to write in this so remember to
            use chatgpt
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="##F06925" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}
export default About
