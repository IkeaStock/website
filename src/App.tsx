import type { Component } from 'solid-js';
import { Router } from '@solidjs/router';
import { RoutesArr } from './routes';
const App: Component = () => {
  return (
    <>
    <Router>
      <RoutesArr />
    </Router>
    </>
  );
};

export default App;
