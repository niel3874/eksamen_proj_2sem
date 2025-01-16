import { supabase } from "./supabaseClient.js";

// Fetch all products
export async function getAllProducts() {
  const { data, error } = await supabase
    .from("products")
    .select("id, name, price, description, image_url");

  if (error) {
    console.error("Error fetching products:", error.message);
    return [];
  }

  return data; // Returns an array of products
}

// Fetch a single product by ID
export async function getProductById(id) {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", id) // Match the numeric ID
    .single();

  if (error) {
    console.error(`Error fetching product with ID ${id}:`, error.message);
    return null;
  }

  return data; // Returns a single product object
}
