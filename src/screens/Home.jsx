

import OpenLinnk from '../components/Core/OpenLink.jsx';
import Body from '../components/Home/Body.jsx';
import Footer from '../components/Home/Footer.jsx';


import reactLogo from "/src/assets/react.svg";
import viteLogo from "/src/assets/vite.svg";
import githublogo from "/src/assets/git.svg";

//import { useSelector } from'react-redux';
const Home = () => {
    // const count = useSelector((state) => state.counter.value)
    return (
        <div>
            {/* <span>{count}</span> */}
            <div>
            <OpenLinnk redirectURL="https://vite.dev" logoImage={viteLogo}></OpenLinnk>
            <OpenLinnk redirectURL="https://react.dev" logoImage={reactLogo}></OpenLinnk>
            <OpenLinnk redirectURL="https://github.com/" logoImage={githublogo}></OpenLinnk>
            </div> 
            <Body></Body>
            <Footer></Footer>
            
        </div>
    );
};
export default Home;