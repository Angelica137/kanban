import React from "react";

export default function witDataFetching(WrappedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: [],
        loading: true,
        error: "",
      };
    }
  };
}
