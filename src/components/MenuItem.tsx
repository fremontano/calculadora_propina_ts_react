import { MenuItem, MenuItem as menuItemType } from "../types";

type MenuItemProp = {
    item: menuItemType;
    addItem: (item: MenuItem) => void
};

export const MenuItem = ({ item, addItem }: MenuItemProp) => {
    const { name, price } = item;

    return (
        <button
            className="w-100 p-3 d-flex justify-content-between my-2 border-0 button-hover rounded-1"
            onClick={() => addItem(item)}>
            <p>{name}</p>
            <p className="fw-bold">${price}</p>
        </button>
    );
};
