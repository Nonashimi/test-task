import { ProductItem } from "@/app/store/api/getProducts/type";
import Box from "../../ui/Box";
import { FC } from "react";
import Button from "../../ui/Button";
import { useTestStore } from "@/app/store";
import { Chevron } from "../../ui/Chevron";


type Props = {
  product: ProductItem,
};

export const Card:FC<Props> = ({product}) => {
  const {values, actions} = useTestStore();
  return(
    <Box>
      <img className="rounded-xl" src={product.image_url} alt="image of product" />
      <h2 className="text-center text-[20px] font-semibold py-3 h-[80px]">{product.title}</h2>
      <p className="text-gray-500 h-[60px]">
        {product.description}
      </p>
      <div className="flex gap-2 py-3">
        <strong>Цена:</strong> 
        <div className="">{product.price}</div>P
      </div>
      <div className="h-[50px] flex flex-col items-center">
          {
            values.backet.some(b => b.id === product.id)? 
            <Chevron id={product.id}/>:
            <Button onClick={() => actions.addToBacket({id: product.id, count: 1, total_price: product.price, title:product.title})}>Купить</Button>
          }
      </div>
    </Box>
  );
}