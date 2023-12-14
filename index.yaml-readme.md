# PortQD `index.yaml` File Format and Usage Guide

This README provides a detailed guide on the structure and usage of the `index.yaml` file within the Portable Quiz Description (PortQD) container. The `index.yaml` file, governed by a specific JSON schema, serves as the primary descriptor for quizzes and their associated metadata in the PortQD format.

## File Location

- The `index.yaml` file must be located at the root of the PortQD container, which is typically a ZIP file.

## File Specification

Based on the updated JSON schema, the `index.yaml` file includes the following sections:

### PortQD Index

- `PortQD_Index`: Contains details about the PortQD index file format and version.
  - `SpecificationVersion`: Specifies the version of the PortQD index file specification.
  - `Format`: Describes the file format, typically "Portable Quiz Description Index File".

### Section Owner

- `Owner`: Lists the owners or main contacts for the quiz, allowing for multiple entries.
  - `ID`: Unique identifier for the owner (UUID version 4).
  - `Name`: Full name of the owner, limited to 100 characters.
  - `ContactEmail`: Contact email address, limited to 100 characters.
  - `TelegramID`: Telegram ID for contact, limited to 50 characters.
  - `WebPage`: Webpage URL associated with the owner, limited to 200 characters.
  - `FacebookPage`: Facebook page URL, limited to 200 characters.
  - `RatingChgkInfoID`: Required ID from rating.chgk.info, limited to 50 characters.
  - `ExtraInfo`: Additional information about the owner, multiline, limited to 1024 characters.

### Section About

- `About`: Provides comprehensive information about the quiz.
  - `Title`: Title of the quiz, required, limited to 80 characters.
  - `ShortDescription`: A brief description of the quiz, required, limited to 256 characters.
  - `LongDescription`: A detailed description, optional, limited to 2000 characters.
  - `ExtraInfo`: Additional information, optional, limited to 1024 characters.
  - `NumberOfTours`: Total number of tours, required, integer between 1 and 99.
  - `TotalNumberOfQuestions`: Total number of questions, required, integer between 1 and 9999.
  - `LastUpdated`: Date of the last update, required, in YYYY-MM-DD format.
  - `Frontpic`: Front picture filename, optional, limited to 100 characters.
  - `EstimatedComplexity`: Estimated difficulty level, integer between 1 and 10.
  - `Copyright`: Copyright holder's name, required, limited to 200 characters.
  - `Year`: Year of copyright, required.
  - `License`: License under which the quiz is distributed, typically "CC BY-SA 4.0" by default.

### Section Authors

- `Authors`: Lists the authors and their roles in creating the quiz.
  - `Name`: Name of the author, limited to 100 characters.
  - `RatingChgkInfoID`: ID from rating.chgk.info, optional, limited to 50 characters.
  - `Role`: Role of the author, required, limited to 100 characters.

### Section Content

- `Content`: Details the content of the quiz, including its tours.
  - `Tours`: A list of tours within the quiz.
    - `ID`: Unique identifier for each tour (UUID version 4).
    - `NumberOfQuestions`: Number of questions in each tour, required, integer between 1 and 99.
    - `TourEditor`: Information about the tour editor.
      - `Name`: Name of the tour editor, limited to 100 characters.
      - `RatingChgkInfoID`: ID from rating.chgk.info, optional, limited to 50 characters.
      - `ExtraInfo`: Additional information about the editor, optional, limited to 1024 characters.
    - `TourTesters`: A list of people who tested the tour, optional.
      - `Name`: Name of the tester, limited to 100 characters.
      - `RatingChgkInfoID`: ID from rating.chgk.info, optional, limited to 50 characters.
      - `ExtraInfo`: Additional information about the tester, optional, limited to 1024 characters.

## Usage

- Ensure all required fields are accurately filled according to the schema specifications.
- Adhere to the specified maximum character limits for each field.
- Place the `index.yaml` file at the root of the PortQD container ZIP file.
- Validate the `index.yaml` file against the JSON schema to ensure correct syntax and adherence to the specified structure.

---

PortQD Version: 1.0
