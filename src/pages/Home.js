import React from 'react'
import Menu from '../components/Menu';
import ShopHeader from '../components/ShopHeader'
import Banner from '../components/Banner/index'

import Banner1 from '../img/banner1.jpg'
import Banner2 from '../img/banner2.jpg'
import Banner3 from '../img/banner3.jpg'

import { GrBook, GrGamepad, GrCatalog, GrArticle, GrVolume, GrRisk, GrEdit, GrMenu } from "react-icons/gr";

function Home() {

  const menu = [{
    id: 1,
    label: 'Книги',
    icon: <GrBook size='1.5em' color='#9eceff' className='icon'/>,
    page: 'books',
    submenu: [{ label: 'Художественные' }, { label: 'Научно-популярные' }, { label: 'Детские' }, { label: 'Публицистика', label: 'Учебники' }]
  },
  {
    id: 2,
    label: 'Аудиокниги',
    icon: <GrVolume size='1.5em' className='icon'/>,
    page: 'audio-books',
    submenu: [{ label: 'Художественные' }, { label: 'Научные' }, { label: 'Подкасты' }]
  },
  {
    id: 3,
    label: 'Журналы',
    icon: <GrCatalog size='1.5em' className='icon'/>,
    page: 'magazines',
    submenu: [{ label: 'Мода' }, { label: 'Наука' }, { label: 'Публицистика' }],
  },
  {
    id: 4,
    label: 'Комиксы',
    icon: <GrArticle size='1.5em' className='icon'/>,
    page: 'comics',
    submenu: [{ label: 'DC' }, { label: 'Marvel' }, { label: 'Манга' }],
  },
  {
    id: 5,
    label: 'Игрушки',
    icon: <GrGamepad size='1.5em' className='icon'/>,
    page: 'toyes',
    submenu: [{ label: 'Для мальчиков' }, { label: 'Для девочек' }],
  },
  {
    id: 6,
    label: 'Канцелярия',
    icon: <GrEdit size='1.5em' className='icon'/>,
    page: 'chancellery',
    submenu: [{ label: 'Тетради и блокноты' }, { label: 'Ручкии и карандаши' }, { label: 'Фломастеры и текстовыделители' }]
  },
  {
    id: 7,
    label: 'Настольные игры',
    icon: <GrRisk size='1.5em' className='icon'/>,
    page: 'board-games',
    submenu: [{ label: 'Карточные' }, { label: 'С кубиком' }]
  }]
  const shopHeader = [{
    id: 1,
    icon: <GrMenu size='1.5em' color='#9eceff' className='icon'/>,
    label: 'Каталог товаров'
  },
{
  id: 2,
  label: 'Новинки'
},
{
  id: 3,
  label: 'Бестселлеры'
},
{
  id: 4,
  label:'Топ 250'
},
{
  id: 5,
  label:'Распродажа'
}]
  const banners = [Banner1, Banner2, Banner3];
  return (
    <React.Fragment>
      <Banner banner1={Banner1} banner2={Banner2} banner3={Banner3}/>
      <ShopHeader shopHeader={shopHeader}/>
      <Menu menu={menu} />
    </React.Fragment>
  )
}
export default Home;