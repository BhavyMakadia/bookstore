// server.js
import express from 'express';
import cors from 'cors';


const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS for all routes
app.use(cors());

// Define your routes here

app.listen(1001, () => {
  console.log('Server is running on port 1001');
});
