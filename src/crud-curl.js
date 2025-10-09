import dotenv from 'dotenv';
dotenv.config();
import { exec } from 'child_process';

const API_URL = process.env.API_URL || "http://localhost";
const PORT=process.env.PORT || 4000;
const BASE_URL=`${API_URL}:${PORT}`