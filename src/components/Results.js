import React from "react";
import "./Results.css";

//Material UI imports
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    maxWidth: 300,
    minWidth: 300,
    marginBottom: 100,
  },
  media: {
    height: 300,
  },
});

const Results = ({ searchData }) => {
  const classes = useStyles();

  return (
    <div className="container">
      {searchData &&
        searchData.map((searchData) => {
          return (
            <div className={classes.card} key={searchData.id}>
              <Card elevation={3}>
                <CardHeader title={searchData.name} />
                <CardMedia
                  className={classes.media}
                  image={searchData.image.url}
                  title={searchData.name}
                />
                <CardContent>
                  <Typography variant="body1">
                    {searchData.name} first appeared in{" "}
                    {searchData.biography["first-appearance"]} which was
                    published by {searchData.biography.publisher}
                  </Typography>
                </CardContent>
              </Card>
            </div>
          );
        })}
    </div>
  );
};

export default Results;
