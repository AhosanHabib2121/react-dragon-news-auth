import logo from '../../../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className=' text-center mt-12 space-y-3'>
            <img className=' mx-auto' src={logo} alt="not found" />
            <h3 className=' text-[#706F6F] text-lg font-normal'>Journalism Without Fear or Favour</h3>
            <h3 className=' text-[#706F6F] text-lg font-normal'>{moment().format("dddd, MMMM d, YYYY")}</h3>
        </div>
    );
};

export default Header;