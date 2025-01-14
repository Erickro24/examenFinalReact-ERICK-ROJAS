import Logo from '../components/Home/Logo.jsx';
import Body from '../components/Home/Body.jsx';
import Github from '/src/components/Home/Github.jsx';
import Footer from '../components/Home/Footer.jsx';

const Home = () => {
    return (
        <div>
            <Logo></Logo> 
            <Github></Github>
            <Body></Body>
            <Footer></Footer>
            
        </div>
    );
};
export default Home;