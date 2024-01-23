import "./style.css";
import { Product } from "../../utils/products";

interface Props {
  products: Product[];
}

export default function ProductTable({ products }: Props) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {products.length === 0 ? (
          <tr>
            <td colSpan={3}>
              <h2 className="empty">No items match the selected filters...</h2>
            </td>
          </tr>
        ) : (
          products.map((prod, index) => (
            <tr key={index}>
              <td>{prod.name}</td>
              <td>{prod.quantity}</td>
              <td>{prod.price}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}
