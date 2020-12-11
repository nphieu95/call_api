import React, { Component } from "react";
import { Link } from "react-router-dom";

export class ProductList extends Component {
  render() {
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h3 style={{ display: "inline-block" }} className="panel-title">
            Danh sách sản phẩm
          </h3>

          <Link
            style={{ float: "right" }}
            to='/product/add'
            className="btn btn-xs btn-info"
          >
            <b>
              <i className="fa fa-plus"></i> Thêm Sản Phẩm
            </b>
          </Link>
        </div>
        <div className="panel-body">
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th className="canhGiua">STT</th>
                <th className="canhGiua">Mã</th>
                <th className="canhGiua">Tên</th>
                <th className="canhGiua">Giá</th>
                <th className="canhGiua">Trạng Thái</th>
                <th className="canhGiua">Hành Động</th>
              </tr>
            </thead>
            <tbody>
              
              {/* ProductItem Start */}
              {this.props.children}
              {/* ProductItem End */}

            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ProductList;
