import style from "./style.module.css";

interface AuthorizationModalWindowProps {
  isOpend: boolean;
  closeWindow: () => void;
}

export function AuthorizationModalWindow({
  isOpend,
  closeWindow,
}: AuthorizationModalWindowProps) {
  const displayState = isOpend ? "block" : "none";

  function handleClickOnWrap() {
    closeWindow();
  }

  function handleClickOnModal(e: React.MouseEvent<HTMLDivElement>) {
    e.stopPropagation();
  }
  return (
    <div
      className={style.wrapper}
      onClick={handleClickOnWrap}
      style={{ display: displayState }}
    >
      <div
        className={style.modal}
        onClick={handleClickOnModal}
        style={{ display: displayState }}
      >
        <div className={style.title}>
          Авторизация
          <button className={style.closeBtn} onClick={closeWindow}></button>
        </div>
        <form
          className={style.authorization_form}
          onClick={(e) => e.preventDefault()}
        >
          <div className={style.form_container}>
            <label className={style.form__label} htmlFor="login_input">
              Логин
            </label>
            <input
              id="login_input"
              className={`${style.form__input}`}
              placeholder="login"
              type="text"
            />
            <label className={style.form__label} htmlFor="password_input">
              Пароль
            </label>
            <input
              id="password_input"
              className={`${style.form__input}`}
              placeholder="password"
              type="text"
            />
          </div>
          <button
            className={`${style.formBtn} ${style.formBtn_brown} ${style.btn_auth}`}
          >
            Авторизация
          </button>
          <button
            className={`${style.formBtn} ${style.formBtn_small} ${style.formBtn_enter}`}
          >
            Войти
          </button>
        </form>
      </div>
    </div>
  );
}
