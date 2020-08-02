This project was built to learn CODE SPLITTING tecnique and "lazy-load" components when needed.

Ref. https://reactjs.org/docs/code-splitting.html

## Branch "asynccomponent"

It contains the code using an HoC called "asynccomponent"


## Branch "reactlazy"

It contains the code using the React.lazy function.

Thanks to React.lazy function it's not necessary build a specific HoC, the component is automatically returned and it must be wrapped by the "Suspense" component provided by React library.

const componentToRenderWhenNeeded = React.lazy(() => import('./components/componentToRenderWhenNeeded'));