import Link from 'next/link';

const products = [
  { id: 1, name: 'Product A', price: 100 },
  { id: 2, name: 'Product B', price: 150 },
];

export default function Home() {
  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link href={`/products/${product.id}`}>
              {product.name} - ${product.price}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}