import { Switch, Route } from 'react-router-dom';
import LoginForm from 'components/main/loginForm/LoginForm';
import RegistrationForm from 'components/main/registrationForm/RegistrationForm';
import PlayersTable from 'components/main/playersTable/PlayersTable';
import RecentMatches from 'components/main/recentMatches/RecentMatches';
import AbilityList from 'components/main/abilityList/AbilityList';
import NewRoute from 'components/main/newMatchForm/NewRoute';

const Main: React.FC = () => {
  return (
    <section className="container">
      <Switch>
        <Route path="/login">
          <LoginForm />
        </Route>
        <Route path="/register">
          <RegistrationForm />
        </Route>
        <Route path="/abilities">
          <AbilityList />
        </Route>
        <Route path="/players">
          <PlayersTable />
        </Route>

        <Route path="/new">
          <NewRoute />
        </Route>
        <Route path="/">
          <PlayersTable />
          <RecentMatches />
        </Route>
      </Switch>
    </section>
  );
};

export default Main;
