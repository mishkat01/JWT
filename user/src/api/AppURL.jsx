class AppURL {
  static BaseURL = "http://127.0.0.1:8000/api";
  static Login = this.BaseURL + "/Login";
  static AllProduct = this.BaseURL + "/allProduct";
  static AllActiveProduct = this.BaseURL + "/allActiveProduct";

  static AddToCart = this.BaseURL + "/addToCart";
  static ProductListByRemark(Remark) {
    return this.BaseURL + "/productList/" + Remark;
  }
  static ProductDetails(code) {
    return this.BaseURL + "/productdetails/" + code;
  }

  static CartCount(product_code) {
    return this.BaseURL + "/cartcount/" + product_code;
  }
}
export default AppURL;
