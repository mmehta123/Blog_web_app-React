import React from 'react'
import "./TopBar.css";
import { Link } from "react-router-dom"

export const TopBar = () => {
    const user = true;
    return (
        <div className='top'>
            <div className="topLeft">
                <i className="topIcon fa-brands fa-facebook"></i>
                <i className="topIcon fa-brands fa-twitter"></i>
                <i className="topIcon fa-brands fa-instagram"></i>
                <i className="topIcon fa-brands fa-linkedin"></i>
            </div>

            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link className='link' to="/">
                            Home
                        </Link>
                    </li>
                    <li className="topListItem">
                        <Link className='link' to="/about">
                            About
                        </Link>
                    </li>
                    <li className="topListItem">
                        <Link className='link' to="/contact">
                            Contact
                        </Link>
                    </li>
                    <li className="topListItem">
                        <Link className='link' to="/write">
                            Write
                        </Link>
                    </li>
                    <li className="topListItem">
                        <Link className='link' to="/login">
                            {user && "Logout"}
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="topRight">
                {
                    user ?
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAXVBMVEWgw/9DdOCkx/+ixf9Bct85bd5ch+c/cd+bv/w8b96lyP+IrvZGd+Gavv2UuPqOs/hxmu5NfONSgOSFq/VeiuiAp/N7ovFmkepWg+Vul+12nvBhjelqlOyYu/yMsffV271HAAAFmUlEQVR4nO2ca5OiOhBAIR0IQR7yRlj8/z/zJrrO1V2dUWhM4/ap2tmyZj54qjsdEpL2PIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIb5BwEAEV8Q5pPrL4QKCOFlzWEsfR0EgfbL8dBknhCfYglePvRKay2l9C3mf/NJ9UPufYCjEPmhMHL+3xjN4pCDcP0VFyGgKZW6p/dbUumyEdt1BGj8u9G7jaTfbLTsgKiSH/3Ojkm1xaIj0jB4xu/kGITT1lIVRCvVk34WJdtthRGgfipBr1O13tLUIabklQD+DmOynUwVx5cy9CuMcrcRRai+mQG/VVTVJhJVVC8OwStFXW0girDTM/0swY58FCFfImgUM+KKkCZzU/SMTFLaitDPqaLXqJ60IeyX5ahF7wkrwnG5oFE80lWEYtkgPCMLsoZiwAihCeJAdFaEdGmVuaCI1lPRoRl2JIMIGZagUSQ574tfOKPQon8RDCKkPkYhPSN9giNRtHghNEFs6QURSrwQmiCW5GIIGWYITRDJ1Rqs2f7LkNysH6MmqU3T2LXSH0QBqqBZCkeulW6BHbohsf0Mscd7oDmjiC0T4xB3GJqBGNIaiDgrwxtDYqvECNnPQqrUwIQ9DM1AnCgFceku6T10Tspw0Ub3A0NS0wVUKxiSek3Dhh9g+PnjEGWz+w9DUlvfkK8wH9KaLSbshzbz2EZqxveiha8N7wgmpJ7aPIG8xLeLfFrbGPGI
                    bjjSWj3h7pZadEtqGHqQoe9iUNtOBPQsJSaIvo1BbRPDxLDBTdOgoRZDiHBjqCJqhp6oUd/M1LRmQwvu8oLWwuIC4mONLFzL3ANz0qf4gtTDfPqm9tR9AS+IRENoig1SEGVCscxY4Igz61N7sXaFGFHOJo5Ec9RDOCFsoX1KGKrleRrQPq8vFh8S1nvSgkYxXKaoQ+KCHniL3gargv79rkXVhnaVuQDTbEWZ0NoFfgSkxbw9flVsIYIWiPo55Ub39Nb1jwDoXp8Xg25TV7qhffEOolTtpgRtvSlfuIYodbmNGnMNxIP/bMFR/hBvTtCz9527p+4DK9lt547zLSCyUf9UVbUes21dxb8BYDpILR8NSGl+d5g27GcBIXa1r/+2tD1q/Hr3EW14IPaO+z45dd2RllM3nqTfH71N1pe7AMRRVrWHbqzDeuwObZVF8cbmv58Bk7Di69+n2TEMwzAMwzCbAE6IC+ePn/BserKKYxFNWb6rmtYw2B9tU+3ybIrs77bajxY8qxblzdCFReL7yi4Kr1Dadv1MivDX0JiVlBGl/0rmChOVNG+7UgXBedX7aJPmvBw2f1R07TE1Ad9AOE1WRnk7FirQr+wJS6kDVYzDMaItCTHkbZiox3tPP2nqpDeWRJf/EHtVV3yzs/aspUrqJo2p7VCB8KpavZSY31uWbUooX803OY7q6Y6zz1lq3TcRkUCKaSg0/r0n21+4y907gshHHyc57zgq1VeOG37HeahWCN+VpC4cNvw28etxR999x8RVw2/7Zml1v5NjUOwcjEfhHWZ1C57nqOvs3akqdjOPlMxEyeGtYQTo3pOg/yN1mb4vjJAl+Debf3Z8X6toaN43Am8U9eE9RVXs352hX+j6HYo4h7nnKpbrK4raoeA7DqCKzqmgUQzXVcRo9rwQvWr7VrFCD5PXFVe8MwTpWuuklwjWO+WH3RxxJuu1
                    WxDIt5lno9e6Bo11N20xa3Wrw+8MMZuVrglD6VrsC1mvYYjdR3cRco1pH7uP7iJWaSIFqC0FFqJWaTOM3sBzAat03kdufLGMNUoNRISGoS9XuKYI6N2el8CGbMiG7mFDNmRD97AhG7Khe9iQDdnQPWzIhmzoHjZkQzZ0DxuyIRu6hw3ZkA3dw4ZsyIbuYUM2ZEP3sCEbsqF72PCfMvwPrXxsTuFNC+oAAAAASUVORK5CYII=" alt="user"
                            className="topImage" /> :
                        <ul className="topList">
                            <li className="topListItem">
                                <Link className='link' to="register">Register</Link>
                            </li>
                            <li className="topListItem">
                                <Link className='link' to="login">Login</Link>
                            </li>
                        </ul >
                }
                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}
