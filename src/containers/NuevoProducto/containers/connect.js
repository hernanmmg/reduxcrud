import { connect } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from "./props";

const bindComponent = Component =>
  connect(mapStateToProps, mapDispatchToProps)(Component);

export { bindComponent };
