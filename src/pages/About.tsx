import React from "react";
import NavBar from "../components/NavBar";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  header: {
    paddingTop: '12%'
  },
  team: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    margin: '0 auto',
    paddingTop: '3%',
    width: '75%'
  },
  profilePic: {
    borderRadius: 12,
    width: 200,
  },
  githubLogo: {
    width: 100,
  },
  teammember: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    lineHeight: 0.25,
    padding: ".5%",
    borderRadius: 10,
    "&:hover": {
      top: "-3px",
      left: "-3px",
      boxShadow: "3px 3px 15px 0px rgba(82, 82, 82, 0.85)",
    },
  },
});

function About() {
  const classes = useStyles();

  return (
    <div>
      <NavBar />
      <h1 className={classes.header}>The Team</h1>
      <div className={classes.team}>
        <div className={classes.teammember}>
          <img
            className={classes.profilePic}
            src="https://avatars2.githubusercontent.com/u/57117884?s=460&u=36ec0b2ffb92f78e303b0b2849c70cc95a54c4cc&v=4"
            alt="Bernd de Kruik"
          />
          <p>Bernd de Kruik</p>
          <p>Web Developer</p>
          <a href="https://github.com/MorbidMiyako">
            <img
              className={classes.githubLogo}
              src="https://i.pinimg.com/600x315/2c/b6/70/2cb670b6ddd8922a1c1b2fee4f6f758c.jpg"
              alt="Github logo"
            />
          </a>
        </div>
        <div className={classes.teammember}>
          <img
            className={classes.profilePic}
            src="https://avatars2.githubusercontent.com/u/52930131?s=460&u=9e967082f9299e499214b87757e31c21d2aaab93&v=4"
            alt="Brandy Becker"
          />
          <p>Brandy Becker</p>
          <p>Web Developer</p>
          <a href="https://github.com/brandybecker">
            <img
              className={classes.githubLogo}
              src="https://i.pinimg.com/600x315/2c/b6/70/2cb670b6ddd8922a1c1b2fee4f6f758c.jpg"
              alt="Github logo"
            />
          </a>
        </div>
        <div className={classes.teammember}>
          <img
            className={classes.profilePic}
            src="https://avatars3.githubusercontent.com/u/39717954?s=460&u=ff2e3b7f0941b4ee75c6df8aecf83b384829b80f&v=4"
            alt="Marco White"
          />
          <p>Marco White</p>
          <p>Web Developer</p>
          <a href="https://github.com/marwhyte">
            <img
              className={classes.githubLogo}
              src="https://i.pinimg.com/600x315/2c/b6/70/2cb670b6ddd8922a1c1b2fee4f6f758c.jpg"
              alt="Github logo"
            />
          </a>
        </div>
        <div className={classes.teammember}>
          <img
            className={classes.profilePic}
            src="https://avatars2.githubusercontent.com/u/57642471?s=460&u=2740139954e8e1c8c1edfb7fa17be13e3d6c7e76&v=4"
            alt="Allen Do"
          />
          <p>Allen Do</p>
          <p>Web Developer</p>
          <a href="https://github.com/immxalan">
            <img
              className={classes.githubLogo}
              src="https://i.pinimg.com/600x315/2c/b6/70/2cb670b6ddd8922a1c1b2fee4f6f758c.jpg"
              alt="Github logo"
            />
          </a>
        </div>
        <div className={classes.teammember}>
          <img
            className={classes.profilePic}
            src="https://avatars0.githubusercontent.com/u/58431582?s=460&u=946065f2a65fa82e0bd7ea208b61b94145af3525&v=4"
            alt="Celeste Griffin"
          />
          <p>Celeste Griffin</p>
          <p>Data Scientist</p>
          <a href="https://github.com/celestebgriff">
            <img
              className={classes.githubLogo}
              src="https://i.pinimg.com/600x315/2c/b6/70/2cb670b6ddd8922a1c1b2fee4f6f758c.jpg"
              alt="Github logo"
            />
          </a>
        </div>
        <div className={classes.teammember}>
          <img
            className={classes.profilePic}
            src="https://avatars3.githubusercontent.com/u/14141868?s=460&u=44031fd47b2eceb8fa61eca14a69ebd0e5720f78&v=4"
            alt="Andronik Mkrtychev"
          />
          <p>Andronik Mkrtychev</p>
          <p>Data Scientist</p>
          <a href="https://github.com/andronikmk">
            <img
              className={classes.githubLogo}
              src="https://i.pinimg.com/600x315/2c/b6/70/2cb670b6ddd8922a1c1b2fee4f6f758c.jpg"
              alt="Github logo"
            />
          </a>
        </div>
        <div className={classes.teammember}>
          <img
            className={classes.profilePic}
            src="https://avatars3.githubusercontent.com/u/40441965?s=460&u=fd23fe2f4191b58148af21b7eaacaa957917ed8f&v=4"
            alt="Anna Franceschi"
          />
          <p>Anna Franceschi</p>
          <p>Team Lead</p>
          <a href="https://github.com/bamfranceschi">
            <img
              className={classes.githubLogo}
              src="https://i.pinimg.com/600x315/2c/b6/70/2cb670b6ddd8922a1c1b2fee4f6f758c.jpg"
              alt="Github logo"
            />
          </a>
        </div>
        <div className={classes.teammember}>
          <img
            className={classes.profilePic}
            src="https://avatars1.githubusercontent.com/u/58271389?s=460&u=4d3e0139e1c0c702562856c8b27022756be1c76b&v=4"
            alt="Richard Lynch"
          />
          <p>Richard Lynch</p>
          <p>Web Developer</p>
          <a href="https://github.com/richknicks">
            <img
              className={classes.githubLogo}
              src="https://i.pinimg.com/600x315/2c/b6/70/2cb670b6ddd8922a1c1b2fee4f6f758c.jpg"
              alt="Github logo"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
