import React, { Fragment, ReactNode } from 'react';
import { Link, Route } from 'react-router-dom';

import Screen from '../components/Screen';
import styles from './styles.scss';

type FieldProps = {
  children: ReactNode;
};
const Field = ({ children }: FieldProps) => (
  <div className={styles.field}>{children}</div>
);

const Attempt1 = () => (
  <Fragment>
    <h3>Attempt 1</h3>
    <form noValidate method="post">
      <Field>
        <input type="email" placeholder="Email address" />
      </Field>
      <Field>
        <input type="password" placeholder="Password" />
      </Field>
      <div>
        <button type="submit">Login</button>
      </div>
    </form>
  </Fragment>
);

const Attempt2 = () => (
  <Fragment>
    <h3>Attempt 2</h3>
    <form noValidate method="post">
      <Field>
        <label className={styles.fieldLabel}>Email address</label>
        <div>
          <input type="email" />
        </div>
      </Field>
      <Field>
        <div className={styles.fieldLabel}>Password</div>
        <div>
          <input type="password" />
        </div>
      </Field>
      <div>
        <button type="submit">Login</button>
      </div>
    </form>
  </Fragment>
);

const Attempt3 = () => (
  <Fragment>
    <h3>Attempt 3</h3>
    <form noValidate method="post">
      <Field>
        <label className={styles.fieldLabel} htmlFor="email-3">
          Email address
        </label>
        <div>
          <input id="email-3" type="email" />
        </div>
      </Field>
      <Field>
        <label className={styles.fieldLabel} htmlFor="password-3">
          Password
        </label>
        <div>
          <input id="password-3" type="password" />
        </div>
      </Field>
      <div>
        <button type="submit">Login</button>
      </div>
    </form>
  </Fragment>
);

const Attempt4 = () => (
  <Fragment>
    <h3>Attempt 4</h3>
    <form noValidate method="post">
      <Field>
        <label className={styles.fieldLabel} htmlFor="email-4">
          Email address
        </label>
        <div>
          <input id="email-4" type="email" />
        </div>
      </Field>
      <Field>
        <label className={styles.fieldLabel} htmlFor="password-4">
          Password
        </label>
        <div className={styles.fieldHint}>
          Must contain 8 or more characters
        </div>
        <div>
          <input id="password-4" type="password" />
        </div>
      </Field>
      <div>
        <button type="submit">Login</button>
      </div>
    </form>
  </Fragment>
);

const Attempt5 = () => (
  <Fragment>
    <h3>Attempt 5</h3>
    <form noValidate method="post">
      <Field>
        <label className={styles.fieldLabel} htmlFor="email-5">
          Email address
        </label>
        <div>
          <input id="email-5" type="email" />
        </div>
      </Field>
      <Field>
        <label className={styles.fieldLabel} htmlFor="password-5">
          Password
        </label>
        <div id="password-5-hint" className={styles.fieldHint}>
          Must contain 8 or more characters
        </div>
        <div>
          <input
            id="password-5"
            type="password"
            aria-describedby="password-5-hint"
          />
        </div>
      </Field>
      <div>
        <button type="submit">Login</button>
      </div>
    </form>
  </Fragment>
);

const FinalAttempt = () => (
  <Fragment>
    <h3>Final attempt</h3>
    <form noValidate method="post">
      <Field>
        <label htmlFor="email-final">
          <div className={styles.fieldLabel}>Email address</div>
        </label>
        <div>
          <input id="email-final" type="email" />
        </div>
      </Field>
      <Field>
        <label htmlFor="password-final">
          <div className={styles.fieldLabel}>Password</div>
          <div className={styles.fieldHint}>
            Must contain 8 or more characters
          </div>
        </label>
        <div>
          <input id="password-final" type="password" />
        </div>
      </Field>
      <div>
        <button type="submit">Login</button>
      </div>
    </form>
  </Fragment>
);

const Inputs = () => (
  <Screen title="Inputs">
    <h1>Inputs</h1>
    <h2>Login forms</h2>
    <ul className={styles.ul}>
      <li className={styles.li}>
        <Link to="/inputs">Attempt 1</Link>
      </li>
      <li className={styles.li}>
        <Link to="/inputs/attempt-2">Attempt 2</Link>
      </li>
      <li className={styles.li}>
        <Link to="/inputs/attempt-3">Attempt 3</Link>
      </li>
      <li className={styles.li}>
        <Link to="/inputs/attempt-4">Attempt 4</Link>
      </li>
      <li className={styles.li}>
        <Link to="/inputs/attempt-5">Attempt 5</Link>
      </li>
      <li className={styles.li}>
        <Link to="/inputs/final-attempt">Final attempt</Link>
      </li>
    </ul>
    <Route exact path="/inputs" component={Attempt1} />
    <Route exact path="/inputs/attempt-2" component={Attempt2} />
    <Route exact path="/inputs/attempt-3" component={Attempt3} />
    <Route exact path="/inputs/attempt-4" component={Attempt4} />
    <Route exact path="/inputs/attempt-5" component={Attempt5} />
    <Route exact path="/inputs/final-attempt" component={FinalAttempt} />
  </Screen>
);

export default Inputs;
