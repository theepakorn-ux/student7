function getData() {
  var sheetID   = "1SsCe9_vcYYu1USm1hKgDgH1WKyI_e0loDKQ_MeDXEUo"
  var dataRange = "sheet1!A2:H"
  var range     = Sheets.Spreadsheets.Values.get(sheetID,dataRange)
  var values    = range.values
  return values
}
