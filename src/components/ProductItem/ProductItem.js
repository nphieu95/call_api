import React, { Component } from "react";
import { Link } from "react-router-dom";

export class ProductItem extends Component {
  onDelete = (id) => {
    if(confirm('Bạn chắc chắn muốn xóa ???')){ // eslint-disable-line
      this.props.onDelete(id)
    }
  }
  onUpdateStatus = (id) => {
    this.props.onUpdateStatus(id)
  }
  render() {
    var {product, index} = this.props;
    var statusName = product.status ? 'Còn Hàng' : 'Hết Hàng';
    var statusClass = product.status ? 'success' : 'default';
    return (
      <tr>
        <td className="canhGiua">{index + 1}</td>
        <td className="canhGiua">{product.id}</td>
        <td>{product.name}</td>
        <td align="right">{product.price.toLocaleString()} vnđ</td>
        <td className="canhGiua">
          <span onClick={()=>this.onUpdateStatus(product)} className={`label label-${statusClass}`}>{statusName}</span>
        </td>
        <td className="canhGiua">
          <div className="btn-group">
            <Link to={`/product/${product.id}/edit`} className="btn btn-xs btn-warning">
              <i className="fa fa-edit"></i> Sửa
            </Link>
            <button type="button" className="btn btn-xs btn-danger" 
            onClick={()=>this.onDelete(product.id)}>
              <i className="fa fa-trash"></i> Xóa
            </button>
          </div>
        </td>
      </tr>
    );
  }
}

export default ProductItem;
