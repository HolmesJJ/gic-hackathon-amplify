import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { Button } from "@material-ui/core";
// import { TextField } from "@mui/material";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';

import { useLoginEntry as useStyles } from "../styles/Login";

function LoginEntry() {
  const LOGIN_URL = "https://3e6ew7430f.execute-api.ap-southeast-1.amazonaws.com/login"
  const navigate = useNavigate();
  const styles = useStyles();

  const [errorMessage, setErrorMessage] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function login() {
    fetch(LOGIN_URL, {
      method: "POST",
      cache: "no-cache",
      headers: {
        "Content-Type'": "application/json"
      },
      body: JSON.stringify({
        name: username,
        password: password
      })
    }).then((data) => {
      if (data.code === 1) {
        navigate("/food");
      } else {
        setErrorMessage("Incorrect username or password");
      }
    }).catch((error) => {
      console.log(error);
      setErrorMessage("Server error");
    });
  }

  return (
    <div className={styles.container}>
      {/* <div>
        <p className={styles.title}>Login</p>
      </div>
      <div className={styles.row}>
        <FontAwesomeIcon icon={faUser} className={styles.icon} />
        <TextField
          className={styles.text}
          required
          label="Username"
          onChange={(event) => {
            const { value } = event.target;
            setUsername(value);
          }}
        />
      </div>
      <div className={styles.row}>
        <FontAwesomeIcon icon={faLock} className={styles.icon} />
        <TextField
          className={styles.text}
          required
          label="Password"
          type="password"
          onChange={(event) => {
            const { value } = event.target;
            setPassword(value);
          }}
        />
      </div>
      <Button
        variant="outlined"
        size="large"
        color="primary"
        className={styles.button}
        onClick={() => login()}
      >
        Login
      </Button>
      <div>
        <p className={styles.error}>{errorMessage}</p>
      </div> */}
    </div>
  );
}

export default LoginEntry;
