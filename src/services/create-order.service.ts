export class OrderService {

    setOrder(data){
        let getStoredData = JSON.parse(localStorage.getItem('order'));
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        localStorage.setItem(`order${currentUser}`, JSON.stringify(data));
    }
}
