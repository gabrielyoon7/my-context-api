import React from "react";

export interface GlobalState {
  value1: boolean;
  value2: string;
  setValue1: (value: boolean) => void;
  setValue2: (value: string) => void;
}


export const GlobalContext = React.createContext<GlobalState>({
  value1: false,
  value2: '',
  setValue1: () => { },
  setValue2: () => { }
});


interface GlobalProviderProps {
  children: React.ReactNode;
}


class GlobalProvider extends React.Component<GlobalProviderProps, GlobalState> {
  state: GlobalState = {
    value1: false,
    setValue1: (newValue) => this.setState({ value1: newValue }),
    value2: '하이',
    setValue2: (newValue) => this.setState({ value2: newValue }),
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
