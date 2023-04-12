import React from "react";

export interface GlobalState {
  value1: boolean;
  value2: string;
}


export const GlobalContext = React.createContext<GlobalState>({
  value1: false,
  value2: '',
});


interface GlobalProviderProps {
  children: React.ReactNode;
}


class GlobalProvider extends React.Component<GlobalProviderProps, GlobalState> {
  state: GlobalState = {
    value1: false,
    value2: '하이',
  };

  render() {
    return (
      <GlobalContext.Provider value={this.state}>
        {this.props.children}
      </GlobalContext.Provider>
    );
  }
}

export default GlobalProvider;
