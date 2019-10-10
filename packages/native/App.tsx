import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import {SomeThing} from 'shared/components/Something';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <SomeThing />
      </SafeAreaView>
    </>
  );
};

export default App;
