import React, { Fragment, ReactNode } from 'react';

import styles from './styles.scss';

type FieldProps = {
  children: ReactNode;
};
const Field = ({ children }: FieldProps) => (
  <div className={styles.field}>{children}</div>
);

const Inputs = () => (
  <Fragment>
    <h1>Inputs</h1>
    <h2>Login forms</h2>
    <h3>Placeholders only</h3>
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
    <h3>Labels not connected to inputs</h3>
    <form>
      <Field>
        <div className={styles.fieldLabel}>Email address</div>
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
    <h3>Labels connected to inputs</h3>
    <form>
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
    <h3>Hint text not connected to password</h3>
    <form>
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
    <h3>Hint text connected to password using arai-describedby</h3>
    <form>
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
    <h3>Hint text connected to password using label</h3>
    <form>
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

export default Inputs;
