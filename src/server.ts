'use strict';

import "reflect-metadata";
import { createConnection } from "typeorm";
import { app } from "./App";

let port = process.env.PORT;
if (port == null || port == "") {
  port = '8080';
}

app.listen(port, async() => {
  await createConnection();
});
console.log(`Running on http://localhost:${port}`);
