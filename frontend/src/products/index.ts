/* ===== Components ===== */
export { ProductCard } from './components/ProductCard';
export { ProductList } from './components/ProductList';

/* ===== Hooks ===== */
export { useProducts } from './hooks/useProducts';
export { useProduct } from './hooks/useProduct';
export { usePrefetchProduct } from './hooks/usePrefetchProduct';

/* ===== Interfaces & API ===== */
export { productsAPI } from './api/productsAPI';
export type { Product } from './interfaces/product';

/* ===== Layouts ===== */
export { StoreLayout } from './layout/StoreLayout';

/* ===== Pages ===== */
export { CompleteListPage } from './pages/CompleteListPage';
export { MensPage } from './pages/MensPage';
export { NewProduct } from './pages/NewProduct';
export { WomensPage } from './pages/WomensPage';
export { ProductById } from './pages/ProductById';

/* ===== Services ===== */
export * as productActions from './services/actions';
