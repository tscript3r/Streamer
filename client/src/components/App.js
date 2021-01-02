import React from 'react';
import { Router, Route } from 'react-router-dom';
import StreamCreate from './streams/StreamCreate'
import StreamDelete from './streams/StreamDelete'
import StreamEdit from './streams/StreamEdit'
import StreamList from './streams/StreamList'
import StreamShow from './streams/StreamShow'
import Header from './Header';
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import history from '../history';

const theme = createMuiTheme({
    palette: {
      type: "dark"
    }
});

const App = () => {
    return (
        <div>
            <ThemeProvider theme={theme}> 
                <Router history={history}>
                    <div>
                        <Header />
                        <Route path="/" exact component={StreamList} />
                        <Route path="/streams/new" exact component={StreamCreate} />
                        <Route path="/streams/edit/:id" exact component={StreamEdit} />
                        <Route path="/streams/delete" exact component={StreamDelete} />
                        <Route path="/streams/show" exact component={StreamShow} />
                    </div>
                </Router>
            </ThemeProvider>
        </div>
    )
}

export default App;