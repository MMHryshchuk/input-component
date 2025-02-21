import {forwardRef, InputHTMLAttributes} from 'react'
import styles from './TextInput.module.scss'

type PropsType = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  required?: boolean
  error?: string
  placeholder?: string
}

const TextInput = forwardRef<HTMLInputElement, PropsType>(
  ({label, placeholder, required = false, disabled = false, error = '', ...props}, ref) => {
    return (
      <div className={`${styles.inputContainer} ${disabled ? styles.disabled : ''}`}>
        <label htmlFor={props.id} className={styles.label}>
          {label} {!required && <span className={styles.optional}>Optional</span>}
        </label>
        <input
          id={props.id}
          ref={ref}
          className={`${styles.input}  ${error ? styles.error : ''}`}
          placeholder={placeholder}
          disabled={disabled}
          aria-invalid={!!error}
          aria-describedby={error ? `${props.id}-error-text` : undefined}
          {...props}
        />
        {error && (
          <span id={`${props.id}-error-text`} className={styles.error}>
            {error}
          </span>
        )}
      </div>
    )
  },
)

export default TextInput
