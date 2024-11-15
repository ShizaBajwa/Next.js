import { useParams } from 'next/navigation';

export default function ProductDetail() {
  const { id } = useParams();

  return (
    <div>
      <h1>Product Details</h1>
      <p>Product ID: {id}</p>
      {}
    </div>
  );
}




