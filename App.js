import React from 'react';
import { Provider } from 'react-redux';
import HomeTodo from './src/screen/HomeTodo';
import store from './src/store';
const App = () => {
  return (
    <Provider store={store}>
      <HomeTodo/>
    </Provider>
  )
}

export default App
