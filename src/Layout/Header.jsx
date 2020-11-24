import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row ">
                    <div className="card m-auto bg-info">

                        <div className="useravatar">
                            <img alt="cybersoft.edu.vn" src="images/cybersoft.png" />
                        </div>
                        <div className="card-info">
                            {" "}
                            <span className="card-title">
                                CyberSoft.edu.vn - Đào tạo chuyên gia lập trình - Dự án thử đồ
                                trực tuyến - Virtual Dressing Room
              </span>
                        </div>
                    </div>
                </div>
                <hr className="style13" />
            </div>
        );
    }
}

export default Header;