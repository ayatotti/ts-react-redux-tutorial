import { connect } from 'react-redux'
import {setVisibilityFilter, setVisibilityFilterAction} from '../actions/index'
import Link from '../components/Link'
import {state} from "../store";
import {Dispatch} from "redux";

interface Props {
  filter: string
}

const mapStateToProps = (state: state, ownProps: Props) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  }
};

const mapDispatchToProps = (dispatch: Dispatch<()=>setVisibilityFilterAction>, ownProps: Props) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  }
};

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);

export default FilterLink