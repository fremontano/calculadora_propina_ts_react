
export const formatCurrency = (quantity: number) => {

    return new Intl.NumberFormat('en-CL', { style: 'currency', currency: 'CLP' }).format(quantity);

}
