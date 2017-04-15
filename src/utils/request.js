import fetch from 'dva/fetch';
// import CryptoJS from 'crypto-js';

// const key = 'niugu123niugu456niugu123';
// const iv = '12312300';

const requestListeners = [];

function listenersHandler(data) {
  requestListeners.forEach((listener) => {
    listener(data);
  });
}
// /**
//  * 加密
//  */
// function encode(msg) {
//   const msgHex = CryptoJS.enc.Utf8.parse(msg);
//   const keyHex = CryptoJS.enc.Utf8.parse(key);
//   const ivHex = CryptoJS.enc.Utf8.parse(iv);
//   const encrypted = CryptoJS.TripleDES.encrypt(msgHex, keyHex, {
//     mode: CryptoJS.mode.CBC,
//     padding: CryptoJS.pad.Pkcs7,
//     iv: ivHex,
//   });
//   const res = CryptoJS.enc.Hex.stringify(encrypted.ciphertext);
//   return res.toUpperCase();
// }
// /**
//  * 解密
//  */
// function decode(msg) {
//   const msgHex = CryptoJS.enc.Hex.parse(msg);
//   const keyHex = CryptoJS.enc.Utf8.parse(key);
//   const ivHex = CryptoJS.enc.Utf8.parse(iv);
//   const decrypted = CryptoJS.TripleDES.decrypt({
//     ciphertext: msgHex,
//   }, keyHex, {
//     mode: CryptoJS.mode.CBC,
//     padding: CryptoJS.pad.Pkcs7,
//     iv: ivHex,
//   });
//   return CryptoJS.enc.Utf8.stringify(decrypted);
// }
// window.Security = {
//   decode,
//   encode,
// };
/**
 * get获取
 */
export function get(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(response => resolve(response.json()))
      .catch(msg => reject(msg));
  });
}

/**
 * post数据
 */
export function post(url, data) {
  console.log('[request]:', {
    url,
    data
  });
  const param = JSON.stringify(data);
  const opts = {
    method: 'POST',
    mode: 'cors',
    // credentials: 'include',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: `param=${param}`
  };
  return new Promise((resolve) => {
    fetch(url, opts)
      .then((response) => {
        if (response.ok) {
          response.text()
            .then((res) => {
              console.log('[response]:', res);
              // let res = decode(text);
              if (typeof res === 'string') {
                resolve(JSON.parse(res));
              } else {
                resolve(res);
              }
              listenersHandler(res);
            });
        } else {
          resolve({
            error_no: -9999,
            error_info: '网络异常',
            response,
          });
        }
      })
      .catch(msg => resolve({
        error_no: -9999,
        error_info: '网络异常',
        msg,
      }));
  });
}

export function addResponseListener(listener) {
  if (typeof listener === 'function') {
    requestListeners.push(listener);
  }
}
