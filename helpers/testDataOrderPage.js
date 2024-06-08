


// test data

export const HEANDING_TEXT = 'Ваше замовлення';
export const PRODUCT_NAME = 'Куртка Bas...';
export const COLOR_PRODUCT = 'BLACK';
export const PERSON_DATA = '1Особисті дані';
export const NAME_FIELD_TEXT = 'Прізвище *';
export const MESSAGE_WARNING = 'Поле приймає тільки кирилицю та латиницю.';
export const MESSAGE_EMAIL = 'Будь ласка, введіть дійсну адресу електронної пошти';
export const DELIVERY_TEXT = '2Інформація про доставку';
export const MESSAGE_CITY_DROPDOWN = 'Місто не знайдено! Перевірте правильність написання';
export const CHECKBOX_MANDATORY = 'Я погоджуюсь з договором оферти і політикою конфіденційності *';
export const CHECKBOX = 'Зателефонуйте мені для уточнення деталей замовлення';
export const PAYMENT_TEXT = '3Оплата';
export const CHECKBOX_PAYMENT_TEXT = 'Оплата за реквізитамиОплата при отриманні';
export const PLACE_ORDER_BUTTON_TEXT = 'Оформити замовлення'



const generateRandomEmail = () => {
    const randomString = Math.random().toString(36).substring(2, 15);
    const domain = 'example.com';
    return `${randomString}@${domain}`;
  };

 export const RANDOM_EMAIL = generateRandomEmail();