import { Link } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../store';
import { login, redirectToRoute } from '../../store/user/action';
import { userSelector } from '../../store/user/selectors';

import { useState } from 'react';
import { useEffect } from 'react';

import { AppRoutes } from '../routes';
import { validatePassword } from '../../utils';

export const LoginPage = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(userSelector);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitDisabled, setSubmitDisabled] = useState(true);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  useEffect(() => {
    if (validatePassword(password)) {
      setSubmitDisabled(false);
    } else {
      setSubmitDisabled(true);
    }
  }, [password]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(login({ email: email, password: password }));
  };

  useEffect(() => {
    if (user) {
      dispatch(redirectToRoute(AppRoutes.MAIN));
    }
  }, [dispatch, user]);

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
            <form className="login__form form" action="#" method="post" onSubmit={handleSubmit}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={handleEmailChange}
                  required
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={handlePasswordChange}
                  required
                />
              </div>
              <button
                className="login__submit form__submit button"
                type="submit"
                disabled={submitDisabled}
              >
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
  );
};
