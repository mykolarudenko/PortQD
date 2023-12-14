# PortQD `index.yaml` File Format and Usage Guide

This README outlines the structure and usage of the `index.yaml` file within the Portable Quiz Description (PortQD) container. The `index.yaml` file serves as the primary descriptor for quizzes and their associated metadata in the PortQD format.

## File Location

- The `index.yaml` file must be located at the root of the PortQD container (a ZIP file).

## File Specification

### PortQD Index

- `PortQD_Index`: Contains details about the format and version of the PortQD index file.
  - `SpecificationVersion`: The version of the PortQD index file specification (e.g., "1.0").
  - `Format`: Description of the file format (e.g., "Portable Quiz Description Index File").

### Section Owner

- `Owner`: A list of owners or main contacts for the quiz. Multiple entries are allowed.
  - `ID`: A unique identifier for the owner (UUID version 4).
  - `Name`: Full name of the owner (max 100 characters).
  - `ContactEmail`: Contact email address (max 100 characters).
  - `TelegramID`: Telegram ID for contact (max 50 characters).
  - `WebPage`: Webpage URL associated with the owner (max 200 characters).
  - `FacebookPage`: Facebook page URL (max 200 characters).
  - `RatingChgkInfoID`: Required ID from rating.chgk.info (max 50 characters).
  - `ExtraInfo`: Additional information about the owner (multiline, max 1024 characters).

### Section About

- `About`: Provides detailed information about the quiz.
  - `Title`: Title of the quiz (required, max 80 characters).
  - `ShortDescription`: Brief description of the quiz (required, max 256 characters).
  - `LongDescription`: Detailed description (optional, max 2000 characters).
  - `ExtraInfo`: Additional information about the quiz (optional, max 1024 characters).
  - `NumberOfTours`: Total number of tours (required, integer 1-99).
  - `TotalNumberOfQuestions`: Total number of questions (required, integer 1-9999).
  - `LastUpdated`: Date of the last update (required, format YYYY-MM-DD).
  - `Frontpic`: Front picture filename (optional, 'frontpic.jpg' or '', max 100 characters).
  - `EstimatedComplexity`: Difficulty level (integer 1-10).
  - `Copyright`: Copyright holder's name (required, max 200 characters).
  - `Year`: Year of copyright (required, format YYYY).
  - `License`: License under which the quiz is distributed (default "CC BY-SA 4.0").

### Section Authors

- `Authors`: Lists the authors and their roles in quiz creation.
  - `Name`: Name of the author (max 100 characters).
  - `RatingChgkInfoID`: ID from rating.chgk.info (optional, max 50 characters).
  - `Role`: Role of the author (required, max 100 characters).

### Section Content

- `Content`: Details the content of the quiz, including tours.
  - `Tours`: A list of tours within the quiz.
    - `ID`: Unique identifier for the tour (UUID version 4).
    - `NumberOfQuestions`: Number of questions in the tour (required, integer 1-99).
    - `TourEditor`: Details about the tour editor.
      - `Name`: Name of the tour editor (max 100 characters).
      - `RatingChgkInfoID`: ID from rating.chgk.info (optional, max 50 characters).
      - `ExtraInfo`: Additional information about the editor (optional, max 1024 characters).
    - `TourTesters`: List of people who tested the tour (optional).
      - `Name`: Name of the tester (max 100 characters).
      - `RatingChgkInfoID`: ID from rating.chgk.info (optional, max 50 characters).
      - `ExtraInfo`: Additional information about the tester (optional, max 1024 characters).

## Usage

- Ensure all required fields are filled according to the specifications.
- Use the specified maximum character limits for each field.
- Place the `index.yaml` file at the root of the PortQD container ZIP file.
- Validate the `index.yaml` file for correct YAML syntax and adherence to the specified structure.

For any additional questions or support regarding the PortQD `index.yaml` format, please contact [Support Contact Information].

---

PortQD Version: 1.0
