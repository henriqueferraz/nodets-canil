type menuOptions = '' | 'all' | 'cao' | 'gato' | 'peixe';

export const createMenu = (activeMenu: menuOptions) => {
    let returnObject = {
        all: false,
        cao: false,
        gato: false,
        peixe: false
    }

    if (activeMenu !== '') {
        returnObject[activeMenu] = true;
    };

    return returnObject;
};