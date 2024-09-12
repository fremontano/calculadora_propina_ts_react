import { formatCurrency } from "../helpers";
import { MenuItem, OrderItem } from "../types";
import { MenuItem } from "./MenuItem";

// Corregir la estructura de las props
interface OrderContestProps {
    order: OrderItem[];
    removeItem: (item: MenuItem["id"]) => void; // no retorna nada
}

export const OrderContest = ({ order, removeItem }: OrderContestProps) => {
    return (
        <>
            <div>
                <h2 className="fw-bold fs-4">Orden</h2>
                <div className="py-5"></div>
                <div>
                    {order.length === 0 ? (
                        <p>no hay ordenes</p>
                    ) : (
                        order.map((item) => (
                            <div
                                key={item.id}
                                className="d-flex align-items-center justify-content-between p-2 border-top"
                            >
                                <div className="col-6 text-start">
                                    <p className="fs-6">
                                        {item.name} - {formatCurrency(item.price)}
                                    </p>
                                </div>
                                <div className="col-4 text-start">
                                    <p className="fw-bold">
                                        Cantidad: {item.quantity} -
                                        {formatCurrency(item.price * item.quantity)}
                                    </p>
                                </div>

                                <div className="col-3 text-end">
                                    <button
                                        className="btn btn-danger btn-sm me-5"
                                        onClick={() => removeItem(item.id)}
                                    >
                                        Eliminar
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </>
    );
};
