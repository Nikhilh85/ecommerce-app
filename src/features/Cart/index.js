import React from "react";
import { useSelector } from "react-redux";
import Drawer from "@mui/joy/Drawer";
import Grid from "@mui/joy/Grid";
import DialogTitle from "@mui/joy/DialogTitle";
import ModalClose from "@mui/joy/ModalClose";
import ProductCard from "../ProductCard";

const Cart = ({ open, onClose }) => {
  const products = useSelector((state) => state.cartState.products);

  return (
    <Drawer
      open={open}
      onClose={onClose}
      anchor="right"
      size="md"
      variant="plain"
    >
      <ModalClose />
      <DialogTitle>Cart</DialogTitle>
      <Grid
        container
        direction="column"
        spacing={2}
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {products?.length > 0
          ? products.map((p) => (
              <Grid size={12}>
                <ProductCard
                  productId={p.id}
                  imageUrl={p.image}
                  category={p.category}
                  name={p.name}
                  price={p.price}
                  quantity={p.quantity}
                  calledFrom={"Cart"}
                />
              </Grid>
            ))
          : "Your Cart is Empty"}
      </Grid>
    </Drawer>
  );
};

export default Cart;
