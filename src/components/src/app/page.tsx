"use client";
import { BasketProvider } from "@/context/BasketContext";
import Header from "@/components/Header";
import Product from "@/components/Product";

const products = [
  { id: 1, title: "The Lean Startup", price: 29.99, category: "Books", image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=800&q=80" },
  { id: 2, title: "Kenwood Mixer", price: 99.99, category: "Appliances", image: "https://images.unsplash.com/photo-1594385208974-2e75f8d7bb48?auto=format&fit=crop&w=800&q=80" },
  { id: 3, title: "Samsung Smart TV", price: 599.99, category: "Electronics", image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=800&q=80" },
  { id: 4, title: "Apple Watch", price: 299.99, category: "Wearables", image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?auto=format&fit=crop&w=800&q=80" },
];

export default function Home() {
  return (
    <BasketProvider>
      <div className="bg-gray-100 min-h-screen">
        <Header />
        
        <main className="max-w-screen-2xl mx-auto">
          <div className="relative flex flex-col">
            <div className="absolute w-full h-32 bg-gradient-to-b from-gray-100 to-transparent -mt-14 z-20" />
            <img 
              src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=1600&q=80" 
              className="object-cover w-full h-[300px] md:h-[500px]" 
              alt="Banner"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 -mt-32 z-30 relative px-4">
            {products.map((product) => (
              <Product
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                category={product.category}
                image={product.image}
              />
            ))}
          </div>
        </main>
      </div>
    </BasketProvider>
  );
}
