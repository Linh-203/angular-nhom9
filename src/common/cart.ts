import { IProducts } from './products'

export interface InputCart {
   productId: string
   name: string
   price: number
   image: string
   quantity: number
   options: Record<'size' | 'ice' | 'sugar', string>
}
export interface Icart {
   message: string
   data: {
      products: IProducts[]
      totalAmount: number
      userId: string
   }
}

export interface InputOptions {
   quantity: number
   options: Record<'size' | 'ice' | 'sugar', string>
}
