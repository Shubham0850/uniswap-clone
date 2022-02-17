CREATE DATABASE uniswap;

--\c into uniswap

CREATE TABLE Transactions(
    _id SERIAL PRIMARY KEY,
    transaction_hash VARCHAR(255),
    from_address VARCHAR(255),
    to_address VARCHAR(255),
    amount FLOAT(10),
    time_stamp TIMESTAMP
);

CREATE TABLE Users(
    _id SERIAL PRIMARY KEY,
    wallet_address VARCHAR(255) NOT NULL UNIQUE,
    user_name VARCHAR(255)
);