function memo(){
  const submit = document.getElementById("submit");
  submit.addEventListener("click", (e) => {
    const formData = new FormData(document.getElementById("form"));
    //フォームで入力した値を取得
    const XHR = new XMLHttpRequest();
    XHR.open("POST", "/posts", true);
    //HTTPメソッド、パス、非同期通信の有効設定
    XHR.responseType = "json";
    //レスポンス形式をjsonに設定
    XHR.send(formData);
    XHR.onload = () => {
      const item = XHR.response.post;
      const list = document.getElementById("list");
      const formText = document.getElementById("content");
      const HTML = `
        <div class="post" data-id=${item.id}>
          <div class="post-date">
            投稿日時：${item.created_at}
          </div>
          <div class="post-content">
          ${item.content}
          </div>
        </div>`;
      list.insertAdjacentHTML("afterend", HTML);

      formText.value = "";

      if (XHR.status != 200) {
        alert(`Error ${XHR.status}: ${XHR.statusText}`);
      } else {
        return null;
      }
    };
    XHR.onerror = function () {
      alert("Request failed");
    };

    e.preventDefault();
  })
}
window.addEventListener('load',memo);