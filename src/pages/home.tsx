
import { useState } from 'react';
import SidebarComponent from '../components/SideBar';
import SinglePage from './MoviePage';

const Home = () => {
 const [label, setLabel] = useState("Home")
  return (
    <SidebarComponent onItemSelect={(e:string)=>setLabel(e)}>
        <SinglePage label={label}/>
    </SidebarComponent>
  );
};

export default Home;