/**
 * Phone validation utilities
 */

export interface PhoneValidationResult {
  isValid: boolean;
  error?: string;
  cleanedPhone: string;
}

// Error message constants for consistency
export const PHONE_ERRORS = {
  INVALID_LENGTH: "Please enter a valid 10-digit mobile number",
  INVALID_PREFIX: "Please enter a valid Indian mobile number",
  INVALID_FORMAT: "Invalid phone number format",
  GENERIC: "Please enter a valid mobile number"
} as const;

/**
 * Validates and cleans a 10-digit Indian phone number
 */
export function validatePhoneNumber(phone: string): PhoneValidationResult {
  // Remove all non-digit characters
  const cleaned = phone.replace(/\D/g, "").slice(0, 10);
  
  // Check if exactly 10 digits
  if (!/^\d{10}$/.test(cleaned)) {
    return {
      isValid: false,
      error: PHONE_ERRORS.INVALID_LENGTH,
      cleanedPhone: cleaned
    };
  }
  
  // Check if it starts with valid Indian mobile prefix (6-9)
  if (!/^[6-9]/.test(cleaned)) {
    return {
      isValid: false,
      error: PHONE_ERRORS.INVALID_PREFIX,
      cleanedPhone: cleaned
    };
  }
  
  return {
    isValid: true,
    cleanedPhone: cleaned
  };
}

/**
 * Formats phone number input by removing non-digits and limiting to 10 digits
 */
export function formatPhoneNumberInput(value: string): string {
  return value.replace(/\D/g, "").slice(0, 10);
}

/**
 * Gets the full international format (+91) for a valid Indian number
 * @throws Error if phone number is invalid
 */
export function getInternationalFormat(phone: string): string {
  const validation = validatePhoneNumber(phone);
  if (!validation.isValid) {
    throw new Error(validation.error || PHONE_ERRORS.INVALID_FORMAT);
  }
  return `+91${validation.cleanedPhone}`;
}
