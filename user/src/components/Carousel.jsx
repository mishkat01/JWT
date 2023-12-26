function Carousal() {
  return (
    <>
      <div
        id="carouselExampleDark"
        class="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            class=""
          ></li>
          <li
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            class="active"
            aria-current="true"
          ></li>
          <li
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            class=""
          ></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item" data-bs-interval="10000">
            <img src="/images/gallery/05.png" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>All kid of Product availabe here</h5>
              <p>All in One pLace</p>
            </div>
          </div>
          <div class="carousel-item active" data-bs-interval="2000">
            <img src="/images/gallery/03.png" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>All kid of Product availabe here</h5>
              <p>All in One pLace</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="/images/gallery/23.png" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>All kid of Product availabe here</h5>
              <p>All in One pLace</p>
            </div>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleDark"
          role="button"
          data-bs-slide="prev"
        >
          {" "}
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleDark"
          role="button"
          data-bs-slide="next"
        >
          {" "}
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </a>
      </div>
    </>
  );
}

export default Carousal;
