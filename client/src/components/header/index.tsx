import React, { memo, useEffect, useRef, useState } from 'react';
import Headroom from 'react-headroom';
import { BiLogIn, } from 'react-icons/bi';
import { TbDeviceGamepad2 } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';
import CusButton from '../button';
import SearchBar from '../search_bar';
import Transition from '../transition';
import './styles.css';

import { LogoutOutlined, PersonOutlineOutlined } from '@mui/icons-material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Box, Typography } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import { useAppDispatch } from 'src/hooks';
import SecondNavbar from '../second_navbar';

const settings: {
  icon: any;
  title: string;
  path?: string;
}[] = [
    {
      icon: <PersonOutlineOutlined />,
      title: 'Tài khoản người dùng',
      path: '/profile',
    },
    {
      icon: <LogoutOutlined />,
      title: 'Đăng xuất',
    },
  ];

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [isMenu, setIsMenu] = useState(false);
  const menuRef = useRef<HTMLImageElement>(null);
  const notifyRef = useRef<SVGSVGElement>(null);
  useEffect(() => {
    const getClickOutside = (e: any) => {
      if (isMenu && e.target !== menuRef.current) {
        setIsMenu(false);
      }
    }
    const handleCloseOnScroll = () => {
      if (isMenu) {
        setIsMenu(false);
      }
    }
    window.addEventListener('click', getClickOutside);
    window.addEventListener('scroll', handleCloseOnScroll);
    return () => {
      window.removeEventListener('click', getClickOutside);
      window.removeEventListener('scroll', handleCloseOnScroll);
    }
  }, [isMenu]);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const navigateToHome = () => navigate('/');
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleOpenLogin = () => {
    setIsLogin(true);
    navigate('/')
  };
  console.log("rs")
  return (
    <>
      <Headroom upTolerance={1} className='headroom'>
        <Transition
          className='Header'
          direction="down"
          distance={20}
        >
          <CusButton
            className='Logo'
            handleClick={navigateToHome}
          >
            <TbDeviceGamepad2 style={{ color: '#fff' }} /> POT_Store
          </CusButton>
          <Box sx={{
            marginLeft: '10px'
          }}>
            <SearchBar />
          </Box>
          {isLogin ? (
            <Box className='header-content'>
              <FavoriteIcon className='header-icon' onClick={() => {
                navigate('/');
              }} />
              <ShoppingCartIcon className='header-icon' onClick={() => {
                navigate('/');
              }} />
              <div className='user-menu-container'>
                <div className={isMenu ? "user-data active" : "user-data"} >
                  <img
                    src='https://static.vecteezy.com/system/resources/previews/006/487/917/original/man-avatar-icon-free-vector.jpg'
                    alt="user"
                    className='rounded-image'
                    ref={menuRef}
                    onClick={() => {
                      setIsMenu(!isMenu);
                    }} />
                  <AnimatePresence>
                    {isMenu && (
                      <motion.ul
                        initial={{ opacity: 0, y: "-50%" }}
                        animate={{ opacity: 1, y: "0%" }}
                        exit={{ opacity: 0, y: "-50%", transition: { duration: 0.35 } }}
                        transition={{ type: "spring", stiffness: 100, duration: 0.75 }}
                        className="user-menu"
                      >
                        {settings.map((setting) => (
                          <li
                            key={setting.title}
                            onClick={handleCloseUserMenu}
                            onClickCapture={() => {
                              if (setting.path) {
                                navigate(setting.path);
                              } else {
                                setIsLogin(false);
                              }
                            }}
                          >
                            {setting.icon}
                            <Typography textAlign="center">
                              {setting.title}
                            </Typography>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </Box>

          ) : (
            <CusButton
              className='Cart'
              handleClick={handleOpenLogin}
            >
              Đăng nhập <BiLogIn style={{ fontSize: '20px' }} />
            </CusButton>)}
        </Transition>
        <SecondNavbar />
      </Headroom>
    </>
  );
}

export default memo(Header);
