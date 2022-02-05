# Dcard 面試作業說明 - Annabelle Tai


###  `如何啟動`

使用 npm 指令 `npm start` 之後，在瀏覽器開啟 [http://localhost:3000](http://localhost:3000) 。



### `作業架構設計`

完成作業的順序為： 放假資料刻 UI -> 解決 API CORS -> 判斷滑到底部就撈資料

**- 假資料刻 UI**
> 因為當初判斷要解決 API CORS 的問題可能要花一些時間，所以先用假資料把 UI 設計好，並設計好 props 的接口。

**- 解決 API CORS**
> 上網尋找方法大部分的建議是由後端設定開通，但因為這次只能透過 Client side 這邊解決，所以找到 [Stack Overflow](https://stackoverflow.com/questions/46337471/how-to-allow-cors-in-react-js) 的解決辦法，在 package.json 內加上 Dcard proxy 即可，但只能在開發環境上使用。

**- 判斷滑到底部就撈資料**
> 初步的想法是，只要滑到最底部，就重新要 30 筆資料。所以在 window 綁上 scroll 的事件，偵測使用者是否將視窗滑到底部。一旦使用者滑到底部，就用上次拿的資料的最後一筆 ID 來要接下來的 30 筆。
