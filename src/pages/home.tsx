
import { useState } from 'react';
import Sidebar from '../components/SideBar';
import SinglePage from './MoviePage';

const Home = () => {
 const [label, setLabel] = useState("Home")
  return (
    <Sidebar onItemSelect={(e:string)=>setLabel(e)}>
        <SinglePage label={label}/>
    </Sidebar>
  );
};

export default Home;