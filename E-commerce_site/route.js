export async function GET(request) {
    const products = [
      { id: 1, name: 'Product A', price: 100 },
      { id: 2, name: 'Product B', price: 150 },
    ];
    return new Response(JSON.stringify(products), { status: 200 });
  }
  