import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const message = process.env.MESSAGE || 'Hello from Node.js with TypeScript!';
console.log(message);
