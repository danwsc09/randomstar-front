import { Switch, Route } from 'react-router-dom';
import LoginForm from 'components/main/loginForm/LoginForm';
import MainHome from 'components/main/mainHome/MainHome';

const Main = () => {
  return (
    <section className="container">
      <Switch>
        <Route path="/login">
          <LoginForm />
        </Route>
        <Route path="/register">{/* <RegistrationForm /> */}</Route>
        <Route path="/ranking">{/* <Ranking /> */}</Route>
        <Route path="/abilites">{/* <AbilityList /> */}</Route>
        <Route path="/players">{/* <PlayerList /> */}</Route>
        <Route path="/new">
          <div></div>
        </Route>
        <Route path="/">
          <MainHome />
        </Route>
      </Switch>
    </section>
  );
};

export default Main;
