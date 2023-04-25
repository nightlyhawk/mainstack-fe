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
                <img src={logo} alt="logo" />
            </div>
            <div>
                <h2><img src={db} alt="dashboard" />Dashboard</h2>
                <NavLink to=""> <img src={edit} alt="edit" /> item 1</NavLink>
                <NavLink to=""><img src={ran} alt="group" />item 2</NavLink>
                <NavLink to=""><img src={hourglass} alt="duration" />item 3</NavLink>
                <h3>PAYMENTS</h3>
                <NavLink to=""><img src={add_an_image} alt="add an image" />item 4</NavLink>
                <NavLink to=""><img src={trash} alt="delete" />item 5</NavLink>
                <h3>BUSINESS TOOLS</h3>
                <NavLink to=""><img src={subscription} alt="subscription" />item 6</NavLink>
                <NavLink to=""><img src={file} alt="file present" />item 7</NavLink>
                <NavLink to=""><img src={alarm} alt="alarm" />item 8</NavLink>
            </div>

         </div>
    )
}