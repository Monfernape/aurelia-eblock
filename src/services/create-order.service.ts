export class OrderService {

    setOrder(data){
        let getStoredData = JSON.parse(localStorage.getItem('order'));
        localStorage.setItem('order', JSON.stringify(data));
    }
}