export interface IProducts {
   _id: string
   productId?: string
   idcate: string
   name: string
   price: number
   desc: string
   image: string
   quantity?: number
   options?: {
      size: string
      ice: string
      sugar: string
   }
}

export interface IProductRes {
   docs: IProducts[]
}
