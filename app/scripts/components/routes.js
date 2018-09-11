import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import loadable from 'loadable-components';
import { Transition, TransitionGroup } from 'transition-group';

const Home = loadable(() => import('../pages/Home'));
const Login = loadable(() => import('../pages/Login'));

const pages = {
  HOME: <Home />,
  LOGIN: <Login />
};

const Routes = ({ page }) => {
  return (
    <TransitionGroup duration={1000} prefix="page">
      <Transition key={page.pageName}>{pages[page.pageName]}</Transition>
    </TransitionGroup>
  );
};

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);
const mapState = ({ page, direction }) => ({
  page,
  direction
});
export default connect(
  mapState,
  mapDispatchToProps
)(Routes);
