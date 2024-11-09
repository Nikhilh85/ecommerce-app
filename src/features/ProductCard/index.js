import * as React from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Chip from "@mui/joy/Chip";
import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { truncateString } from "../../utils/stringUtil";
import { updateCartList } from "../../redux/Cart/cart.actions";

const ProductCard = ({
  productId,
  imageUrl,
  category,
  name,
  price,
  quantity,
  calledFrom,
}) => {
  const dispatch = useDispatch();

  const handleAddToCart = (op) => {
    dispatch(
      updateCartList(
        {
          id: productId,
          image: imageUrl,
          category,
          name,
          price,
          quantity: 1,
        },
        op
      )
    );
    toast(
      `Product: ${name} is ${
        op === "increase" ? "added to" : "removed from"
      } your Cart`
    );
  };

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      <Card sx={{ width: 320, maxWidth: "100%", boxShadow: "lg" }}>
        <CardOverflow>
          <AspectRatio objectFit="contain" sx={{ minWidth: 200 }}>
            <img src={imageUrl} loading="lazy" alt="" />
          </AspectRatio>
        </CardOverflow>
        <CardContent>
          <Typography level="body-xs">{category}</Typography>
          <Link
            href=""
            color="neutral"
            textColor="text.primary"
            overlay
            endDecorator={<ArrowOutwardIcon />}
            sx={{ fontWeight: "md" }}
          >
            {truncateString(name, 25)}
          </Link>

          <Typography
            level="title-lg"
            sx={{ mt: 1, fontWeight: "xl" }}
            endDecorator={
              <Chip component="span" size="sm" variant="soft" color="success">
                Lowest price
              </Chip>
            }
          >
            AED {price}
          </Typography>
          {calledFrom === "Cart" && (
            <Box
              sx={{
                display: "flex",
                gap: 2,
                flexWrap: "wrap",
                alignItems: "center",
              }}
            >
              <Typography level="title-lg" sx={{ mt: 1, fontWeight: "xl" }}>
                Quantity: {quantity}
              </Typography>
              <IconButton
                variant="solid"
                color="success"
                onClick={() => handleAddToCart("increase")}
              >
                <AddCircleIcon />
              </IconButton>
              OR
              <IconButton
                variant="solid"
                color="warning"
                onClick={() => handleAddToCart("decrease")}
              >
                <RemoveCircleIcon />
              </IconButton>
            </Box>
          )}
        </CardContent>
        {calledFrom === "ProductList" && (
          <CardOverflow>
            <Button
              variant="solid"
              color="danger"
              size="lg"
              onClick={() => handleAddToCart("increase")}
            >
              Add to cart
            </Button>
          </CardOverflow>
        )}
      </Card>
    </motion.div>
  );
};

export default ProductCard;
