import { Link, Navigate } from 'react-router-dom';
import { useAppSelector } from '../../store';
import { authSelector } from '../../store/user/selectors';
import { AppRoutes, AuthState } from '../routes';

import { useCallback, useRef } from 'react';
import { useAppDispatch } from '../../store';
import { login } from '../../store/user/action';

export const LoginPage = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const auth = useAppSelector(authSelector);
  const dispatch = useAppDispatch();
  const onSubmitHandler = useCallback((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    if (formRef && formRef.current) {
      const formData = new FormData(formRef.current);
      const authData = Object.fromEntries(formData) as any;
      dispatch(
        login(authData)
      );
    }
  }, []);
  if (auth === AuthState.AUTH) {
    return <Navigate to={AppRoutes.MAIN} />;
  }
  return (
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link"
                to={'..'}
              >
                <img
                  className="header__logo"
                  src="img/logo.svg"
                  alt="6 cities logo"
                  width={81}
                  height={41}
                />
              </Link>
            </div>
          </div>
        </div>
      </header>
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post" ref={formRef}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required={false}
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required={false}
                />
              </div>
              <button className="login__submit form__submit button" type="submit" onClick={onSubmitHandler}>
                Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
};
