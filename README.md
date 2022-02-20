# uniswap-clone

### Uniswap
Uniswap is a leading decentralized crypto exchange that runs on the Ethereum blockchain. It is a completely different type of exchange that‘s fully decentralized – meaning it isn’t owned and operated by a single entity – and uses a relatively new type of trading model called an automated liquidity protocol.

### Suporting Coin 
1. ETH ⟠

### Project Structure
`client` -> Frontend of the application

`smart_contract` -> Our contract developed on Solidity

`backend` -> Node server and Postgresql Database

`studio` -> Sanity.io server to store application data

Note:- We will either use `backend` to store our data on Postgresql Database or `studio` to store our data on Sanity.io

### How to use this repo

#### Step 1: Clone the repo

`git clone git@github.com:Shubham0850/uniswap-clone.git`

----------------------------------------------------------------

#### Step 2: Setup our frontend

Go to the client directory `cd client`,

To install dependencies run `yarn`,

Run to start local dev server `yarn dev`

-----------------------------------------------------------------

#### Step 3: Setup our backend

Go to the backend directory `cd backend`,

To install dependencies run `yarn`,

Run to start local dev server `yarn serve`


-----------------------------------------------------------------

### If want to use Sanity Database

Go to the studio directory `cd studio`,

To install dependencies run `yarn`,

Run to start local dev server `sanity start`


-----------------------------------------------------------------


### If you want to update your smart contract

Go to the contract directory `cd smart_contract`,

To install dependencies run `yarn`,

After updating and compiling the contract. Go back to `smart_contract/artifacts/contracts/Transactions.json` and copy the content inside it and paste it to our frontend `client/lib/Transactins.json`

After that you are ready to rock 🚀.

Youtube video : (Clever Programmer)[https://www.youtube.com/watch?v=xXxjRzdYIss&t=2s]