function TopProduct() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        class="row row-cols-1 row-cols-lg-4 row-cols-xl-4 row-cols-xxl-5 g-3"
      >
        <div class="col">
          <div class="card border shadow-none mb-0">
            <div class="card-body text-center">
              <img
                src="/images/products/01.png"
                class="img-fluid mb-3"
                alt=""
              />
              <h6 class="product-title">Men White Polo T-shirt</h6>
              <p class="product-price fs-5 mb-1">
                <span>$250.99</span>
              </p>
              <div class="rating mb-0">
                <i class="bi bi-star-fill text-warning"></i>
                <i class="bi bi-star-fill text-warning"></i>
                <i class="bi bi-star-fill text-warning"></i>
                <i class="bi bi-star-fill text-warning"></i>
                <i class="bi bi-star-fill text-warning"></i>
              </div>
              <small>74 Reviews</small>
              <div class="actions d-flex align-items-center justify-content-center gap-2 mt-3">
                <a href="javascript:;" class="btn btn-sm btn-outline-primary">
                  <i class="bi bi-pencil-fill"></i> Buy
                </a>
                <a href="javascript:;" class="btn btn-sm btn-outline-success">
                  <i class="bi bi-trash-fill"></i> Review
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card border shadow-none mb-0">
            <div class="card-body text-center">
              <img
                src="/images/products/02.png"
                class="img-fluid mb-3"
                alt=""
              />
              <h6 class="product-title">Men White Polo T-shirt</h6>
              <p class="product-price fs-5 mb-1">
                <span>$250.99</span>
              </p>
              <div class="rating mb-0">
                <i class="bi bi-star-fill text-warning"></i>
                <i class="bi bi-star-fill text-warning"></i>
                <i class="bi bi-star-fill text-warning"></i>
                <i class="bi bi-star-fill text-warning"></i>
                <i class="bi bi-star-fill text-warning"></i>
              </div>
              <small>65 Reviews</small>
              <div class="actions d-flex align-items-center justify-content-center gap-2 mt-3">
                <a href="javascript:;" class="btn btn-sm btn-outline-primary">
                  <i class="bi bi-pencil-fill"></i> Buy
                </a>
                <a href="javascript:;" class="btn btn-sm btn-outline-success">
                  <i class="bi bi-trash-fill"></i> Review
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card border shadow-none mb-0">
            <div class="card-body text-center">
              <img
                src="/images/products/03.png"
                class="img-fluid mb-3"
                alt=""
              />
              <h6 class="product-title">Men White Polo T-shirt</h6>
              <p class="product-price fs-5 mb-1">
                <span>$250.99</span>
              </p>
              <div class="rating mb-0">
                <i class="bi bi-star-fill text-warning"></i>
                <i class="bi bi-star-fill text-warning"></i>
                <i class="bi bi-star-fill text-warning"></i>
                <i class="bi bi-star-fill text-secondary"></i>
                <i class="bi bi-star-fill text-secondary"></i>
              </div>
              <small>96 Reviews</small>
              <div class="actions d-flex align-items-center justify-content-center gap-2 mt-3">
                <a href="javascript:;" class="btn btn-sm btn-outline-primary">
                  <i class="bi bi-pencil-fill"></i> Buy
                </a>
                <a href="javascript:;" class="btn btn-sm btn-outline-success">
                  <i class="bi bi-trash-fill"></i> Review
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card border shadow-none mb-0">
            <div class="card-body text-center">
              <img
                src="/images/products/04.png"
                class="img-fluid mb-3"
                alt=""
              />
              <h6 class="product-title">Men White Polo T-shirt</h6>
              <p class="product-price fs-5 mb-1">
                <span>$250.99</span>
              </p>
              <div class="rating mb-0">
                <i class="bi bi-star-fill text-warning"></i>
                <i class="bi bi-star-fill text-warning"></i>
                <i class="bi bi-star-fill text-warning"></i>
                <i class="bi bi-star-fill text-warning"></i>
                <i class="bi bi-star-fill text-secondary"></i>
              </div>
              <small>65 Reviews</small>
              <div class="actions d-flex align-items-center justify-content-center gap-2 mt-3">
                <a href="javascript:;" class="btn btn-sm btn-outline-primary">
                  <i class="bi bi-pencil-fill"></i> Buy
                </a>
                <a href="javascript:;" class="btn btn-sm btn-outline-success">
                  <i class="bi bi-trash-fill"></i> Review
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopProduct;
