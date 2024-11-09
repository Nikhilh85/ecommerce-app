import React, { useContext, useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/joy/Grid";
import ProductCard from "../ProductCard";
import useAxios from "../../hooks/useAxios";
import { FilterContext } from "../../context/filterContext";

const useStyles = makeStyles({
  root: {
    paddingBottom: 25,
    paddingTop: 25,
  },
});

const ProductList = () => {
  const classes = useStyles();
  const { searchValue } = useContext(FilterContext);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const { response, loading, error } = useAxios({
    method: "get",
    url: "/",
    headers: JSON.stringify({ accept: "*/*" }),
  });

  useEffect(() => {
    if (response)
      setFilteredProducts(
        response.filter((x) =>
          x.title.toLowerCase().includes(searchValue.toLowerCase())
        )
      );
    else setFilteredProducts(response);
  }, [searchValue, response]);

  if (loading) return <>Loading...</>;
  if (error) return <>Error</>;

  return (
    <Box className={classes.root}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{ flexGrow: 1 }}
      >
        {response &&
          filteredProducts?.map((p) => (
            <Grid key={p.id} size={{ xs: 2, sm: 4, md: 4 }}>
              <ProductCard
                productId={p.id}
                imageUrl={p.image}
                category={p.category}
                name={p.title}
                price={p.price}
                quantity={p?.quantity}
                calledFrom={"ProductList"}
              />
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default ProductList;
