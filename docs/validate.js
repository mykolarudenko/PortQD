function validateIndex(yamlText) {

  // URL of the schema.json file
const schemaUrl = '../schema.json';

  // Fetch the schema and store it in a variable
  fetch(schemaUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(schema => {
      // Use the schema here
      console.log(schema);
    })
    .catch(error => {
      console.error('There has been a problem with your fetch operation:', error);
    });

  // const schema = {
  //   type: 'object',
  //   properties: {
  //     PortQD_Index: {
  //       type: 'object',
  //       properties: {
  //         SpecificationVersion: { type: 'string' },
  //         Format: { type: 'string' },
  //       },
  //       required: ['SpecificationVersion', 'Format'],
  //     },
  //     Owner: {
  //       type: 'array',
  //       items: {
  //         type: 'object',
  //         properties: {
  //           ID: { type: 'string', format: 'uuid' },
  //           Name: { type: 'string', maxLength: 100 },
  //           ContactEmail: { type: 'string', maxLength: 100 },
  //           TelegramID: { type: 'string', maxLength: 50 },
  //           WebPage: { type: 'string', maxLength: 200, format: 'url' },
  //           FacebookPage: { type: 'string', maxLength: 200, format: 'url' },
  //           RatingChgkInfoID: { type: 'string', maxLength: 50 },
  //           ExtraInfo: { type: 'string', maxLength: 1024 },
  //         },
  //         required: ['ID', 'Name', 'ContactEmail', 'RatingChgkInfoID'],
  //       },
  //     },
  //     About: {
  //       type: 'object',
  //       properties: {
  //         Title: { type: 'string', maxLength: 80 },
  //         ShortDescription: { type: 'string', maxLength: 256 },
  //         LongDescription: { type: 'string', maxLength: 2000 },
  //         ExtraInfo: { type: 'string', maxLength: 1024 },
  //         NumberOfTours: { type: 'integer', minimum: 1, maximum: 99 },
  //         TotalNumberOfQuestions: { type: 'integer', minimum: 1, maximum: 9999 },
  //         LastUpdated: { type: 'string', format: 'date' },
  //         Frontpic: { type: 'string', maxLength: 100 },
  //         EstimatedComplexity: { type: 'integer', minimum: 1, maximum: 10 },
  //         Copyright: { type: 'string', maxLength: 200 },
  //         Year: { type: 'integer' },
  //         License: { type: 'string' },
  //       },
  //       required: ['Title', 'ShortDescription', 'NumberOfTours', 'TotalNumberOfQuestions', 'LastUpdated', 'Copyright', 'Year', 'License'],
  //     },
  //     Authors: {
  //       type: 'array',
  //       items: {
  //         type: 'object',
  //         properties: {
  //           Name: { type: 'string', maxLength: 100 },
  //           RatingChgkInfoID: { type: 'string', maxLength: 50 },
  //           Role: { type: 'string', maxLength: 100 },
  //         },
  //         required: ['Name', 'Role'],
  //       },
  //     },
  //     Content: {
  //       type: 'object',
  //       properties: {
  //         Tours: {
  //           type: 'array',
  //           items: {
  //             type: 'object',
  //             properties: {
  //               ID: { type: 'string', format: 'uuid' },
  //               NumberOfQuestions: { type: 'integer', minimum: 1, maximum: 99 },
  //               TourEditor: {
  //                 type: 'object',
  //                 properties: {
  //                   Name: { type: 'string', maxLength: 100 },
  //                   RatingChgkInfoID: { type: 'string', maxLength: 50 },
  //                   ExtraInfo: { type: 'string', maxLength: 1024 },
  //                 },
  //                 required: ['Name'],
  //               },
  //               TourTesters: {
  //                 type: 'array',
  //                 items: {
  //                   type: 'object',
  //                   properties: {
  //                     Name: { type: 'string', maxLength: 100 },
  //                     RatingChgkInfoID: { type: 'string', maxLength: 50 },
  //                     ExtraInfo: { type: 'string', maxLength: 1024 },
  //                   },
  //                   required: ['Name'],
  //                 },
  //               },
  //             },
  //             required: ['ID', 'NumberOfQuestions', 'TourEditor'],
  //           },
  //         },
  //       },
  //       required: ['Tours'],
  //     },
  //   },
  //   required: ['PortQD_Index', 'Owner', 'About', 'Authors', 'Content'],
  // };


  // Create a new Ajv instance
  //const ajv = new Ajv();
  var ajv = new Ajv();
  //addFormats(ajv)

  // Compile the schema
  const validate = ajv.compile(schema);

  // Parse the YAML file
  const data = jsyaml.load(yamlText);

  // Validate the data against the schema
  const valid = validate(data);

  if (!valid) {
    console.log('YAML file has errors:');
    console.log(validate.errors);
    return(validate.errors);
  } else {
    console.log('YAML file is valid');
    return('Success! Your PortQD index file is valid! Or at least it passed validation against our schema :)'); 
  }

  
}