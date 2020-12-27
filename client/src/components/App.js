import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import StreamCreate from './streams/StreamCreate'
import StreamDelete from './streams/StreamDelete'
import StreamEdit from './streams/StreamEdit'
import StreamList from './streams/StreamList'
import StreamShow from './streams/StreamShow'
import Header from './Header';
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
    palette: {
      type: "dark"
    }
});

const App = () => {
    return (
        <div>
            <ThemeProvider theme={theme}> 
                <BrowserRouter>
                    <div>
                    
                        <Header />
                        <Route path="/" exact component={StreamList} />
                        <Route path="/streams/new" exact component={StreamCreate} />
                        <Route path="/streams/edit" exact component={StreamEdit} />
                        <Route path="/streams/delete" exact component={StreamDelete} />
                        <Route path="/streams/show" exact component={StreamShow} />
                    </div>
                </BrowserRouter>
            </ThemeProvider>
        </div>
    )
}

export default App;