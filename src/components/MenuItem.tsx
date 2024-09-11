import { MenuItem as menuItemType } from "../types";

type MenuItemProp = {
    item: menuItemType;
};

export const MenuItem = ({ item }: MenuItemProp) => {
    const { name, price } = item;

    return (
        <button className="w-100 p-3 d-flex justify-content-between my-2 border-0 button-hover rounded-1">
            <p>{name}</p>
            <p className="fw-bold">${price}</p>
        </button>
    );
};
