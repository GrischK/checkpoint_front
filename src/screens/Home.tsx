import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import {Link} from "react-router-dom";
import World from "../assets/world.png"
import {Chip} from "@mui/material";
import PublicIcon from '@mui/icons-material/Public';
import FlagIcon from '@mui/icons-material/Flag';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 60,
    lineHeight: '60px',
    padding: 20,
}));

function Home() {
    return (
        <div className="main_container home">
            <div className="home_title">
                <h1>Learn about the World</h1>
                <h2>Discover continents and countries with all details.</h2>
            </div>
            <div className="illustration">
                <img src={World} alt="earth with children"/>
            </div>
            <div className="cards_container">
                <Link to={"/continents"} className="home_card">
                    <Chip icon={<PublicIcon />} label="Continents" color="primary" clickable/>
                </Link>
                <Link to={"/countries"} className="home_card">
                    <Chip icon={<FlagIcon />} label="Countries" color="primary" clickable/>
                </Link>
            </div>
        </div>
    );
}

export default Home;
