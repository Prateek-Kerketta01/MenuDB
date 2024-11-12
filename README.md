# MenuDB API

A Node.js and Express.js API for managing a menu database. This project allows users to create, read, update, and delete menu items stored in MongoDB.

## Features
- Add new menu items
- Fetch all menu items
- Filter menu items by taste type (e.g., Sweet, Spicy, Sour)
- Update existing menu items by ID
- Delete menu items by ID

## Technologies Used
- **Node.js** - Backend runtime
- **Express.js** - Web framework for building the REST API
- **MongoDB** - Database for storing menu items
- **Mongoose** - ODM for MongoDB

## Getting Started

### Prerequisites
Ensure you have the following installed:
- Node.js
- MongoDB

### Installation

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/your-username/MenuDB.git
   \`\`\`

2. Navigate to the project directory:
   \`\`\`bash
   cd MenuDB
   \`\`\`

3. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

4. Set up environment variables:
   Create a `.env` file in the root directory and add:
   \`\`\`plaintext
   DB_URL=mongodb://127.0.0.1:27017/hotel
   PORT=3000
   \`\`\`

5. Start the server:
   \`\`\`bash
   node server.js
   \`\`\`
   The server will run on \`http://localhost:3000\`.

## API Documentation

### Endpoints

#### GET /menu
Fetch all menu items.
- **Response:** JSON array of menu items

#### GET /menu/hi
Test endpoint, returns "hi".

#### POST /menu
Add a new menu item.
- **Request Body:** JSON with \`name\`, \`price\`, \`taste\`, \`is_drink\`, \`ingredient\`, and \`num_sales\`.
- **Response:** JSON of the saved item.

#### GET /menu/:tasteType
Fetch menu items by taste type (e.g., \`Sweet\`, \`Spicy\`, \`sour\`).
- **Parameters:** \`tasteType\` (Sweet, Spicy, sour)
- **Response:** JSON array of menu items matching the taste type.

#### PUT /menu/:id
Update a menu item by ID.
- **Parameters:** \`id\` (ID of the menu item)
- **Request Body:** JSON with fields to update
- **Response:** JSON of the updated item.

#### DELETE /menu/:id
Delete a menu item by ID.
- **Parameters:** \`id\` (ID of the menu item)
- **Response:** JSON of the deleted item.

## Database Schema
The \`Menu\` collection contains the following fields:
- \`name\`: String (required)
- \`price\`: Number (required)
- \`taste\`: Enum ('Sweet', 'Spicy', 'sour')
- \`is_drink\`: Boolean
- \`ingredient\`: Array of Strings
- \`num_sales\`: Number (default 0)

## Running the Project

1. Make sure MongoDB is running on your local machine.
2. Use Postman or a similar tool to test the API endpoints.

## License
This project is licensed under the MIT License." > README.md
