import React, { Component } from "react";
import { Link } from "react-router-dom";
import {actAddProductRequest, actGetProductRequest, actUpdateProductRequest} from './../../actions/index';
import {connect} from 'react-redux';
class ProductActionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      txtName: "",
      txtPrice: "",
      chkbStatus: "",
    };
  }

  componentDidMount() {
    var { match } = this.props;
    if (match) {
      var id = match.params.id;
      this.props.onEditProduct(id);
    }
  }
  componentWillReceiveProps(nextProps){
    if(nextProps && nextProps.itemEditing){
      var {itemEditing} = nextProps;
      this.setState({
        id : itemEditing.id,
        txtName : itemEditing.name,
        txtPrice : itemEditing.price,
        chkbStatus : itemEditing.status
      })
    }
  }

  onChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };
  onSave = (e) => {
    e.preventDefault();
    var { id, txtName, txtPrice, chkbStatus } = this.state;
    var { history } = this.props;
    var product = {
      id : id,
      name : txtName,
      price : txtPrice,
      status : chkbStatus
    }
    if (id) {
      // //update http://localhost:3000/products/:id => Http method : PUT
      // callApi(`products/${id}`, "PUT", {
      //   name: txtName,
      //   price: txtPrice,
      //   status: chkbStatus,
      // }).then((res) => {
      //   history.goBack();
      //   // history.push('/');
      // });
      this.props.onUpdateProduct(product);
    } else {
      this.props.onAddProduct(product);
      
    }
    history.goBack();
  };
  render() {
    var { txtName, txtPrice, chkbStatus } = this.state;
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xs-offset-3">
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title">Thêm sản phẩm</h3>
          </div>
          <div className="panel-body">
            <form onSubmit={this.onSave}>
              <div className="form-group">
                <label>Tên Sản Phẩm: </label>
                <input
                  type="text"
                  className="form-control"
                  name="txtName"
                  value={txtName}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label>Giá Sản Phẩm: </label>
                <input
                  type="number"
                  className="form-control"
                  name="txtPrice"
                  value={txtPrice}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <div className="checkbox">
                  <label style={{ color: "green" }}>
                    <input
                      type="checkbox"
                      name="chkbStatus"
                      value={chkbStatus}
                      onChange={this.onChange}
                      checked={chkbStatus}
                    />
                    Còn hàng
                  </label>
                  <label style={{ color: "red" }}>
                    * Không chọn khi hết hàng!!!
                  </label>
                </div>
              </div>
              <div className="btn-group btn-group-justified"></div>
              <div className="btn-group btn-group-justified">
                <div className="btn-group">
                  <button type="submit" className="btn btn-primary center">
                    Lưu Lại
                  </button>
                </div>
                <div className="btn-group">
                  <Link to="/product-list" className="btn btn-danger center">
                    Trở Lại
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state)=>{
  return {
    itemEditing : state.itemEditing
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddProduct : (product)=>{
      dispatch(actAddProductRequest(product));
    },
    onEditProduct : (id)=>{
      dispatch(actGetProductRequest(id))
    },
    onUpdateProduct : (product)=>{
      dispatch(actUpdateProductRequest(product))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps) (ProductActionPage);
