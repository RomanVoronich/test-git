
const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';

function createRequestTypes(base) {
  return [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
    acc[type] = `${base}_${type}`;
    return acc;
  }, {});
}

export const VALIDATE = createRequestTypes('VALIDATE');


function action(type, payload = {}) {
  return { type, ...payload };
}

export const validate = {
  request: facial_image => action(VALIDATE[REQUEST], { facial_image }),
  success: response => action(VALIDATE[SUCCESS], { response }),
  failure: error => action(VALIDATE[FAILURE], { error }),
};
