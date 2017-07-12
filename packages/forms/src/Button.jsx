import { css, StyleSheet } from 'aphrodite';
import React from 'react';
import PropTypes from 'prop-types';

const unit = 8;

const styles = StyleSheet.create({
  container: {
    cursor: 'pointer',
    transition: 'background 0.3s, border-color 0.3s',
    boxShadow: 'inset 0 0 0 1px #ddd',
    border: 0,
    borderRadius: 1,
    background: '#fff',
    padding: 1 * unit,
    color: '#484848',
    outline: 'none',

    ':hover': {
      background: '#eaeaea',
    },

    ':active': {
      background: '#ddd',
    },
  },

  text: {
    pointerEvents: 'none',
  },

  sizeSmall: {
    fontSize: 12,
    width: 12,
    height: 12,
  },

  sizeRegular: {
    fontSize: 14,
  },

  container_block: {
    width: '100%',
  },

  container_notBlock: {
    width: 'auto',
  },

  text_wrap: {
    whiteSpace: 'normal',
  },

  text_noWrap: {
    whiteSpace: 'nowrap',
  },

  rounded: {
    borderRadius: unit / 2,
  },

  round: {
    width: 4 * unit,
    height: 4 * unit,
    lineHeight: `${4 * unit}px`,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
  },

  round_small: {
    width: 3 * unit,
    height: 3 * unit,
    lineHeight: `${3 * unit}px`,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
  },

  disabled: {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
});

const propTypes = {
  block: PropTypes.bool,
  children: PropTypes.node,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  small: PropTypes.bool,
  wrapText: PropTypes.bool,
  rounded: PropTypes.bool,
  round: PropTypes.bool,
};

const defaultProps = {
  block: false,
  children: null,
  onClick: () => {},
  disabled: false,
  small: true,
  wrapText: false,
  rounded: false,
  round: false,
};

function Button({
  block,
  children,
  onClick,
  disabled,
  small,
  round,
  rounded,
  wrapText,
}) {
  return (
    <button
      aria-disabled={disabled}
      disabled={disabled}
      onClick={onClick}
      className={css(
        styles.container,
        block ? styles.container_block : styles.container_notBlock,
        small ? styles.container_sizeSmall : styles.container_sizeRegular,
        rounded && styles.rounded,
        round && small ? styles.round_small : (round && styles.round),
        disabled && styles.disabled,
      )}
    >
      <span
        className={css(
          styles.text,
          small ? styles.text_sizeSmall : styles.text_sizeRegular,
          wrapText ? styles.text_wrap : styles.text_noWrap,
        )}
      >
        {children}
      </span>
    </button>
  );
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
