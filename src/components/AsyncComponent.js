import React from 'react';


const asyncComponent = (importedComponent) => {

    return class extends React.Component {
        constructor(props) {
            super(props)

            this.state = {
                component: null
            }

        }

        componentDidMount = async () => {
            const newComponent = await importedComponent()
            this.setState({ component: newComponent.default })
        }

        render() {

            console.log(this.state.component)

            const C = this.state.component;
            return C ? <C {...this.props} /> : null;

        }
    }
}

export default asyncComponent;