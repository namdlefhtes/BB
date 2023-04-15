# BB

## Google Sheets API

This uses Google Sheets as a database. In order to do so, you will need to:

1. Ensure the format of each sheet matches existing spreadsheets (achieve this by copying sheet from master)

2. Permission must be set to anyone with link can view for each sheet, or granted to a service account can be assigned the view permission.

3. Get the Sheet ID:

The sheetId can be found in the following part of the path of the URL of your spreadsheet. You will need this in order to pass it into a variable when embedding on the page.

`const sheetId = YOUR_SHEET_ID_HERE`

docs.google.com/spreadsheets/d/{**spreadsheetId**}/edit#gid=0

4. Set up Google Cloud and enable Sheets API for the account where the spreadsheets are saved.

## CDN 

[jsdelivr](https://www.jsdelivr.com/) is being leveraged in order to embed the scripts into the page. 

CSS:

https://cdn.jsdelivr.net/gh/sethakirafeldman/BB/src/style.css

JS:

https://cdn.jsdelivr.net/gh/sethakirafeldman/BB/src/script.js


# BB

## Sheets API

This uses Google Sheets as a database. In order to do so, you will need to:

1. Ensure the format of each sheet matches existing spreadsheets (achieve this by copying sheet from template)

2. Permission must be set to anyone with link can view for each sheet, or a svc account can be assigned view permission to the particular sheet.

3. Get the Sheet ID:

`https://docs.google.com/spreadsheets/d/SPREADSHEETID/edit#gid=0`

4. Set up Google Cloud and enable Sheets API for the account where the spreadsheets are saved. Only read access is required. For Production, ensure this is restricted to the specific URL.

## CDN

CSS:

https://cdn.jsdelivr.net/gh/sethakirafeldman/BB/src/style.css

JS:

https://cdn.jsdelivr.net/gh/sethakirafeldman/BB/src/script.js

Purging jsdelivr cache:

https://www.jsdelivr.com/tools/purge
