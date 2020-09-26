import React from "react";

export default function witDataFetching(WrappedComponent) {
  class WithDataFetching extends React.Component {
    render() {
      const { data, loading, error } = this.state;
      return (
        <WrappedComponent
          data={data}
          loading={loading}
          error={error}
          {...this.props}
        />
      );
    }
    constructor(props) {
      super(props);
      this.state = {
        data: [],
        loading: true,
        error: "",
      };
    }
    async componentDidMount() {
      try {
        const data = await fetch(this.props.dataSource);
        const dataJSON = await data.json();

        if (dataJSON) {
          this.setState({
            data: dataJSON,
            loading: false,
          });
        }
      } catch (error) {
        this.setState({
          loading: false,
          error: error.message,
        });
      }
    }
  }

  WithDataFetching.displayName = `WithDataFething(${WrappedComponent.name})`;
  return WithDataFetching;
}
