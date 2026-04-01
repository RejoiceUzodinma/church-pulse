/**
 * Project: Vouch Backend API
 * Founder: Rejoice Uzodinma
 * Description: Node.js/Express server handling escrow transaction logic.
 * Note: This MVP uses in-memory storage for demonstration.
 */

const express = require("express");
const cors = require("cors");

const app = express();
// Use Environment Variable for Port (Standard for deployment)
const PORT = process.env.PORT || 5000;

// =============================
// MIDDLEWARE CONFIGURATION
// =============================
app.use(cors()); 
app.use(express.json()); // Parses incoming JSON requests

// In-memory Database (Temporary for MVP)
let transactions = []; 

// =============================
// API ROUTES
// =============================

/**
 * @route   GET /
 * @desc    Server Heartbeat
 */
app.get("/", (req, res) => {
    res.status(200).send("Vouch API v1.0.0 is operational.");
});

/**
 * @route   GET /transactions
 * @desc    Retrieve all transaction history
 */
app.get("/transactions", (req, res) => {
    res.status(200).json(transactions);
});

/**
 * @route   POST /transactions
 * @desc    Initialize a new escrow contract
 */
app.post("/transactions", (req, res) => {
    const { buyer, seller, item, amount } = req.body;

    // Basic Validation: Ensure required fields exist
    if (!buyer || !seller || !amount) {
        return res.status(400).json({ message: "Missing required transaction fields." });
    }

    const newTransaction = {
        id: `vch_${Date.now()}`, // Professional prefix for IDs
        buyer: buyer.trim(),
        seller: seller.trim(),
        item: item ? item.trim() : "General Merchandise",
        amount: Number(amount),
        status: "pending",
        createdAt: new Date().toISOString()
    };

    transactions.push(newTransaction);
    console.log(`[LOG] Contract Created: ${newTransaction.id}`);

    res.status(201).json({
        message: "Transaction successfully initialized.",
        data: newTransaction
    });
});

/**
 * @route   PATCH /transactions/:id
 * @desc    Update transaction lifecycle (Secured, Released, Disputed)
 */
app.patch("/transactions/:id", (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    
    // Normalize status inputs
    const validStatuses = ['pending', 'secured', 'released', 'disputed'];
    const formattedStatus = status ? status.toLowerCase() : null;

    if (!validStatuses.includes(formattedStatus)) {
        return res.status(400).json({ message: "Invalid status update provided." });
    }

    const index = transactions.findIndex(t => t.id === id);
    
    if (index !== -1) {
        transactions[index].status = formattedStatus;
        transactions[index].updatedAt = new Date().toISOString();
        
        console.log(`[LOG] Update: ${id} status set to ${formattedStatus}`);
        
        res.status(200).json({ 
            message: `Transaction ${formattedStatus} successfully.`, 
            data: transactions[index] 
        });
    } else {
        res.status(404).json({ message: "Transaction record not found." });
    }
});

// =============================
// SERVER INITIALIZATION
// =============================
app.listen(PORT, () => {
    console.log(`
    ======================================
    VOUCH BACKEND ENGINE STARTING...
    Status: Operational
    Mode: Development
    URL: http://localhost:${PORT}
    ======================================
    `);
});