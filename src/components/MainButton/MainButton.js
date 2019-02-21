import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

const styles = {
    root: {
      background: "#4389DB",
      border: 0,
      color: "#fff",
      fontSize: "12px",
      fontWeight: 600,
      textTransform: "none",
      padding: "10px",
      // height: 43,
      // minWidth: "40%",
      "&:hover": {
        background: "#1767A0"
      },
      "&:disabled": {
        background: "#ff2",
        color: "#fff"
      }
    },
    label: {
      letterSpacing: "0.03rem"
    },
    small: {
      padding: "3px 30px"
    },
    medium: {
      width: 225,
      height: 40
    },
    large: {
      width: 275,
      height: 40,
      padding: "3px 10px"
    },
    default: {
      padding: "3px 40px",
      height: 40
    }
  };

const MainButton = props => {
  const onClick = props.onClick;
  const { classes } = props;
  let bsSizeClass;

  switch (props.bsSize) {
    case "small":
      bsSizeClass = classes.small;
      break;
    case "medium":
      bsSizeClass = classes.medium;
      break;
    case "large":
      bsSizeClass = classes.large;
      break;
    default:
      bsSizeClass = classes.default;
  }

  return (
    <Button
      classes={{
        root: props.classes.root,
        label: props.classes.label
      }}
      onClick={onClick}
      type={props.type}
      disabled={props.disabled}
      style={props.style}
      className={bsSizeClass}
      size={props.bsSize}
    >
      {props.children}
    </Button>
  );
};

MainButton.propTypes = {
  handleClick: PropTypes.func,
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  bsSize: PropTypes.oneOf(["small", "medium", "large", "default"]),
  disabled: PropTypes.bool
};

MainButton.defaultProps = {
  bsSize: "default",
  disabled: false
};

export default withStyles(styles)(MainButton);
