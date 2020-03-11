export class OrderService {

  setOrder(data) {
    let getStoredData = null;
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    getStoredData = JSON.parse(localStorage.getItem(`order${currentUser}`));
    let storeData = getStoredData ? [data, ...getStoredData] : [data];
    localStorage.setItem(`order${currentUser}`, JSON.stringify(storeData));
  }

  getAllData(currentUser) {
    return new Promise((resolve, reject) => {
      let getStoredData = JSON.parse(localStorage.getItem(`order${currentUser}`));
      resolve(getStoredData);
    });
  }

  getDataById(currentUser) {
    return new Promise((resolve, reject) => {
      let getStoredData = JSON.parse(localStorage.getItem(`order${currentUser}`));
      resolve(getStoredData);
    });
  }
}
