import { supabase } from "./supabaseClient.js";

export async function getAllProducts() {
  try {
    console.log("Fetching all products from Supabase...");
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .order("id", { ascending: true });

    if (error) {
      console.error("Error fetching products:", error.message);
      return [];
    }

    console.log("Fetched products:", data);
    return data;
  } catch (err) {
    console.error("Unexpected error fetching products:", err);
    return [];
  }
}

// Function to fetch a single product by ID
export async function getProductById(id) {
  try {
    console.log(`Fetching product with ID: ${id}`);
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      console.error(`Error fetching product with ID ${id}:`, error.message);
      return null;
    }

    return data;
  } catch (err) {
    console.error(`Unexpected error fetching product with ID ${id}:`, err);
    return null;
  }
}
