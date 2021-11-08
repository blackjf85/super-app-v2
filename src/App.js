import Search from "./components/Search";

// Material UI imports//
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  h1: {
    marginTop: "50px",
    marginBottom: "50px",
    display: "flex",
    justifyContent: "center",
  },
});

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <Typography
        className={classes.h1}
        variant="h3"
        component="h1"
        color="primary"
      >
        Heroes and Villains
      </Typography>
      <Search />
    </div>
  );
}

export default App;
