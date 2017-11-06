import React from 'react';
import PropTypes from 'prop-types';

const selectText = element => {
  let range = null;
  if (document.body.createTextRange) {
    range = document.body.createTextRange();
    range.moveToElementText(element);
    range.select();
  } else if (window.getSelection) {
    const selection = window.getSelection();
    range = document.createRange();
    range.selectNodeContents(element);
    selection.removeAllRanges();
    selection.addRange(range);
  }
  return element.innerText;
};

class SelectAll extends React.Component {
  constructor(props) {
    super(props);
    this.container = null;
    this.handleSelect = this.handleSelect.bind(this);
  }

  copyToClipboard() {
    try {
      document.execCommand('copy');
      return true;
    } catch (err) {
      console.warn('Copy to clipboard failed\n', err);
    }
    return false;
  }

  handleSelect(ev) {
    const text = selectText(this.container || ev.target);
    let toClipboard = false;
    if (this.props.toClipboard) {
      toClipboard = this.copyToClipboard();
    }
    this.props.onSelect(ev, text, toClipboard);
  }

  renderChildren() {
    const { childSelection, selectOn, children } = this.props;
    if (!childSelection) {
      return children;
    }
    return React.Children.map(children, (item, index) => {
      return React.cloneElement(item, {
        [selectOn]: (ev) => {
          this.handleSelect(ev);
        },
        key: index
      });
    });
  }

  render() {
    const {
      onSelect,
      selectOn,
      toClipboard,
      childSelection,
      ...other
    } = this.props;
    const ourProps = childSelection
      ? {}
      : {
          [selectOn]: this.handleSelect,
          ref: node => {
            this.container = node;
          }
        };
    return (
      <div {...other} {...ourProps}>
        {this.renderChildren()}
      </div>
    );
  }
}

SelectAll.defaultProps = {
  onSelect: () => {},
  selectOn: 'onDoubleClick',
  toClipboard: false,
  childSelection: false
};

SelectAll.propTypes = {
  onSelect: PropTypes.func,
  selectOn: PropTypes.oneOf(['onClick', 'onDoubleClick']),
  toClipboard: PropTypes.bool,
  childSelection: PropTypes.bool
};

export default SelectAll;
