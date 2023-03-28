# BB

## Sheets API

This uses Google Sheets as a database. In order to do so, you will need to:

1. Ensure the format of each sheet matches existing spreadsheets (achieve this by copying sheet from master)

2. Permission must be set to anyone with link can view for each sheet, or a svc account can be assigned view permission.

3. Get the Sheet ID:

`https://docs.google.com/spreadsheets/d/spreadsheetId/edit#gid=0`

4. Set up Google Cloud and enable Sheets API for the account where the spreadsheets are saved.