import axios from "axios";

var catalog = [
  {
    _id: "51h234",
    price: 35.99,
    stock: 13,
    title: "Black Joggers",
    image: "blackpants.jpg",
    discount: 5,
    category: "Clothing",
  },
  {
    _id: "61j234",
    price: 35.99,
    stock: 21,
    title: "Burgundy Joggers",
    image: "burgundypants.jpg",
    discount: 10,
    category: "Clothing",
  },
  {
    _id: "71k234",
    price: 27.99,
    stock: 20,
    title: "Everyday Tee",
    image: "blacktop2.jpg",
    discount: 0,
    category: "Clothing",
  },
  {
    _id: "81l234",
    price: 27.99,
    stock: 20,
    title: "Everyday Crop Tee",
    image: "croptee.jpg",
    discount: 0,
    category: "Clothing",
  },
  {
    _id: "91a234",
    price: 27.99,
    stock: 20,
    title: "Everyday Longsleeve",
    image: "whitelngslv.jpg",
    discount: 0,
    category: "Clothing",
  },
  {
    _id: "11s234",
    price: 27.99,
    stock: 20,
    title: "Everyday Tank",
    image: "blacktank2.jpg",
    discount: 0,
    category: "Clothing",
  },
];

class DataService {
  async getCatalog() {
    //retrieve data from server
    let response = await axios.get("http://127.0.0.1:5000/api/catalog");
    return response.data;
  }

  async saveProduct(product) {
    let response = await axios.post("http://127.0.0.1:5000/api/pr");
    return response.data;
  }
  async getCoupons() {
    let response = await axios.get("http://127.0.0.1:5000/api/coupons");
    return response.data;
  }
  async saveCoupons(coupon) {
    let response = await axios.post("http://127.0.0.1:5000/api/coupons");
    return response.data;
  }
}

export default DataService;
