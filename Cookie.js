// 設定 cookie
function setCookie(name, value, days) {
    const encodedValue = encodeURIComponent(value);
    let expires = "";
    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + encodedValue + expires + "; path=/";
  }
  
  // 讀取 cookie
  function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) {
        return decodeURIComponent(c.substring(nameEQ.length, c.length));
      }
    }
    return null;
  }
  
  // 使用範例
  /*
  setCookie("example", "含有特殊字符的值，例如中文或空格", 7);
  console.log(getCookie("example"));
  */