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
import { addToCart, isItemInCart, updateQuantity } from "@/features/cartSlice";
import { Minus, Plus } from "lucide-react";
import { useDispatch, useSelector } from "react-redux"

export function ProductCard({ product }) {

  let dispatch = useDispatch();
  const itemInCart = useSelector((state) => {
    return state.cart.cartItem.find((item) => item.id === product.id)
  })



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
          ${product.price}
        </CardDescription>
      </CardHeader>
      <CardFooter>

        {
          itemInCart ?
            <div div className="flex w-full justify-center items-center gap-3 bg-gray-50 rounded-xl px-3 py-1 text-lg border border-black">
              <button
                onClick={() => dispatch(updateQuantity({ id: product.id, amount: -1 }))}
                className="p-1 hover:text-blue-600 transition-colors cursor-pointer"
                disabled={product.quantity <= 1}
              >
                <Minus size={16} />
              </button>

              <span className="font-medium min-w-5 text-center">{itemInCart.quantity}</span>

              <button
                onClick={() => dispatch(updateQuantity({ id: product.id, amount: 1 }))}
                className="p-1 hover:text-blue-600 transition-colors cursor-pointer"
              >
                <Plus size={16} />
              </button>
            </div>
            :
            <Button
              onClick={() => dispatch(addToCart({ ...product, quantity: 1 }))}
              className="w-full cursor-pointer">Add to Cart</Button>
        }
      </CardFooter>
    </Card >
  )
}
