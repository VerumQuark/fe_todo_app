export default async function validateUser (req, res, next) {
  try {
    let valid = true;
    if (valid) {
      return next();
    }
    next( new Error() );
  } catch (e) {
    next( e );
  }

}