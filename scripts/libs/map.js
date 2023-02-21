function initMap() {
  // 地図の初期化
  const map = new google.maps.Map(document.querySelector("#map"), {
    center: { lat: 35.11671219968189, lng: 138.8613065889482 }, //緯度経度
    zoom: 18,
  });

  // マーカーの追加
  const marker = new google.maps.Marker({
    position: { lat: 35.11671219968189, lng: 138.8613065889482 },
    map: map,
  });
}
onload = initMap;
