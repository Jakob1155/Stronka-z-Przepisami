/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export const Searchbar = ({ setRecipes }) => {
  const [query, setQuery] = useState("chicken");

  async function fetchRecipes() {
    try {
      const response = await fetch(
        `https://api.edamam.com/api/recipes/v2?q=${query}&type=public&app_id=8b87c513&app_key=7c342e634e6b3f260e688dba9fe30e66`
      );
      const data = await response.json();
      setRecipes(data.hits);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  }

  useEffect(() => {
    fetchRecipes();
  }, []);

  function handleChange(event) {
    setQuery(event.target.value);
  }

  return (
    <TextField
      sx={{ backgroundColor: "white" }}
      label="Wyszukaj"
      onChange={handleChange}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={fetchRecipes}>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
      fullWidth
    />
  );
};