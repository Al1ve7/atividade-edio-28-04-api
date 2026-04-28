import pg from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const { Pool } = pg;

const config = {
    host:"localhost",
    password:"senai",
    user:"postgress",
    port:"5000",
    database:"",
    name:"28042026"

}

export const db = new Pool(config)