import React from 'react'
import home from '../images/home.png'
import { Link } from 'react-router-dom';
import logo from '../images/logo.png'

function Sidebar() {
    const ele=document.querySelectorAll('.sidebar ul li');
    ele.forEach(Nav=>{
    Nav.addEventListener('click',()=>{
        ele.forEach(ents=>ents.classList.remove('active'));
        Nav.classList.add('active')
    })
}
);
  return (
    <div>
      <div className="sidebar">
<img src={logo} id="logo" alt="logo"/>
<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 16.933 16.933" id="hamburger"><path d="M1.971 1.323c-1.058 0-1.058 1.587 0 1.587h12.996c1.059 0 1.059-1.587 0-1.587zm13.018 6.35H1.97c-1.1-.043-1.1 1.65 0 1.587h12.996c1.08.042 1.101-1.587.022-1.587zM1.97 14.023c-1.058 0-1.058 1.587 0 1.587h12.996c1.059 0 1.059-1.587 0-1.587z"></path></svg>
<ul className="sidebar-list">
<Link to='/'><li className="active"><img src={home} alt="home" className="expanded-svg" id="home"/><h5 className='sidebar-title'>Home</h5></li></Link>
<Link to='/help'><li className=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="expanded-svg" id="help"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-4h2v2h-2zm1.61-9.96c-2.06-.3-3.88.97-4.43 2.79-.18.58.26 1.17.87 1.17h.2c.41 0 .74-.29.88-.67.32-.89 1.27-1.5 2.3-1.28.95.2 1.65 1.13 1.57 2.1-.1 1.34-1.62 1.63-2.45 2.88 0 .01-.01.01-.01.02-.01.02-.02.03-.03.05-.09.15-.18.32-.25.5-.01.03-.03.05-.04.08-.01.02-.01.04-.02.07-.12.34-.2.75-.2 1.25h2c0-.42.11-.77.28-1.07.02-.03.03-.06.05-.09.08-.14.18-.27.28-.39.01-.01.02-.03.03-.04.1-.12.21-.23.33-.34.96-.91 2.26-1.65 1.99-3.56-.24-1.74-1.61-3.21-3.35-3.47z"></path></svg><h5 className='sidebar-title'>Help</h5></li></Link>
    <Link to='/about'><li className=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="expanded-svg" viewBox="0 0 6.35 6.35" id="about"><path d="M 3.175 0 A 3.175 3.175 0 0 0 0 3.175 A 3.175 3.175 0 0 0 3.175 6.35 A 3.175 3.175 0 0 0 6.35 3.175 A 3.175 3.175 0 0 0 3.175 0 z M 3.175 1.3229167 A 0.26458332 0.26458332 0 0 1 3.4395833 1.5875 A 0.26458332 0.26458332 0 0 1 3.175 1.8520833 A 0.26458332 0.26458332 0 0 1 2.9104167 1.5875 A 0.26458332 0.26458332 0 0 1 3.175 1.3229167 z M 3.1760335 2.3807332 A 0.2645835 0.2645835 0 0 1 3.4395833 2.6463501 L 3.4395833 4.7619832 A 0.2645835 0.2645835 0 0 1 3.1760335 5.0276001 A 0.2645835 0.2645835 0 0 1 2.9104167 4.7619832 L 2.9104167 2.6463501 A 0.2645835 0.2645835 0 0 1 3.1760335 2.3807332 z " paintOrder="markers fill stroke"></path></svg><h5 className='sidebar-title'>About</h5></li></Link>
    <Link to='/contact'> <li className=""><svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" className="expanded-svg" fill="none" viewBox="0 0 128 128" id="customer"><path stroke="#000" strokeLinecap="round" strokeWidth="4" d="M63.5 69C41.0316 69 22.5418 86.0747 20.241 107.985C19.9684 110.581 22.0082 112.759 24.6107 112.963L39.2051 114.102C55.377 115.366 71.6229 115.366 87.7949 114.102L102.389 112.963C104.992 112.759 107.032 110.581 106.759 107.985C104.458 86.0747 85.9684 69 63.5 69Z"></path><circle cx="64" cy="47" r="22" stroke="#000" strokeWidth="4"></circle><path stroke="#4B9700" strokeWidth="4" d="M98 47C98 27.67 82.7777 12 64 12C45.2223 12 30 27.67 30 47"></path><path stroke="#4B9700" strokeWidth="4" d="M88 50.9507C88 47.8643 90.7688 45.4568 93.814 45.9593L98 46.65V51C98 53.7614 95.7614 56 93 56V56C90.2386 56 88 53.7121 88 50.9507V50.9507zM40 50.6359C40 47.6383 37.3805 45.3143 34.4043 45.6715L30 46.2V52C30 54.7614 32.2386 57 35 57V57C37.7614 57 40 54.7614 40 52V50.6359z"></path><path stroke="#4B9700" strokeLinecap="round" strokeWidth="4" d="M94 56L70 56"></path><rect width="6" height="3" x="67" y="53" fill="#4B9700" stroke="#4B9700" strokeWidth="4" rx="1.5"></rect></svg><h5 className='sidebar-title'>Contact</h5></li></Link>
</ul>
</div>
    </div>
  )
}

export default Sidebar
