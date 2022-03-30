import React, {useContext} from 'react';
import {Routes, Route} from 'react-router-dom';
import {authRoutes, publicRoutes} from "../routes/routes";
import {Context} from "../index";
import {observer} from "mobx-react-lite";


const AppRouter = observer(() => {
    const {user} = useContext(Context)
    return (
      <Routes>
        {user.isAuth && authRoutes.map(({path, element}) =>
          <Route key={path} path={path} element={element}/>
        )}
        {publicRoutes.map(({path, element}) =>
          <Route key={path} path={path} element={element}/>
        )}
      </Routes>

    )
  }
)

export default AppRouter;