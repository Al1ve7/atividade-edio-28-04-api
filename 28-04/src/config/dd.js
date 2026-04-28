import pg from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const { Pool } = pg;

const config = {
    host:"",
    password:"",
    user:"",
    port:"",
    database:""

}

export const db = new Pool(config)