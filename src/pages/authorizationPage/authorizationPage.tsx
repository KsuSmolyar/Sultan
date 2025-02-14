import { useState } from "react";
import styles from './authorizationpage.module.css';
import classNames from "classnames";
import { ButtonOrLink } from "../../shared/ui/ButtonOrLink";
import { InputForm } from "../../shared/ui/InputForm";
import { Form } from "../../shared/ui/Form";


export const AuthorizationPage = () => {
    const [selectForm, setSelectForm] = useState<"registration" | "authorization">("registration");
    const [showPassword, setShowPassword] = useState(false);

    const onAuthorizationClick = () => {
      setSelectForm("authorization");
    }

    const onRegistrationClick = () => {
      setSelectForm("registration");
    }

    const onToggleShowPassword = () => {
      setShowPassword(prev => !prev);
    }

  return (
    <div className={styles.authorizationPageContainer}>
      <div className={styles.toggleContainer}>
      <button className={classNames(styles.registrationButton, {
        [styles.activeButton]: selectForm === "registration"
      })} onClick={onRegistrationClick}>Регистрация</button>
      <span>|</span>
      <button className={classNames(styles.authorizationButton, {
        [styles.activeButton]: selectForm === "authorization"
      })} onClick={onAuthorizationClick}>Авторизация</button>
      </div>
      
      {selectForm === "registration" && <Form className={classNames(styles.registrationForm, styles.form)}>
        <div className={styles.formInnerContainer}>
          <div className={styles.inputContainer}>
            <InputForm labelClassName={styles.labelForm} type="text" placeholderText="Имя" id="registration-name" required/>
            <InputForm labelClassName={styles.labelForm} type="text" placeholderText="Фамилия" id="registration-lastName" required/>
            <InputForm labelClassName={styles.labelForm} type="email" placeholderText="e-mail" id="registration-email"/>
            <InputForm labelClassName={styles.labelForm} type="tel" placeholderText="Телефон" id="registration-tel" required/>
          </div>
          <ButtonOrLink className={styles.formButton} type="submit" variant="secondary">Зарегистрироваться</ButtonOrLink>
        </div>
      </Form>}
      
     {selectForm === "authorization" && <Form className={classNames(styles.authorizationForm, styles.form)}>
        <div className={styles.formInnerContainer}>
          <div className={classNames(styles.inputContainer, styles.authorizationInputContainer)}>
            <InputForm type="email" placeholderText="Логин" id="authorization-login" required/>
            <InputForm labelClassName={styles.passwordInput} 
                        type={showPassword ? "text" : "password"} 
                        placeholderText="Пароль" 
                        id="authorization-password" 
                        required
                        minLength={6}>
              <button type="button" className={styles.passwordToggleButton} onClick={onToggleShowPassword}>
                <img src={showPassword ? '/Sultan/eye_watch_icon.svg' : '/Sultan/hide_eye_close_icon.svg'} alt="скрыть пароль" />
              </button>
            </InputForm>                  
            
          </div>
          <ButtonOrLink className={styles.formButton} type="submit" variant="secondary">Авторизоваться</ButtonOrLink>
        </div>
      </Form>}
    </div>
  )
}
