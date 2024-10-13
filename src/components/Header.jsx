import { Link, NavLink } from 'react-router-dom';
import LogoImage from '../images/logo.png';
import { Menu, Close } from '../images/svgs';
import { useState, useEffect } from 'react';
import { useWindowSize } from "@uidotdev/usehooks";
import MobileMenu from './MobileMenu';

export const Header = () => {
    const [ showMenu, setShowMenu] = useState(false);
    const {width} = useWindowSize();

    const handleMenu = () => {
        setShowMenu(!showMenu);
    }

    useEffect(() => {
        width >= 768 && setShowMenu(false);
        showMenu ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto';
    }, [width, showMenu])
    
    return(
        <header className='py-9 md:py-16 relative'>
            <div className='flex items-center justify-between container px-6 md:px-10 xl:px-[85px]'>
                <Link to="" className='flex items-center gap-x-5'>
                    <img src={LogoImage} alt="" className='w-6 h-6' />
                    <span className='text-2xl leading-6 tracking-[5px] uppercase font-bold font-spartan'>designo</span>    
                </Link>

                <nav className="hidden md:flex items-start gap-x-[42px] uppercase text-sm leading-[14px] tracking-[2px]">
                    <NavLink to="about" className={({isActive}) => isActive && 'border-b border-dark-gray'}>our company</NavLink>
                    <NavLink to="locations" className={({isActive}) => isActive && 'border-b border-dark-gray'}>locations</NavLink>
                    <NavLink to="contact" className={({isActive}) => isActive && 'border-b border-dark-gray'}>contact</NavLink>
                </nav>

                <div className='md:hidden' onClick={handleMenu}>
                    {showMenu ? <Close /> : <Menu /> }
                </div>
            </div>
            { showMenu && <MobileMenu setShowMenu={setShowMenu} /> }
        </header>
    )
}