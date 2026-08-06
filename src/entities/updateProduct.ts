export default interface updateProduct{
    quantity: number
}

export interface UpdateProductVariables {
  id: number;
  qn: updateProduct;
}