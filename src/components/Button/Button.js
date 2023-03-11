import styles from './Button.module.scss';
import clsx from 'clsx';

const Button = (props) => {
    return (<button className={clsx(styles.button, props.className)} type='submit' onClick = {props.onClick}>{props.children}</button>);
};

export default Button;