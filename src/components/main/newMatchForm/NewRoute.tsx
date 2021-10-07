import { Switch, Route, useRouteMatch } from 'react-router-dom';
import NewGameForm from './NewGameForm';
import NewHome from './NewHome';

const NewRoute: React.FC = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={path}>
        <NewHome className="" />
      </Route>
      <Route path={`${path}/game`}>
        <NewGameForm />
      </Route>
    </Switch>
  );
};

export default NewRoute;
