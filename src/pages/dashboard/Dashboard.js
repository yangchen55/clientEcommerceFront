import React from 'react'
import ProductCard from '../Product/ProductCard'
import { AdminLayout } from '../layout/AdminLayout'

import Slideshow from './Slideshow'



const Dashboard = () => {
    return <AdminLayout slideshow={<Slideshow />} productCard={<ProductCard />} />



}

export default Dashboard