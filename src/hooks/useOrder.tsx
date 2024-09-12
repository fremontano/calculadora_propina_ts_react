import { useState } from "react";
import { MenuItem, OrderItem } from "../types";
import { menuItems } from "../data/db";

export const useOrder = () => {
    const [order, setOrder] = useState<OrderItem[]>([]);

    const addItem = (item: MenuItem) => {
        //existe item
        const itemExist = order.find((ordenItem) => ordenItem.id === item.id);

        //si existe, incrementar la cantidad
        if (itemExist) {
            const updateOrder = order.map((ordenItem) =>
                ordenItem.id === item.id
                    ? { ...itemExist, quantity: ordenItem.quantity + 1 }
                    : ordenItem
            );
            setOrder(updateOrder);
        } else {
            const newItem = { ...item, quantity: 1 };
            setOrder([...order, newItem]);
        }
    };

    const removeItem = (id: MenuItem["id"]) => {
        // encontrar por id, eliminar 
        setOrder(order.filter((ordemItem) => ordemItem.id !== id));
    };

    return {
        addItem,
        order,
        setOrder,
        removeItem,
    };
};
