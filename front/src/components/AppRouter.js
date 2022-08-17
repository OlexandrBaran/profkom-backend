import { useContext } from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import { Context } from '..';
import { adminRoutes, authRoutes, publicRoutes, superAdminRoutes } from '../routes';
import { HOME_ROUTE } from '../utils/consts';

const AppRouter = () => {
    const {user} = useContext(Context);

    return(
        
        <Routes>

            {publicRoutes.map((item) => {
                return(
                    <Route exact key={item.path} path={item.path} element={item.Component}/>
                )})
            }

            {user.isAuth && authRoutes.map((item) => {
                return(
                    <Route exact key={item.path} path={item.path} element={item.Component}/>
                )})
            }

            {user.isAdmin && adminRoutes.map((item) => {
                return(
                    <Route exact key={item.path} path={item.path} element={item.Component}/>
                )}) 
            }

            {user.isSuperAdmin && superAdminRoutes.map((item) => {
                return(
                    <Route exact key={item.path} path={item.path} element={item.Component}/>
                )})
            }
            <Route path="*" element={<Navigate to = {HOME_ROUTE} />}/>
        </Routes>
    );
}

export default AppRouter;