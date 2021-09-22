import { Switch, Route } from 'react-router-dom';
import LoginForm from 'components/main/loginForm/LoginForm';
import RegistrationForm from 'components/main/registrationForm/RegistrationForm';
import PlayersTable from 'components/main/playersTable/PlayersTable';
import RecentMatches from 'components/main/recentMatches/RecentMatches';
import NewHomeForm from 'components/main/newMatchForm/NewFormHome';
import NewMatchForm from 'components/main/newMatchForm/NewMatchForm';
import NewGameForm from 'components/main/newMatchForm/NewGameForm';
import AbilityList from 'components/main/abilityList/AbilityList';

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
        <Route path="/new/match">
          <NewMatchForm />
        </Route>
        <Route path="/new/game">
          <NewGameForm />
        </Route>
        <Route path="/new">
          <NewHomeForm className="new-home-form" />
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
