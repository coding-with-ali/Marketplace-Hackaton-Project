import dynamic from 'next/dynamic';
import Herosection from './Pages/HomePage/herosection';
import Shopex from './Pages/HomePage/shopex';
import Banner from './Pages/HomePage/banner';
import Discount from './Pages/HomePage/discount';
import Topcategory from './Pages/HomePage/topcategory';
import Brand from './Pages/HomePage/brand';

// 🟢 Lazy Loading for Faster Performance
const Featured = dynamic(() => import('./Pages/HomePage/featured'), { ssr: true });
const Latest = dynamic(() => import('./Pages/HomePage/latest'), { ssr: true });
const Trending = dynamic(() => import('./Pages/HomePage/trending'), { ssr: true });

export default function HomePage() {
  return (
    <div>
      <Herosection />
      <Featured />  {/* ✅ Lazy Loading */}
      <Latest />    {/* ✅ Lazy Loading */}
      <Shopex />
      <Banner />
      <Trending />  {/* ✅ Lazy Loading */}
      <Discount />
      <Topcategory />
      <Brand />
    </div>
  );
}
