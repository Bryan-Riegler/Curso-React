import styles from './Form.module.css';

const Form = ({ label, name, onChange }) => {
    return (
        <div className={styles.inputContainer}>
            <label>{label}</label>
            <input name={name} type="text" onChange={onChange} className={styles.input} />
        </div>
    )
}

export default Form