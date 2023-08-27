import styles from "./LoadingAnimation.module.css";

const LoadingAnimation = () => {
    return (
        <div className={styles.loadingContainer}>
            <div className={styles.airplane}></div>
        </div>
    )
}

export default LoadingAnimation