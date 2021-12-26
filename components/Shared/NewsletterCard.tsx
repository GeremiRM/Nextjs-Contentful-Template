import styles from "./NewsletterCard.module.scss";

export const NewsletterCard: React.FC<{}> = ({}) => {
  return (
    <div className={styles.card}>
      <div className={styles.text}>
        <h4>Become a member</h4>
        <p>Get the latest news right in your inbox. We never spam!</p>
      </div>
      <form>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Enter your e-mail address"
        />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
};
