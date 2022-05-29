import React from 'react';
import {Route, Routes} from "react-router-dom";
import {NewAdPage, ShowAdPage} from "../pages";


function AppRoute(props) {
    return (
        <Routes>
            <Route index path='/' element={<NewAdPage/>}/>
            <Route path='/show' element={<ShowAdPage />} />
        </Routes>
    );
}

export default AppRoute;