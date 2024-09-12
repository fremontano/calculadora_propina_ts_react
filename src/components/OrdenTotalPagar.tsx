import { useMemo } from "react"
import { OrderItem } from "../types"
import { formatCurrency } from "../helpers"

type OrderTotalPagarProps = {
    order: OrderItem[]
}


export const OrdenTotalPagar = ({ order }: OrderTotalPagarProps) => {


    const subTotalAmount = useMemo(() => order.reduce((total, item) => total + item.quantity * item.price, 0), [order]);

    // function calculateSubTotal(order: OrderItem[]): number {
    //     return order.reduce((total, item) => {
    //         return total + item.quantity * item.price;
    //     }, 0);
    // }
    // const subTotalAmount = calculateSubTotal(order);



    return (
        <div
            className="py-5 fw-bold"
        >
            <h3 className="text-uppercase fs-5 fw-bold" >Total y Propina</h3>

            <p className="fw-bold">subtotal a pagar{''}{formatCurrency(subTotalAmount)}</p>

            <p className="fw-bold mt-2">Propina{''} $0 </p>

            <p className="fw-bold mt-4">Total a pagar{''} $0 </p>

        </div>
    )
}
