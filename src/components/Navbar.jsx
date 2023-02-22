import React, {useState} from 'react';
import { MdViewHeadline, MdClose, MdExpandMore} from "react-icons/md";
import logo from "./img/logo.png"

const Navbar = () => {
    const [nav, setNav] = useState(true)
    const [dropterbaru, setTerbaru] = useState(true)
    const [droptentang, setTentang] = useState(true)

    const handleNav = () => {
        setNav(!nav)
    }
    
    const handleTerbaru = () => {
        setTerbaru(!dropterbaru)
    }

    const handleTentang = () => {
        setTentang(!droptentang)
    }

  return (
    <div className='flex justify-between items-center h-24 mx-auto px-[20px] mb-[24px] md:px-[60px] lg:px-[100px] bg-primary'>
        <div className='flex w-full'>
            <div className='flex items-center w-full'>
                <a href='#home' alt='neraca-ruang' className='flex items-center gap-[10px]'>
                    <img src={logo} alt="logo" className='max-w-[1240px] w-[220px] h-[55px] md:cursor-pointer'/>
                </a>
            </div>
            <div>
                <ul className='hidden text-white font-bold md:flex'>
                    <li className='p-4'>
                        <a href='#home'>Home</a>
                    </li>
                    <li className='p-4'>
                        <a href='#information'>Information</a>
                    </li>
                    <li className='p-4'>
                        <span class="group relative inline-block">
                            <button class="inline-flex items-center">Dropdown <MdExpandMore className='text-xl'/></button>
                            <ul class="absolute hidden pt-8 w-[150px] text-darkgrey drop-shadow-md z-10 group-hover:block">
                                <li><a href="#menu1" class="block rounded-t bg-white py-2 px-4 hover:bg-gray-400">Menu1</a></li>
                                <li><a href="#menu2" class="block py-2 px-4 bg-white hover:bg-gray-400" >Menu2</a></li>
                            </ul>
                        </span>
                    </li>
                    <li className='p-4'>
                        <div>
                            <a href='#login' className='border-solid border-2 border-white px-8 py-4 rounded-[15px] text-white hover:bg-secondary hover:text-white'>LogIn</a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div onClick={handleNav} className='block cursor-pointer md:hidden'>
            {!nav ? <MdClose className='text-white' size={30}/> : <MdViewHeadline className='text-white' size={30}/>}
        </div>
        <div className={!nav ? 'fixed right-0 top-24 w-[40%] bg-white h-full border ease-in-out duration-300 z-10 md:hidden' : 'fixed right-[-100%]'}>
            <ul className='pt-2'>
                <li className='p-2 flex justify-center'>
                    <a href='masuk' className='border-solid border-2 border-primary px-8 py-2 rounded-[15px] text-primary hover:bg-secondary hover:text-white'>Masuk</a>
                </li>
                <li className='px-4 py-2 border-b'><a href="#Home" className='flex py-2'>Home</a></li>
                <li className='px-4 py-2 border-b'><a href="#Information" className='flex py-2'>Information</a></li>
                <li className='px-4 py-2 border-b'>
                    <div className='w-full items-center'>
                        <a href='#terbaru' alt='Terbaru' className='flex w-full items-center' onClick={handleTentang}>
                            <span className='flex w-full items-center py-2'>Dropdown </span><MdExpandMore className='text-xl'/>
                        </a>
                        <ul className={!droptentang ? 'ease-in-out duration-300' : 'hidden' } >
                            <li><a href="#menu1" className='block rounded-t bg-white py-2 px-4'>Menu1</a></li>
                            <li><a href="#menu2" className='block bg-white py-2 px-4'>Menu2</a></li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar