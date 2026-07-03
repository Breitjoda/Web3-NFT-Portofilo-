import axios from 'axios'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const getNFTs = async (address: string) => {
  try {
    const response = await apiClient.get(`/api/nfts/${address}`)
    return response.data
  } catch (error) {
    console.error('Failed to fetch NFTs', error)
    throw error
  }
}

export const getNFTDetails = async (contractAddress: string, tokenId: string) => {
  try {
    const response = await apiClient.get(`/api/nfts/${contractAddress}/${tokenId}`)
    return response.data
  } catch (error) {
    console.error('Failed to fetch NFT details', error)
    throw error
  }
}

export default apiClient
