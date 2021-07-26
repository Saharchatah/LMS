import React, { useContext } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import AdminPage from '../pages/AdminPage/AdminPage'
import AddAdmin from '../pages/AddAdmin/AddAdmin'
import EditAdmin from '../pages/EditAdmin/EditAdmin'
import HomePage from '../pages/HomePage/HomePage'
import ClassPage from '../pages/ClassPage/ClassPage'
import AddClass from '../pages/AddClass/AddClass'
import EditClass from '../pages/EditClass/EditClass';
import SectionPage from '../components/SectionPage/sectionPage';
import AddSection from '../pages/AddSection/AddSection';
import EditSection from '../pages/EditSection/EditSection'
import Attendance from '../pages/Attendance/Attendance';
import AttendanceView from '../pages/AttendanceView/AttendanceView';
import StudentPage from '../pages/StudentPage/StudentPage';
import EditStudent from '../pages/EditStudent/EditStudent'
import AddStudent from '../pages/AddStudent/AddStudent'
import Report from '../pages/Report/Report'
import StudentProfile from '../pages/StudentProfile/StudentProfile'
import LogIN from '../pages/LogIn/LogIn'
import About from '../pages/About/About'

import SessionContext from './session/SessionContext';

export default function Routes() {

    let { state: { user } } = useContext(SessionContext);

    return (
        <div>
            <Switch>

                <Route exact path="/" render={props => user.token ?
                    <Redirect {...props} to="/HomePage" /> :
                    <LogIN {...props} />
                } />

                <Route exact path="/HomePage" render={props => !user.token ?
                    <Redirect {...props} to="/" /> :
                    <HomePage {...props} />
                } />

                <Route exact path="/adminpage" render={props => !user.token ?
                    <Redirect {...props} to="/" /> :
                    <AdminPage {...props} />
                } />

                {/* <Route path="/HomePage" component={HomePage} /> */}
                {/* <Route path="/adminpage" component={AdminPage} /> */}

                <Route path="/addadmin" component={AddAdmin} />
                



                <Route path="/editadmin/:id" component={EditAdmin} />


                <Route path="/classpage" component={ClassPage} />


                <Route path="/addclass" component={AddClass} />

                
                <Route path="/editclass/:id" component={EditClass} />
                <Route path="/sectionpage" component={SectionPage} />
                <Route path="/addsection" component={AddSection} />
                <Route path="/editsection/:id" component={EditSection} />
                <Route path="/attendance" component={Attendance} />
                <Route path="/attendanceview" component={AttendanceView} />
                <Route path="/StudentPage" component={StudentPage} />
                <Route path="/EditStudent/:id" component={EditStudent} />
                <Route path="/addstudent" component={AddStudent} />
                <Route path="/report" component={Report} />
                <Route path="/StudentProfile/:id" component={StudentProfile} />
                <Route path="/About" component={About} />

            </Switch>

        </div>
    );
}