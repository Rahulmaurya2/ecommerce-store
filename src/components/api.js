import axios from "axios";
import { Switch, Route } from "react-router-dom";

// import React from "react";
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Make sure to import Switch



const API_BASE_URL = "http://localhost:3001/api";

// Function to fetch products
export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/products`);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

// Function to create a new account
export const createAccount = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/register`, userData);
    return response.data;
  } catch (error) {
    console.error("Error creating account:", error);
    throw error;
  }
};

// Function to log in
export const login = async (credentials) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, credentials);
    return response.data;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
};

// Function to add a product to the cart
export const addToCart = async (productId, userId) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/cart/add`, {
      productId,
      userId,
    });
    return response.data;
  } catch (error) {
    console.error("Error adding to cart:", error);
    throw error;
  }
};

// Function to remove a product from the cart
export const removeFromCart = async (productId, userId) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/cart/remove`, {
      productId,
      userId,
    });
    return response.data;
  } catch (error) {
    console.error("Error removing from cart:", error);
    throw error;
  }
};

// Function to update the quantity of a product in the cart
export const updateCartItemQuantity = async (productId, userId, quantity) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/cart/update`, {
      productId,
      userId,
      quantity,
    });
    return response.data;
  } catch (error) {
    console.error("Error updating cart item quantity:", error);
    throw error;
  }
};

// Function to place an order
export const placeOrder = async (orderData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/orders`, orderData);
    return response.data;
  } catch (error) {
    console.error("Error placing order:", error);
    throw error;
  }
};

// Function to fetch user's orders
export const fetchOrders = async (userId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/orders/user/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching orders:", error);
    throw error;
  }
};
