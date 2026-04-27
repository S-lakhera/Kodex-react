import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { addToCart } from "@/features/cartSlice";
import { useDispatch } from "react-redux"

export function CardImage({ product }) {

  let dispatch = useDispatch();

  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0">
      <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
      <img
        src={product.image}
        alt="Event cover"
        className="relative z-20 aspect-video w-full object-cover "
      />
      <CardHeader>
        <CardAction>
          <Badge variant="secondary">Featured</Badge>
        </CardAction>
        <CardTitle>{product.title}</CardTitle>
        <CardDescription>
          {product.price}
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button
          onClick={() => dispatch(addToCart({...product, quantity:1}))}
          className="w-full">Add to Cart</Button>
      </CardFooter>
    </Card>
  )
}
