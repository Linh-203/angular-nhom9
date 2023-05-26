export interface InputCart {
   _id: string
   name: string
   price: number
   image: string
   quantity: number
   options: Record<'size' | 'ice' | 'sugar', string>
}
