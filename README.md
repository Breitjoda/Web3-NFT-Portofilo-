# Web3 NFT Portfolio

A modern Web3 NFT Portfolio application built with Next.js, Express.js, and Solidity smart contracts.

## 🏗️ Project Structure

```
web3-nft-portofilo/
├── frontend/              # Next.js Frontend
│   ├── src/
│   │   ├── pages/        # Next.js pages
│   │   ├── components/   # React components
│   │   ├── hooks/        # Custom React hooks
│   │   ├── services/     # API services
│   │   └── utils/        # Utility functions
│   └── public/           # Static assets
├── backend/              # Express.js Backend
│   ├── src/
│   │   ├── services/     # Business logic
│   │   ├── utils/        # Utility functions
│   │   └── index.ts      # Entry point
│   └── dist/             # Compiled output
├── contracts/            # Smart Contracts (Solidity)
│   ├── NFTPortfolio.sol  # Main contract
│   └── interfaces/       # Contract interfaces
├── config/              # Configuration files
│   └── hardhat.config.ts # Hardhat configuration
├── abi/                 # Contract ABIs
├── assets/              # Images and assets
└── package.json         # Root package.json
```

## 🚀 Quick Start

### Prerequisites
- Node.js 16+
- npm or yarn
- MetaMask or similar Web3 wallet

### Installation

1. Clone the repository
```bash
git clone https://github.com/Breitjoda/Web3-NFT-Portofilo-.git
cd Web3-NFT-Portofilo-
```

2. Install dependencies
```bash
npm install
```

3. Setup environment variables
```bash
cp .env.example .env.local
# Edit .env.local with your configuration
```

### Development

Run both frontend and backend:
```bash
npm run dev
```

Or run individually:
```bash
# Frontend only
npm run dev:frontend

# Backend only
npm run dev:backend
```

## 📦 Tech Stack

- **Frontend**: Next.js, React, TypeScript, ethers.js
- **Backend**: Express.js, TypeScript, ethers.js
- **Blockchain**: Solidity, Hardhat
- **Web3**: ethers.js, MetaMask

## 📝 Features

- [ ] Wallet connection
- [ ] Fetch NFTs by address
- [ ] Display NFT gallery
- [ ] NFT details view
- [ ] Smart contract deployment
- [ ] Portfolio management

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📧 Contact

For questions or suggestions, please reach out to the project maintainer.
