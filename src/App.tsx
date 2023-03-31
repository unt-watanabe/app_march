import Grid from '@mui/material/Grid';
import { Header } from './components/Header';
import { Form } from './components/Form';
import { Footer } from './components/Footer';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Grid container>
        <Grid item xs={12}>
          <header>
            <Header />
          </header>
        </Grid>
        <Grid item xs={12}>
          <main>
            <Form />
          </main>
        </Grid>
        <Grid item xs={12}>
          <footer>
            <Footer />
          </footer>
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
