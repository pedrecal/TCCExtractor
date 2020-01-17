import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../login';
import submitFile from '../submitFile';
import params from '../params';
import extractedInfo from '../extractedInfo';
import registeredParams from '../registeredParams';

export default function index() {
  return (
    <main>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/submitFile" component={submitFile} />
        <Route exact path="/extractionParam" component={params} />
        <Route exact path="/extractedInfo" component={extractedInfo} />
        <Route exact path="/registeredParams" component={registeredParams} />
        <Route render={() => <h2>404 Page Not Found</h2>} />
      </Switch>
    </main>
  );
}
