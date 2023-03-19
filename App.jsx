import React, {lazy,Suspense} from 'react'
import { Route,Routes } from 'react-router-dom'
import AppLayout from './AppLayout'
import CheckOut from './pages/CheckOut'
import Error from './pages/Error'
import Home from './pages/Home'
import Product from './pages/Product/Product'
const AllProducts=lazy(()=> import('./pages/Products/Products'))
const AllSubs=lazy(()=>import('./pages/SubCategories'))
const App = () => {
 
  return (
    <Suspense fallback={<>Loading...</>}>
    <Routes>
      <Route path='/' element={<AppLayout/>}>
        <Route index element={<Home/>}/>
    
        <Route path='products/:id' element={<AllProducts/>}/>
   
   
        <Route path='subcategory/:ID' element={<AllSubs/>}/>
     
      
      
      
    <Route path='checkout' element={<CheckOut open={open}/>}/>
        <Route path='product/:id' element={<Product/>}/>
<Route path='*' element={<Error/>}/>
      </Route>
    </Routes>
    </Suspense>
  )
}

export default App