import styles from "./CompanyCard.module.scss";

const CompanyCard = ({ image, id }) => {
  return (
    <div className={styles.container}>
      <img src={image} alt={id} />
    </div>
  );
};

export default CompanyCard;
