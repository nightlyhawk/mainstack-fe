import { NavLink } from 'react-router-dom';
import db from '../icons/dashboard.svg';
import edit from '../icons/edit.svg';
import ran from "../icons/group.svg";
import hourglass from '../icons/hourglass_empty.svg';
import alarm from '../icons/alarm.svg';
import subscription from '../icons/subscriptions.svg';
import trash from '../icons/delete.svg';
import add_an_image from '../icons/add_a_photo.svg';
import file from '../icons/file_present.svg';
import logo from '../mainstack-logo.svg';




export const DashBoard = () => {

    return (
         <div className='dash'>
            <div>
                <img src={logo} alt="logo" className='pad' />
            </div>
            <div className='tabs'>
                <h2 className='pad'><img src={db} alt="dashboard" />Dashboard</h2>
                <NavLink to="" className='pad'> <img src={edit} alt="edit" /> item 1</NavLink>
                <NavLink to="" className='pad'><img src={ran} alt="group" />item 2</NavLink>
                <NavLink to="" className='pad'><img src={hourglass} alt="duration" />item 3</NavLink>
                <h4 className='pad'>PAYMENTS</h4>
                <NavLink to="" className='pad'><img src={add_an_image} alt="add an image" />item 4</NavLink>
                <NavLink to="" className='pad'><img src={trash} alt="delete" />item 5</NavLink>
                <h4 className='pad'>BUSINESS TOOLS</h4>
                <NavLink to="" className='pad'><img src={subscription} alt="subscription" />item 6</NavLink>
                <NavLink to="" className='pad'><img src={file} alt="file present" />item 7</NavLink>
                <NavLink to="" className='pad'><img src={alarm} alt="alarm" />item 8</NavLink>
            </div>

         </div>
    )
}