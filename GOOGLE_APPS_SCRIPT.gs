// このコードを、回答集計用のGoogleスプレッドシートの「拡張機能 > Apps Script」に貼り付ける。
const SHEET_NAME = '興味度回答';
const FORM_KEY = 'jizake-oneclick-v1';

function doPost(e) {
  try {
    const p = (e && e.parameter) || {};
    const allowed = ['ほとんど興味がなかった','少し興味があった','ある程度興味があった','とても興味があった'];
    if (p.form_key !== FORM_KEY || !allowed.includes(p.interest)) {
      return ContentService.createTextOutput('INVALID');
    }
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName(SHEET_NAME);
    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
      sheet.appendRow(['回答日時', '興味度', '回答場所']);
    }
    sheet.appendRow([new Date(), p.interest, 'トップページ']);
    return ContentService.createTextOutput('OK');
  } catch (err) {
    console.error(err);
    return ContentService.createTextOutput('ERROR');
  }
}
