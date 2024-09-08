
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import Product from "./component/Product.tsx";
import ProductList from "./component/ProductList.tsx";
import { productData } from './data/items.ts'
function App () {
    return (
        <Provider store={store}>
         <ProductList>
             {productData.map((item)=> (
                 <div key={item.id}>
                     <Product {...item} />
                 </div>
             ))}
         </ProductList>

        </Provider>

    )


}


export default App