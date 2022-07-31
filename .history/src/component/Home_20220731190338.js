import React from 'react'
import { Products } from './Products'

const Home = () => {
    return (
        <div className='hero'>
            <div className="card bg-dark text-white border-0 ">
                <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/C0jHR0pIBocjoyOjIyMjI0pGxI0JSwdEUAABAgMEAAX/bEUJEJSwfDxdORynUe9XrffwmGudT3Qwg/Ngam1bArclrpnifEeJaWV6mbuCAxBALKmq5cuOsJgj/jVSxvDLN5kanE8ZRdFlvHY35USs8Eb77xv1q0D5CnUX3gGq4epFesBsg/ZDKMy+R/XozibTF7F5bpoZw/IHrSeekGLv3EgsPPWF9SKMPfT10Zxz3cOLwAkkAd50FUKjvY/mdflRFi4SBpAqY1QFZXUVlccJ5wZECkqVVqjlzKRPhOmhEQBsRJXy86Jcdo1gMVe1YZR3vywAS6XPcv9E/eAEe86VFbt6WxyY9yafWkcaa6jfvnmCKKuoP2W8vIHTWuMEbge//MCdgwIzHrrQBAQk/a2UuMufOqsczdXMB4Ihpnc8Qn4Dm/NfGiuK4Ac0IrG/qD/FD8DdDMTOy/LujSCplCIBQt3Hu2XyszluRMGDuNj5VrpkNK0zkqszQiSADsRdUUIoJLNooA7bV5Xh1lj/m1B5Fh86lLNzEfSRTZ0fwOyqbHcLt3DmchCGLAweQ1P39qLWLx/P1SWBa7TZYKdC1vM3nLXyI9t2K/BrQscVwP8AdbcpvjtZ1xnDJ0na/V/sxOpMagj51GVbIgYnbfc6UXl1aQj3cLhFMrcqAA1t7ZZiY9vWROvf2hJ3oJxmw1triKkZbiQdK8PaCW7jkYwoJFtQyArkZWiSYJ21jUxGkwGjkKIYPCIWr1tu3dVfLwbmD8I1n3pnKY105fKqn30DiPsi3wASyqQ7D9Hl6tWImKgP0Q4VzMR8PZgbLPmg05chUAxshuwDUrd3vw07jnvKty4cxuTWbJFW/Qu0Cd56H1BqhiXBu7Hr7p/A8TyqE2pdi0fuZO/3GvOuAwjdSOfnTRjsqxGo0lp1juLdvKsBjcEGNbELQSRFSiou780hSfY0Rwbdu3k/xisYfyv3LPwhFiTAyqJAKeDDWax5dp/yjhHiIY7/5VHxAHmO/7DON6pY7iluqg5mKqpY3CTf8Ay6wIuIP9lg0GNYgQTp4em201SGNLglMjT4j86YSfvE99Rrwu6JDyCY5mgAxWsyZWtTSGfH8LymxgaAv0sIZcrjLxth9ddjKjaquGNNV1grB0BPrHOkN/a4MK4ticpBatjyt43D1sq5RrjQe0e0ZPrZQ+3cl1Z5ub/agkxoZgwPVOgBr3HDdH0wsXBlupbugbkRXH7LbTMlobTIEKJDDYhlUDTJAzMY3MPyk76g7JCIqEjUTR8qE8afVENDVrYukkCS2t/pFaeqPIXT2YvQ6/className="card-img" alt="Background " height="850px" />
                <div className="card-img-overlay d-flex flex-column
                justify-content-center">
                    <div className="container">
                    <h5 className="card-title display-3 fw-bolder mb-0">It is Peter's Time</h5>
                   <p className="card-text lead fs-2">
                    Welcome Customer from here you will what you like.
                   </p>
                    </div>
                   
                </div>
            </div>
            <Products />
        </div>
    )
}

export default Home