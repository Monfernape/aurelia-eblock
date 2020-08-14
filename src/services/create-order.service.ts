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

  getDataById(id, currentUser) {
    console.log("id: ", typeof id);
    return new Promise((resolve, reject) => {
      let getStoredData = JSON.parse(localStorage.getItem(`order${currentUser}`));
      console.log("getStoredData: ", getStoredData);
      let result;
      getStoredData.filter(innerData => result = innerData.find(element => id === element.id));
      resolve(result);
    });
  }
}
