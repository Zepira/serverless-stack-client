const dev = {
  STRIPE_KEY: "pk_test_Sdc4AiawEX2CvDtVWlxfBLoo00ObFuCcgp",
  s3: {
    REGION: "ap-southeast-2",
    BUCKET: "serverless-notes-app-uploads-2019"
  },
  apiGateway: {
    REGION: "ap-southeast-2",
    URL: "https://kwuuon2536.execute-api.ap-southeast-2.amazonaws.com/dev"
  },
  cognito: {
    REGION: "ap-southeast-2",
    USER_POOL_ID: "ap-southeast-2_F6QJl4LCs",
    APP_CLIENT_ID: "5a27bvd98rjsj0rcdsqb0h4pb6",
    IDENTITY_POOL_ID: "ap-southeast-2:f1fdf96f-5e7b-41c2-a3ce-47a057faa8e8"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_Sdc4AiawEX2CvDtVWlxfBLoo00ObFuCcgp",
  s3: {
    REGION: "ap-southeast-2",
    BUCKET: "serverless-notes-app-uploads-2019"
  },
  apiGateway: {
    REGION: "ap-southeast-2",
    URL: "https://n971sql9b1.execute-api.ap-southeast-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "ap-southeast-2",
    USER_POOL_ID: "ap-southeast-2_F6QJl4LCs",
    APP_CLIENT_ID: "5a27bvd98rjsj0rcdsqb0h4pb6",
    IDENTITY_POOL_ID: "ap-southeast-2:f1fdf96f-5e7b-41c2-a3ce-47a057faa8e8"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};