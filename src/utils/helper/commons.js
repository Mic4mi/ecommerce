export const commons = {
    getDataFromDataBase: (data, fnCb, id) => new Promise((resolve, reject) => {
        setTimeout(() => {
            let currentData;
            data ? currentData = data : currentData = fnCb(id);
            resolve(currentData);
        }, 2000);
    })
}