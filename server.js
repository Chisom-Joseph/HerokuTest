const express = require("express");
const app = express();
// CONFIGURE DOTENV
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT || 3000;
const users = require("./users.json");

app.get("/api/users", (req, res) => {
  const errorMessage = "No user found";

  if (
    req.query.id !== undefined ||
    req.query.firstName !== undefined ||
    req.query.lastName !== undefined ||
    req.query.email !== undefined ||
    req.query.age !== undefined ||
    req.query.gender !== undefined
  ) {
    console.log(
      req.query.id !== undefined,
      req.query.firstName !== undefined,
      req.query.lastName !== undefined,
      req.query.email !== undefined,
      req.query.age !== undefined,
      req.query.gender !== undefined
    );
    //  ID
    if (req.query.id !== undefined) {
      const newArray = users.filter((user) => {
        return user._id === req.query.id;
      });
      if (newArray[0] !== undefined) return res.json(newArray);
      else return res.json({ status: "error", message: errorMessage });
    }

    // FIRST NAME
    if (req.query.firstName !== undefined) {
      const newArray = users.filter((user) => {
        return user.firstName === req.query.firstName;
      });
      if (newArray[0] !== undefined) return res.json(newArray);
      else return res.json({ status: "error", message: errorMessage });
    }

    // LAST NAME
    if (req.query.lastName !== undefined) {
      const newArray = users.filter((user) => {
        return user.lastName === req.query.lastName;
      });
      if (newArray[0] !== undefined) return res.json(newArray);
      else return res.json({ status: "error", message: errorMessage });
    }

    // EMAIL
    if (req.query.email !== undefined) {
      const newArray = users.filter((user) => {
        return user.email === req.query.email;
      });
      if (newArray[0] !== undefined) return res.json(newArray);
      else return res.json({ status: "error", message: errorMessage });
    }

    // AGE
    if (req.query.age !== undefined) {
      const newArray = users.filter((user) => {
        return user.age === req.query.age;
      });
      if (newArray[0] !== undefined) return res.json(newArray);
      else return res.json({ status: "error", message: errorMessage });
    }

    // GENDER
    if (req.query.gender !== undefined) {
      const newArray = users.filter((user) => {
        return user.gender === req.query.gender;
      });
      if (newArray[0] !== undefined) return res.json(newArray);
      else return res.json({ status: "error", message: errorMessage });
    }

    return res.json({ status: "error", message: "Invalid query" });
  } else {
    console.log("no query");
  }
  res.json(users);

  console.log("done with it");
});
app.use((req, res) => {
  res.send(
    `
          <h1 color=red>Error</h1>
          <h4>Page not found</h4>
          <a href=/api/users>Visit api</a>
          `
  );
});

app.listen(port, () => {
  console.log(`Server is up and running on http://localhost:${port}`);
});
