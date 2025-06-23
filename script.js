document.addEventListener("DOMContentLoaded", function () {
  /**
   * 新しいシンプルなスライダーをセットアップする関数
   * @param {string} sliderId - スライダーのコンテナ要素のID
   * @param {Array<string>} imagePaths - 表示したい画像のパスの配列
   */
  function setupSimpleSlider(sliderId, imagePaths) {
    const sliderElement = document.getElementById(sliderId);
    if (!sliderElement || imagePaths.length === 0) {
      return;
    }

    const imageElement = sliderElement.querySelector(".slide-image");
    const prevBtn = sliderElement.querySelector(".prev-arrow");
    const nextBtn = sliderElement.querySelector(".next-arrow");

    if (!imageElement || !prevBtn || !nextBtn) {
      return;
    }

    let currentIndex = 0;

    // 画像を更新する関数
    function updateImage() {
      imageElement.src = imagePaths[currentIndex];
    }

    // 「次へ」ボタン
    nextBtn.addEventListener("click", () => {
      currentIndex++;
      if (currentIndex >= imagePaths.length) {
        currentIndex = 0; // 最後まで行ったら最初に戻る
      }
      updateImage();
    });

    // 「前へ」ボタン
    prevBtn.addEventListener("click", () => {
      currentIndex--;
      if (currentIndex < 0) {
        currentIndex = imagePaths.length - 1; // 最初から戻ったら最後へ
      }
      updateImage();
    });
  }

  // --- 各スライダーの画像リストを定義 ---
  const logoImages = [
    "image/Logo/MyBeauty.jpeg",
    "image/Logo/PALETTE.jpeg",
    "image/Logo/mellow.jpeg",
  ];

  const flyerImages = [
    "image/Flyer/REVISEFIT.jpeg",
    "image/Flyer/メナードフェイシャルサロン.jpeg",
    "image/Flyer/ミートストックチラシ.jpeg,",
  ];

  const homepageImages = ["image/CHERRY BLOSSOM.png", "image/portfolio.png"];

  // --- 各スライダーをセットアップ ---
  setupSimpleSlider("logo-slider", logoImages);
  setupSimpleSlider("flyer-slider", flyerImages);
  setupSimpleSlider("homepage-slider", homepageImages);
});
