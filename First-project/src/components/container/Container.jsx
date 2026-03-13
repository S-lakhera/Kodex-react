import Card from "../productCard/card";
import products from "../../data/products";

function Container() {
    return (<>
        <div className="container flex w-full flex-wrap justify-between py-8 px-10 gap-y-10 ">
            {products.map((item) => (
                    <Card key={item.id} data={item} />
                ))
            }
        </div>
    </>);
}

export default Container;