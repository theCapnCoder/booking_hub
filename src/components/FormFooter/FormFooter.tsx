import { FC } from "react";
import { Link } from "react-router-dom";

import styles from "./FormFooter.module.scss";

interface FormFooterProps {
  formType: "sign-in" | "sign-up";
  text: string;
  textLink: string;
  href: string;
}

const FormFooter: FC<FormFooterProps> = ({ formType, text, textLink, href }) => {
  const dataTestId = `auth-${formType}-in-link`;
  console.log(href);

  return (
    <span className={styles.formFooter}>
      {text}
      <Link data-test-id={dataTestId} to={href} className={styles.link}>
        {textLink}
      </Link>
    </span>
  );
};

export default FormFooter;
