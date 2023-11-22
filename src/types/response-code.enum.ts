enum ResponseCode{
    // HTTP Status 200
    SUCCESS = "Success.",

    // HTTP Status 400
    VALIDATION_FAILED = "Validation failed.",
    DUPLICATE_EMAIL = "Duplicate email.",
    DUPLICATE_NICKNAME = "Duplicate nickname.",
    DUPLICATE_TEL_NUMBER = "Duplicate tel number.",
    NOT_EXISTED_USER = "This user does not exist",
    NOT_EXISTED_EXAMPLE = "This example not exist.",

    // HTTP Status 401
    SIGN_IN_FAIL = "Login information mismatch.",
    AUTHORIZATION_FAIL = "Authorization Failed.",

    // HTTP Status 403
    NO_PERMISSION = "Do not have permission.",

    // HTTP Status 500
    DATABASE_ERROR = "Database error.",
}
export default ResponseCode;