import { NavigationActions, StackActions } from 'react-navigation';

let _navigator;

export const navigationService = {
  navigate,
  setTopLevelNavigator,
  back,
  reset,
  logNavigator,
  getCurrentRoute,
  getScreenRegisteredFunctions,
  openDrawer
};

function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}

function navigate(options) {
  _navigator.dispatch(
    NavigationActions.navigate(options)
  );
}

function back() {
  _navigator.dispatch(NavigationActions.back());
}

function reset(options) {
  _navigator.dispatch(
    StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate(options)],
    })
  )
}

function getCurrentRoute() {
  return currentRoute(_navigator.state.nav);

  function currentRoute(nav) {
    if (Array.isArray(nav.routes) && nav.routes.length > 0) {
      return currentRoute(nav.routes[nav.index])
    } else {
      return nav
    }
  }
}

function logNavigator() {
  console.log('navigator', _navigator);
}


function getScreenRegisteredFunctions(navState) {
  // When we use stack navigators. 
  // Also needed for react-navigation@2
  const { routes, index, params } = navState;

  if (navState.hasOwnProperty('index')) {
    return getScreenRegisteredFunctions(routes[index]);
  }
  // When we have the final screen params
  else {
    return params;
  }
}

function openDrawer() {
  _navigator.openDrawer();
}

