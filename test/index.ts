const excelDocument = new ActiveXObject<Websoft.Office.Excel.Document>("Websoft.Office.Excel.Document");
excelDocument.Open(UrlToFilePath("Asdasd"));
const worksheet = excelDocument.GetWorksheet(0);
worksheet.Cells.GetCell("as").Value;
