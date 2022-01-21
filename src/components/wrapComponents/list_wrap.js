import  {connect} from "react-redux";
import List from '../list';
import mapStateToProps from '../../store/mapStateToProps';
// import mapDispatchToProps from '../../store/mapDispatchToProps';

const ListW = connect(mapStateToProps)(List);

export default ListW;